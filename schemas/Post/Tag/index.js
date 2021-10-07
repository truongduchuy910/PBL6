const { Text, Relationship } = require("@itoa/fields");
const { roleSimple } = require("@itoa/lib/access");
const { multipleLanguage } = require("@itoa/lib/plugins");
const { byTracking } = require("@itoa/list-plugins");
module.exports = {
  active: true,
  fields: {
    content: {
      type: Text,
      isRequired: true,
    },
  },
  ...multipleLanguage("Translate"),

  labelField: "content",
  access: roleSimple,
  hooks: {},
  cacheHint: {
    scope: "PUBLIC",
    maxAge: 60 * 60, // 1 hour
  },
  plugins: [byTracking()],
};
