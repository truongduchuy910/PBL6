/*
 * This is a keystone list that stores facebook messages
 */
let { Text, Relationship, Checkbox, Wysiwyg } = require("@itoa/fields");
const { roleSeller } = require("@itoa/lib/access");
const { ip } = require("@itoa/lib/plugins");
module.exports = {
  fields: {
    name: { type: Text },
    degree: { type: Text },
    experience: { type: Text },
    description: { type: Wysiwyg },
    ip,
  },
  hooks: {
    validateInput: async ({ context, resolvedData }) => {
      await ip.hooks.validateInput({ context, resolvedData });
    },
  },
  access: roleSeller,
  labelField: "name",
};
