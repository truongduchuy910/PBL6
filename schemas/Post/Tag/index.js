const { Text } = require("@itoa/fields");
// const { roleSimple } = require("@itoa/lib/access");
// const { multipleLanguage } = require("@itoa/lib/plugins");
const { byTracking } = require("@itoa/list-plugins");
const { models } = require("@itoa/schemas/config");
const postTag = {
  active: models.includes("PostTag"),
  fields: {
    content: {
      type: Text,
      isRequired: true,
    },
  },
  // ...multipleLanguage("Translate"),

  labelField: "content",
  access: true,
  hooks: {},
  cacheHint: {
    scope: "PUBLIC",
    maxAge: 60 * 60, // 1 hour
  },
  plugins: [byTracking()],
};

module.exports = postTag;
