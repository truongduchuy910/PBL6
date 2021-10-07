let { Text } = require("@itoa/fields");
const { MongoId } = require("@itoa/fields-mongoid");

const { roleSimple } = require("@itoa/lib/access");

module.exports = {
  active: true,
  fields: {
    item: { type: MongoId, isRequired: true },
    listKey: { type: Text, isRequired: true },
    fieldName: { type: Text, isRequired: true },
    lang: { type: Text, isRequired: true },
    content: { type: Text, isRequired: true },
  },
  access: roleSimple,
  cacheHint: {
    scope: "PUBLIC",
    maxAge: 60 * 60, // 1 hour
  },
};
