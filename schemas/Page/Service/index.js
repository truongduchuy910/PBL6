let { File, Text, Relationship, Editor } = require("@itoa/fields");
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
      label: "Hình ảnh đại diện",
    },
    description: {
      type: Text,
      label: "Mô tả",
    },
    post: {
      type: Relationship,
      ref: "Post",
      label: "Bài viết (chọn hoặc tạo mới)",
    },
    content: {
      type: Editor,
      label: "Nội dung",
    },
  },
  access: roleSeller,
  cacheHint: {
    scope: "PUBLIC",
    maxAge: 60 * 60, // 1 hour
  },
};
