let { Text, Relationship } = require("@itoa/fields");
const { roleSeller } = require("@itoa/lib/access");
const { ip } = require("@itoa/lib/plugins");
module.exports = {
  fields: {
    tag: { type: Text },
    messengers: { type: Relationship, ref: "MessengerUser", many: true },
    ip,
  },
  hooks: {
    validateInput: async ({ context, resolvedData }) => {
      await ip.hooks.validateInput({ context, resolvedData });
    },
  },
  access: roleSeller,
  labelField: "tag",
};
