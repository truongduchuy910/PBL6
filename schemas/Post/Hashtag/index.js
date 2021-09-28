let {
  Editor,
  Relationship,
  Text,
  Slug,
  Integer,
  Checkbox,
  File,
} = require("@itoa/fields");
const { Color } = require("@itoa/fields-color");

let { roleSeller } = require("../../access");
const { imageAdapter, imageHooks } = require("../../localFileAdapter");

module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
    },
    description: { type: Editor },
    parent: {
      type: Relationship,
      label: "Thuộc danh mục? (không bắt buộc)",
      ref: "PostHashtag.childs",
    },
    prioritize: { type: Integer, label: "độ ưu tiên" },
    image: {
      type: File,
      adapter: imageAdapter,
      hooks: imageHooks("image"),
      label: "Hình ảnh đại diện",
    },
    color: { type: Color },
    url: {
      type: Slug,
      from: "name",
      adminConfig: {
        isReadOnly: true,
      },
      label: "Đường dẫn, slug (tạo tự động)",
      schemaDoc: "Đường dẫn",
    },
    childs: {
      type: Relationship,
      label: "Các danh mục con",
      ref: "PostHashtag.parent",
      many: true,
      adminConfig: {
        isReadOnly: true,
      },
    },
    pin: {
      // Danh mục đươc ghim lên trang chủ
      type: Checkbox,
    },
  },
  labelField: "name",
  access: roleSeller,
  cacheHint: {
    scope: "PUBLIC",
    maxAge: 60 * 60, // 1 hour
  },
};
