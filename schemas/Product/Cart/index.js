let { Relationship } = require("@itoa/fields");

const { roleAny } = require("../../access");
const { of, ip } = require("../../plugin");
module.exports = {
  fields: {
    items: {
      type: Relationship,
      ref: "ProductCartItem.cart",
      many: true,
    },
    of,
    ip,
  },

  hooks: {
    validateInput: async ({ context, resolvedData }) => {
      await of.hooks.validateInput({ context, resolvedData });
      await ip.hooks.validateInput({ context, resolvedData });
    },
  },
  access: roleAny,
};
