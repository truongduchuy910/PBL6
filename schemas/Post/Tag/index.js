const { Text, Relationship } = require("@itoa/fields");
const { roleSimple } = require("@itoa/lib/access");
const { multipleLanguage } = require("@itoa/lib/plugins");
const { byTracking } = require("@itoa/list-plugins");
module.exports = {
  active: !process.env.AUTH,
  fields: {
    content: {
      type: Text,
      isRequired: true,
    },
  },
  ...multipleLanguage("Translate"),

  labelField: "content",
  access: true,
  hooks: {},
  cacheHint: {
    scope: "PUBLIC",
    maxAge: 60 * 60, // 1 hour
  },
  plugins: [byTracking()],
};
