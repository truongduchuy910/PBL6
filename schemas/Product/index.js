let {
  Text,
  Relationship,
  Slug,
  Integer,
  File,
  Checkbox,
  Select,
  Currency,
  Editor,
  Images,
} = require("@itoa/fields");

let { imageAdapter, imageHooks } = require("@itoa/lib/stores");
const { roleSeller } = require("@itoa/lib/access");

const { attributes } = require("./hooks");
module.exports = {
  fields: {
    image: {
      type: File,
      adapter: imageAdapter,
      hooks: imageHooks("image"),
      label: "Hình ảnh",
    },
    images: {
      type: Images,
      ref: "UploadImage",
      search: "alt",
      file: "file",
      label: "Hình thêm",
      many: true,
    },
    name: {
      type: Text,
      isRequired: true,
      label: "Tên sản phẩm (Bắt buộc)",
    },
    price: {
      type: Currency,
      isRequired: true,
      label: "Giá (Bắt buộc)",
      adminConfig: { className: "col-sm-12 col-md-6" },
    },
    sale: {
      type: Currency,
      label: "Giảm còn",
      adminConfig: { className: "col-sm-12 col-md-6" },
    },
    /**
     *
     */
    status: {
      type: Select,
      options: [
        { value: "bestSeller", label: "Bán chạy" },
        { value: "newArrival", label: "Mới về" },
        { value: "hotDeal", label: "Hot deal" },
      ],
      adminConfig: { className: "col-sm-12 col-md-6" },
    },
    /**
     *
     */

    brand: {
      type: Relationship,
      ref: "ProductBrand",
      label: "Thương hiệu",
      adminConfig: { className: "col-sm-12 col-md-6" },
    },

    categories: {
      type: Relationship,
      ref: "ProductCategory.products",
      label: "Danh mục",
      many: true,
      adminConfig: { className: "col-sm-12 col-md-6" },
    },

    attributes: {
      type: Relationship,
      ref: "ProductAttribute.products",
      many: true,
      label: "Nhóm thuộc tính (Chọn sau khi tạo)",
      adminConfig: { className: "col-sm-12 col-md-6" },
      hooks: attributes,
    },
    /**
     *
     */
    description: {
      type: Editor,
      label: "Mô tả",
      schemaDoc: "Mô tả giới thiệu về sản phẩm",
    },
    detail: {
      type: File,
      adapter: imageAdapter,
      hooks: imageHooks("detail"),
      label: "Hình ảnh thông tin chi tiết",
    },
    guide: {
      type: Editor,
      label: "Hướng dẫn",
      schemaDoc: "Hướng dẫn sử dụng",
    },
    isDraft: {
      type: Checkbox,
      label: "đây là bản nháp?",
      adminConfig: { className: "col-sm-12 col-md-6" },
    },
    isOutOfStock: {
      type: Checkbox,
      label: "Hết hàng, tạm dừng?",
      adminConfig: { className: "col-sm-12 col-md-6" },
    },
    /**
     *
     */

    url: {
      type: Slug,
      from: "name",
      schemaDoc: "Đường dẫn",
      adminConfig: {
        isReadOnly: true,
      },
    },
    stocks: {
      type: Relationship,
      ref: "ProductStock.product",
      many: true,
      adminConfig: {
        isReadOnly: true,
      },
    },
  },
  access: roleSeller,
  labelField: "name",
  feed: 100,
  cacheHint: {
    scope: "PUBLIC",
    maxAge: 60 * 60, // 1 hour
  },
};
