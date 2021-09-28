const { request, gql } = require("graphql-request");

let {
  Relationship,
  Select,
  Text,
  Integer,
  Checkbox,
} = require("@itoa/fields");
const { roleAny } = require("@itoa/lib/access");
const { of } = require("@itoa/lib/plugins");
const DELETE_CARTITEMS = gql`
  mutation($cart: ID!) {
    updateProductCart(id: $cart, data: { items: { disconnectAll: true } }) {
      id
    }
  }
`;
const CREATE_NOTIFICATION = gql`
  mutation($group: ID!, $text: String) {
    createNotification(
      data: { group: { connect: { id: $group } }, text: $text }
    ) {
      id
    }
  }
`;
const GET_GROUP = gql`
  query($group: String) {
    allNotificationGroups(where: { tag: $group }) {
      id
      tag
    }
  }
`;
const GET_DETAIL = gql`
  query($contact: ID!, $cart: ID!, $code: String) {
    Contact(where: { id: $contact }) {
      id
      name
      phone
      address
    }
    ProductCart(where: { id: $cart }) {
      items {
        id
        quantity
        sale
        price
        product {
          id
          name
        }
        stock {
          attributeValues {
            id
            value
          }
        }
      }
    }
    allPages {
      shipMoneySupport
    }
    allProductDiscounts(where: { code: $code }) {
      id
      name
      value
      type
      condition
    }
  }
`;
module.exports = {
  fields: {
    contact: {
      type: Relationship,
      ref: "Contact",
    },
    code: { type: Text },
    cart: { type: Relationship, ref: "ProductCart" },
    /**
     *
     */
    status: { type: Relationship, ref: "ProductOrderStatus", many: true },
    isExport: {
      type: Checkbox,
      adminConfig: {
        isReadOnly: true,
      },
    },
    //
    items: {
      type: Relationship,
      ref: "ProductCartItem",
      many: true,
      adminConfig: {
        isReadOnly: true,
      },
    },
    payment: {
      type: Select,
      options: [
        { value: "cod", label: "COD" },
        { value: "transfer", label: "Chuyển khoản" },
        { value: "credit", label: "tín dụng" },
      ],
      adminConfig: {
        isReadOnly: true,
      },
    },
    discount: {
      type: Relationship,
      ref: "ProductDiscount.orders",
      adminConfig: {
        isReadOnly: true,
      },
    },
    saving: { type: Integer },
    total: { type: Integer },
    of,
  },

  hooks: {
    // https://www.keystonejs.com/api/hooks#resolveinput
    resolveInput: async ({ operation, originalInput, resolvedData }) => {
      if (operation === "create") {
        const {
          contact: {
            create: { phone, name, address },
          },
          cart: {
            connect: { id },
          },
        } = originalInput;
        if (!name) throw new Error("Vui lòng nhập Họ tên.");
        if (!phone) throw new Error("Vui lòng nhập số điện thoại.");
        if (!address) throw new Error("Vui lòng nhập địa chỉ.");
        if (!id) throw new Error("Lỗi, thử tải lại trang.");
      }
      return resolvedData;
    },
    // https://www.keystonejs.com/api/hooks/#validateinput
    validateInput: async ({ operation, resolvedData, context }) => {
      if (operation === "create") {
        console.log(resolvedData);
        /**
         * GET DETAIL
         */
        const {
          data: {
            allPages: [page],
            ProductCart: { items: allProductCartItems = [] },
            Contact: contact = {},
            allProductDiscounts = [],
          },
          errors,
        } = await context.executeGraphQL({
          context,
          query: GET_DETAIL,
          variables: {
            contact: resolvedData.contact,
            cart: resolvedData.cart,
            code: resolvedData.code,
          },
        });
        /**
         * ERROR HANDLE
         */

        if (!allProductCartItems.length)
          throw new Error("Bạn chưa chọn sản phẩm.");
        if (resolvedData.code && !allProductDiscounts.length)
          throw new Error("Mã khuyến mãi không tồn tại.");
        if (!page || !contact.id) throw new Error("Lỗi, thử tải lại trang.");
        if (errors) throw new Error(errors);

        /**
         *
         */
        resolvedData.items = allProductCartItems.map((item) => item.id);
        //
        var saving = 0;
        const [Discount] = allProductDiscounts;
        var provisional = 0;
        allProductCartItems.map((item) => {
          provisional += (item.sale || item.price) * (item.quantity || 1);
          saving +=
            (item.price - (item.sale || item.price)) * (item.quantity || 1);
        });
        if (Discount && provisional < Discount.condition)
          throw new Error(
            `Lỗi, mã chỉ áp dụng cho đơn hàng trên ${Discount.condition}đ`
          );
        /**
         *
         */
        resolvedData.discount = Discount ? Discount.id : null;

        var discount = Discount
          ? Discount.type === "percentage"
            ? Math.round(((provisional / 100) * Discount.value) / 1000) * 1000
            : Discount.value
          : 0;
        resolvedData.total =
          (discount ? provisional - discount : provisional) +
          (page.shipMoneySupport || 0);
        saving += discount;
        resolvedData.saving = saving;
        /**
         * CREATE MESSAGE
         */
        const text = `KHÁCH HÀNG
${contact.name},
Điện thoại ${contact.phone}.
Địa chỉ ${contact.address}.
Thanh toán ${resolvedData.payment}
CHI TIẾT
${allProductCartItems
  .map(
    (item) =>
      `${item.quantity} ${item.product.name} ${formatMoney(
        item.sale || item.price
      )} ${
        item.stock
          ? item.stock.attributeValues.map((value) => value.value).join(",")
          : ``
      }`
  )
  .join("\n")}

  ${
    discount
      ? `TẠM TÍNH ${formatMoney(provisional)}
🔖 -${discount}đ
THÀNH TIỀN ${formatMoney(provisional - discount)}đ`
      : `THÀNH TIỀN ${formatMoney(provisional)}đ`
  }
`;
        const {
          data: disconnectItems,
          errors: deleteErrors,
        } = await context.executeGraphQL({
          context,
          query: DELETE_CARTITEMS,
          variables: {
            cart: resolvedData.cart,
          },
        });
        console.log(disconnectItems, deleteErrors);
        /**
         * BROADCAST
         */
        try {
          if (context.req.headers.referer) {
            const domain = context.req.headers.referer.split("/")[2];
            const { allNotificationGroups } = await request(
              process.env.NODE_ENV === "production"
                ? "https://api.itoa.vn/admin/api"
                : "http://localhost:7009/admin/api",
              GET_GROUP,
              { group: domain }
            );
            if (allNotificationGroups) {
              const [{ id: group }] = allNotificationGroups;
              await request(
                process.env.NODE_ENV === "production"
                  ? "https://api.itoa.vn/admin/api"
                  : "http://localhost:7009/admin/api",
                CREATE_NOTIFICATION,
                { group, text }
              );
            }
          }
        } catch (e) {
          console.log(e);
        }
        await of.hooks.validateInput({ context, resolvedData });
      }
      return resolvedData;
    },

    validateDelete: async ({ existingItem, context }) => {
      const { id } = existingItem;
      const {
        data: { ProductOrder },
      } = await context.executeGraphQL({
        context,
        query: `query($id: ID!) {
        ProductOrder(where: { id: $id }) {
          items {
            id
          }
        }
      }`,
        variables: { id },
      });
      const {
        data: { deleteProductOrders },
        errors,
      } = await context.executeGraphQL({
        context,
        query: `mutation($ids: [ID!]) {
          deleteProductCartItems(ids: $ids) {
            id
          }
        }
        `,
        variables: { ids: ProductOrder.items.map((item) => item.id) },
      });
    },
  },

  access: roleAny,
};
function formatMoney(amount, decimalCount = 0, decimal = ".", thousands = ",") {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
    const negativeSign = amount < 0 ? "-" : "";
    let i = parseInt(
      (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
    ).toString();
    let j = i.length > 3 ? i.length % 3 : 0;
    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : "") +
      i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
      (decimalCount
        ? decimal +
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : "")
    );
  } catch (e) {}
}
