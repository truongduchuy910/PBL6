const { Text, Password, Relationship, Checkbox } = require("@itoa/fields");
const { ip } = require("@itoa/lib/plugins");
const { roleSeller } = require("@itoa/lib/access");

module.exports = {
  fields: { StagingToken: { type: Text }, ProductionToken: { type: Text }, ip },
  hooks: {
    validateInput: async ({ context, resolvedData }) => {
      await ip.hooks.validateInput({ context, resolvedData });
    },
  },
  access: roleSeller,
};
