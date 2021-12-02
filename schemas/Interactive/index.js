const { Relationship } = require("@itoa/fields");
const { roleSimple } = require("@itoa/lib/access");
const { multipleLanguage } = require("@itoa/lib/plugins");
const { atTracking, byTracking } = require("@itoa/list-plugins");
const { hook } = require("./hook");
module.exports = {
  active: !process.env.AUTH,
  fields: {
    reactions: {
      type: Relationship,
      ref: "InteractiveReaction",
      many: true,
    },
    comments: {
      type: Relationship,
      ref: "InteractiveComment",
      many: true,
    },
    // post: {
    //   type: Relationship,
    //   ref: "Post.interactive",
    //   many: false,
    // },
  },
  ...multipleLanguage("Translate"),
  labelField: "",
  access: true,
  hooks: hook,
  cacheHint: {
    scope: "PUBLIC",
    maxAge: 60 * 60, // 1 hour
  },
  plugins: [atTracking(), byTracking()],
};
