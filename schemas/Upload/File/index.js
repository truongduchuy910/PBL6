let { File, Text } = require("@itoa/fields");
let { fileAdapter, fileHooks } = require("@itoa/lib/stores");
let { roleSimple } = require("@itoa/lib/access");
const { atTracking, byTracking } = require("@itoa/list-plugins");

const { models } = require("@itoa/schemas/config");

const uploadFile = {
  active: models.includes("UploadFile"),
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
  access: roleSimple,
  cacheHint: {
    scope: "PUBLIC",
    maxAge: 60 * 60, // 1 hour
  },
  plugins: [atTracking(), byTracking()],
};

module.exports = uploadFile;
