let { Text, Slug, Relationship } = require("@itoa/fields");
const { roleSeller } = require("@itoa/lib/access");

module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
    },
    url: {
      type: Slug,
      from: "name",
      schemaDoc: "Đường dẫn",
    },
  },
  access: roleSeller,
  cacheHint: {
    scope: "PUBLIC",
    maxAge: 60 * 60, // 1 hour
  },
};
