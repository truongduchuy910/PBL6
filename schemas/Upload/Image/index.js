let { File, Text } = require("@itoa/fields");
let { imageAdapter, imageHooks } = require("@itoa/lib/stores");
let { roleSeller } = require("@itoa/lib/access");

module.exports = {
  fields: {
    file: {
      type: File,
      adapter: imageAdapter,
      hooks: imageHooks("file"),
      isRequired: true,
    },
    alt: {
      type: Text,
      label: "Tên tìm kiếm (Nên đặt)",
    },
  },
  labelResolver: (item) => {
    return `${item.alt ? item.alt : item.file.originalFilename}`;
  },
  access: roleSeller,
  cacheHint: {
    scope: "PUBLIC",
    maxAge: 60 * 60, // 1 hour
  },
};
