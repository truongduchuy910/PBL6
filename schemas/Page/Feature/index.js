let { File, Text, Editor } = require("@itoa/fields");

const { roleSeller } = require("@itoa/lib/access");
let { imageAdapter, imageHooks } = require("@itoa/lib/stores");

module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
      label: "Tiêu đề",
    },
    image: {
      type: File,
      adapter: imageAdapter,
      hooks: imageHooks("image"),
      label: "Hình ảnh/Icon",
    },
    description: {
      type: Editor,
      label: "Mô tả",
    },
    content: {
      type: Editor,
      label: "Nội dung chi tiết",
    },
  },
  access: roleSeller,
  cacheHint: {
    scope: "PUBLIC",
    maxAge: 60 * 60, // 1 hour
  },
};
