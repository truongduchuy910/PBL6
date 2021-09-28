/*
 * This is a keystone list that stores facebook messages
 */
let { Text, Relationship } = require("@itoa/fields");
const { roleSeller } = require("@itoa/lib/access");
const { ip } = require("@itoa/lib/plugins");
module.exports = {
  fields: {
    page: {
      type: Relationship,
      ref: "MessengerUser",
    },
    person: {
      type: Relationship,
      ref: "MessengerUser",
    },
    timestamp: { type: Text },
    message: { type: Text },
    ip,
  },
  hooks: {
    validateInput: async ({ context, resolvedData }) => {
      await ip.hooks.validateInput({ context, resolvedData });
    },
  },
  access: roleSeller,
  labelField: "message",
};
