let { Relationship } = require("@itoa/fields");

const { roleAny } = require("@itoa/lib/access");
const { of, ip } = require("@itoa/lib/plugins");
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
