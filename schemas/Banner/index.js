let { File, Text, Slug } = require("@itoa/fields");
const { roleSeller } = require("../access");
let { imageAdapter, imageHooks } = require("../localFileAdapter");
module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
      label: "Tiêu đề",
    },
    slogan: {
      type: Text,
    },
    image: {
      type: File,
      adapter: imageAdapter,
      hooks: imageHooks("image"),
    },
    description: {
      type: Text,
      label: "Mô tả",
    },
    url: { type: Text, from: "name" },
  },
  access: roleSeller,
  cacheHint: {
    scope: "PUBLIC",
    maxAge: 60 * 60, // 1 hour
  },
};
