let { Text, File } = require("@itoa/fields");
let { imageAdapter, imageHooks } = require("../../../localFileAdapter");
const { roleSeller } = require("../../../access");
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
