/*
 * This is a keystone list that stores facebook messages
 */
let { Text } = require("@itoa/fields");
const Momo = require("../Momo");
const { roleSeller } = require("@itoa/lib/access");
const { ip } = require("@itoa/lib/plugins");
module.exports = {
  fields: {
    partner: { type: Text, isRequired: true },
    access: { type: Text, isRequired: true },
    secret: { type: Text, isRequired: true },
    endpoint: { type: Text, isRequired: true },
    ip,
  },
  hooks: {
    validateInput: async ({ context, resolvedData }) => {
      await ip.hooks.validateInput({ context, resolvedData });
    },
  },
  // access: roleSeller,
  labelField: "partner",
};
