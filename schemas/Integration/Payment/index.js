let { Text, Integer } = require("@itoa/fields");
const { roleSeller } = require("@itoa/lib/access");
const { ip } = require("@itoa/lib/plugins");
module.exports = {
  fields: {
    identity: { type: Text, isRequired: true },
    text: { type: Text, isRequired: true },
    amount: { type: Text, isRequired: true },
    ip,
  },
  hooks: {
    validateInput: async ({ context, resolvedData }) => {
      await ip.hooks.validateInput({ context, resolvedData });
    },
  },
  // access: roleSeller,
  labelField: "identity",
};
