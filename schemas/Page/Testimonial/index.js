let { File, Text } = require("@itoa/fields");
const { roleSeller } = require("@itoa/lib/access");
let { imageAdapter, imageHooks } = require("@itoa/lib/stores");

module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
      label: "Tên khách hàng",
    },
    profile: {
      type: Text,
      label: "Giới thiệu & hồ sơ",
    },
    description: {
      type: Text,
      label: "Nội dung",
    },
    image: {
      type: File,
      adapter: imageAdapter,
      hooks: imageHooks("image"),
      label: "Hình ảnh",
    },
  },
  access: roleSeller,
  cacheHint: {
    scope: "PUBLIC",
    maxAge: 60 * 60, // 1 hour
  },
};
