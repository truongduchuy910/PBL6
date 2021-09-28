let { File, Text } = require("@itoa/fields");
let { fileAdapter, fileHooks } = require("@itoa/lib/stores");
let { roleSeller } = require("@itoa/lib/access");
module.exports = {
  active: true,
  fields: {
    file: {
      type: File,
      adapter: fileAdapter,
      hooks: fileHooks("file"),
      isRequired: true,
    },
    address: {
      type: Text,
      label: "Địa chỉ",
      isUnique: true,
    },
  },
  access: roleSeller,
  cacheHint: {
    scope: "PUBLIC",
    maxAge: 60 * 60, // 1 hour
  },
};
