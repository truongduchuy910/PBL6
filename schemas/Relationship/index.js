const { Checkbox, Relationship } = require("@itoa/fields");
// const { roleSimple } = require("@itoa/lib/access");
// const { multipleLanguage } = require("@itoa/lib/plugins");
const { atTracking, byTracking } = require("@itoa/list-plugins");
const { models } = require("@itoa/schemas/config");
const relationship = {
  active: models.includes("Relationship"),
  fields: {
    isAccepted: {
      type: Checkbox,
      default: false,
    },
  },
  // ...multipleLanguage("Translate"),
  labelField: "",
  access: true,
  hooks: {},
  cacheHint: {
    scope: "PUBLIC",
    maxAge: 60 * 60, // 1 hour
  },
  plugins: [atTracking(), , byTracking()],
};
if (models.includes("User")) {
  relationship.fields.to = {
    type: Relationship,
    ref: "User",
  };
}
module.exports = relationship;
