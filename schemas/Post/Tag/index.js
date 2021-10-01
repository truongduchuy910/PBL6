const { Text, Relationship } = require("@itoa/fields");
const { multipleLanguage } = require("@itoa/lib/plugins");
module.exports = {
  active: true,
  fields: {
    content: {
      type: Text,
      isRequired: true,
      isUnique: true,
    },
    posts: {
      type: Relationship,
      ref: "Post.tags",
      many: true,
    },
  },
  ...multipleLanguage("Translate"),

  labelField: "content",
  access: true,
  // access: modelUser,
  hooks: {},
  cacheHint: {
    scope: "PUBLIC",
    maxAge: 60 * 60, // 1 hour
  },
};
