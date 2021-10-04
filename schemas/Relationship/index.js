const { Uuid, Checkbox, Relationship } = require("@itoa/fields");
const { multipleLanguage } = require("@itoa/lib/plugins");
module.exports = {
  active: true,
  fields: {
    to: {
      type: Relationship,
      ref: "User",
    },
    isAccepted: {
      type: Checkbox,
    },
  },
  ...multipleLanguage("Translate"),
  labelField: "",
  access: true,
  // access: modelUser,
  hooks: {},
  cacheHint: {
    scope: "PUBLIC",
    maxAge: 60 * 60, // 1 hour
  },
};
