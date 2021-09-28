let { Text, Checkbox } = require("@itoa/fields");
const { roleAny } = require("../access");
const { of } = require("../plugin");
module.exports = {
  fields: {
    phone: {
      type: Text,
      isRequired: true,
    },
    name: {
      type: Text,
      isRequired: true,
    },
    address: {
      type: Text,
      isRequired: true,
    },
    email: {
      type: Text,
    },
    message: {
      type: Text,
    },
    isDefault: {
      type: Checkbox,
    },
    of,
  },
  hooks: {
    validateInput: async ({ context, resolvedData }) => {
      await of.hooks.validateInput({ context, resolvedData });
    },
  },
  access: roleAny,
};
