const { Relationship, Checkbox } = require("@itoa/fields");
// const { roleSimple } = require("@itoa/lib/access");
// const { multipleLanguage } = require("@itoa/lib/plugins");
const { atTracking, byTracking } = require("@itoa/list-plugins");
const { models } = require("@itoa/schemas/config");
const { hook } = require("./hook");
var interactive = {
  active: models.includes("Interactive"),
  fields: {
    status: { type: Checkbox },
  },
  // ...multipleLanguage("Translate"),
  labelField: "",
  access: { read: true },
  hooks: hook,
  cacheHint: {
    scope: "PUBLIC",
    maxAge: 60 * 60, // 1 hour
  },
  plugins: [atTracking(), byTracking()],
};

if (models.includes("InteractiveReaction")) {
  interactive.fields.reactions = {
    type: Relationship,
    ref: "InteractiveReaction.interactive",
    many: true,
  };
}

if (models.includes("InteractiveComment")) {
  interactive.fields.comments = {
    type: Relationship,
    ref: "InteractiveComment.interactive",
    many: true,
  };
}
if (models.includes("Post")) {
  interactive.fields.post = {
    type: Relationship,
    ref: "Post.interactive",
    many: false,
  };
}
module.exports = interactive;
