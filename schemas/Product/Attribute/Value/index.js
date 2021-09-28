let { Text, File } = require("@itoa/fields");
let { imageAdapter, imageHooks } = require("@itoa/lib/stores");
const { roleSeller } = require("@itoa/lib/access");
module.exports = {
  fields: {
    value: {
      type: Text,
      isRequired: true,
      label: "Giá trị thuộc tính",
    },
    file: {
      type: File,
      adapter: imageAdapter,
      hooks: imageHooks("file"),
      label: "Hình ảnh",
    },
  },

  access: roleSeller,
  labelField: "value",
  disableMultipleLanguages: true,
};
