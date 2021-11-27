const { Text, Relationship } = require("@itoa/fields");
const { roleSimple } = require("@itoa/lib/access");
const { multipleLanguage } = require("@itoa/lib/plugins");
const { atTracking, byTracking } = require("@itoa/list-plugins");
const { content } = require("./hook");
module.exports = {
  active: !process.env.AUTH,
  fields: {
    content: {
      type: Text,
      isRequired: true,
    },
    // interactive: {
    //   type: Relationship,
    //   ref: "Interactive.comments",
    //   many: false,
    // },
    my_interactive: {
      type: Relationship,
      ref: "Interactive",
      many: false,
    },
  },
  ...multipleLanguage("Translate"),
  labelField: "",
  access: true,
  hooks: content,
  cacheHint: {
    scope: "PUBLIC",
    maxAge: 60 * 60, // 1 hour
  },
  plugins: [atTracking(), byTracking()],
};
