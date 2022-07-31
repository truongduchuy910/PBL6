let { Text } = require("@itoa/fields");
const { MongoId } = require("@itoa/fields-mongoid");

const { roleSimple } = require("@itoa/lib/access");

const { models } = require("@itoa/schemas/config");

const translate = {
  active: models.includes("Translate"),
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

module.exports = translate;
