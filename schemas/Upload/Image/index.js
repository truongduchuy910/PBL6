let { File, Text } = require("@itoa/fields");
let { imageAdapter, imageHooks } = require("@itoa/lib/stores");
let { roleSeller, roleSimple } = require("@itoa/lib/access");
const { atTracking, byTracking } = require("@itoa/list-plugins");

module.exports = {
  active: true,
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
  hooks: {
    resolveInput: async ({ resolvedData = {} }) => {
      if (!resolvedData.alt && resolvedData.file) resolvedData.file.filename;
      return resolvedData;
    },
  },
  access: roleSimple,
  cacheHint: {
    scope: "PUBLIC",
    maxAge: 60 * 60, // 1 hour
  },
  plugins: [atTracking(), byTracking()],
};
