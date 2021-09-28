let { Relationship, Integer, File } = require("@itoa/fields");
const { roleSeller } = require("@itoa/lib/access");

let { imageAdapter, imageHooks } = require("@itoa/lib/stores");

module.exports = {
  fields: {
    product: {
      type: Relationship,
      ref: "Product.stocks",
      label: "Sản phẩm",
    },
    attributeValues: {
      type: Relationship,
      ref: "ProductAttributeValue",
      many: true,
      label: "Giá trị thuộc tính",
      adminConfig: { className: "col-md-12 col-lg-6" },
    },
    quantity: {
      type: Integer,
      label: "Số lượng",
      adminConfig: { className: "col-md-12 col-lg-6" },
    },
    image: {
      type: File,
      adapter: imageAdapter,
      hooks: imageHooks("image"),
      label: "Hình ảnh",
    },
  },
  labelField: "quantity",
  access: roleSeller,
  disableMultipleLanguages: true,
};
