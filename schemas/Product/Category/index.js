let {
  Checkbox,
  File,
  Text,
  Slug,
  Relationship,
  Integer,
  Editor,
} = require("@itoa/fields");
const { roleSeller } = require("../../access");
const { cache } = require("../../cache");
let { imageAdapter, imageHooks } = require("../../localFileAdapter");

module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
      label: "Tên danh mục (bắt buộc )",
    },
    description: {
      type: Editor,
    },
    file: {
      type: File,
      adapter: imageAdapter,
      hooks: imageHooks("file"),
      label: "Hình ảnh đại diện",
    },
    parent: {
      type: Relationship,
      label: "Thuộc danh mục? (không bắt buộc)",
      ref: "ProductCategory.childs",
    },
    prioritize: { type: Integer, label: "độ ưu tiên" },

    url: {
      type: Slug,
      from: "name",
      schemaDoc: "Đường dẫn",
      adminConfig: {
        isReadOnly: true,
      },
    },
    childs: {
      type: Relationship,
      label: "Các danh mục con",
      ref: "ProductCategory.parent",
      many: true,
      adminConfig: {
        isReadOnly: true,
      },
    },
    products: {
      type: Relationship,
      ref: "Product.categories",
      many: true,
      adminConfig: {
        isReadOnly: true,
        className: "col-sm-12 col-md-6",
      },
    },
  },
  labelResolver: (item) => {
    const parent = cache.allProductCategories.find((c) => c.id == item.parent);
    const grandfather = parent
      ? cache.allProductCategories.find((c) => c.id == parent.parent)
      : null;
    // great-grandfather
    return `${grandfather ? grandfather.name + " / " : ""}${
      parent ? parent.name + " / " : ""
    }${item.name}`;
  },
  access: roleSeller,
  cacheHint: {
    scope: "PUBLIC",
    maxAge: 60 * 60, // 1 hour
  },
};
