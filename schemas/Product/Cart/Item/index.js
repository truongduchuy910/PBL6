const { gql } = require("@apollo/client/core");
let { Relationship, Integer, Text } = require("@itoa/fields");
const { roleAny } = require("@itoa/lib/access");
const { of } = require("@itoa/lib/plugins");
const GET = gql`
  query($product: ID!, $stock: ID) {
    product: Product(where: { id: $product }) {
      id
      sale
      price
      attributes {
        id
      }
    }
    allProductStocks(where: { id: $stock }) {
      quantity
    }
    allPages {
      ordering
    }
  }
`;
module.exports = {
  fields: {
    product: {
      type: Relationship,
      ref: "Product",
    },
    sale: {
      type: Integer,
    },
    price: {
      type: Integer,
    },
    quantity: {
      type: Integer,
    },
    cart: {
      type: Relationship,
      ref: "ProductCart.items",
    },
    stock: { type: Relationship, ref: "ProductStock" },
    of,
  },

  hooks: {
    // https://www.keystonejs.com/api/hooks/#validateinput
    validateInput: async ({
      operation,
      resolvedData,
      existingItem,
      context,
      originalInput,
    }) => {
      const variables = {
        product:
          operation === "create"
            ? originalInput.product.connect.id
            : String(existingItem.product),
        stock:
          operation === "create"
            ? originalInput.stock
              ? originalInput.stock.connect.id
              : null
            : existingItem.stock
            ? String(existingItem.stock)
            : null,
      };
      /**
       * Get product
       */
      const {
        data: {
          product,
          allProductStocks: [stock = false],
          allPages: [page],
        },
        errors,
      } = await context.executeGraphQL({
        context,
        query: GET,
        variables,
      });
      if (errors) throw new Error(errors);
      if (!page.ordering)
        throw new Error(
          "Tính năng đặt hàng tạm đóng, vui lòng liên hệ để mua hàng.",
        );
      if (!stock) {
        // Có quản lí kho (page.mode === "stock") nhưng chưa nhập giá trị kho.
        // Thì ở giao diện sẽ không tìm thấy và không gửi lên được id stock
        throw new Error(
          "Bạn chưa chọn đủ thuộc tính hoặc sản phẩm chưa được cập nhật",
        );
      }

      // Nếu có thuộc tính thì bắt buộc phải chọn đủ thuộc tính.

      // Kiểm tra số lượng
      if (stock) {
        if (stock.quantity === 0) throw new Error("Sản phẩm hết hàng.");
        if (stock.quantity < originalInput.quantity)
          throw new Error("Tồn kho không đủ.");
      }

      /**
       *
       */
      resolvedData.sale = product.sale;
      resolvedData.price = product.price;
      /**
       *
       */
      await of.hooks.validateInput({ context, resolvedData });
      /**
       *
       */
      return resolvedData;
    },
  },
  access: roleAny,
};
