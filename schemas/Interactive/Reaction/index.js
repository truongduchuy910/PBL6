const { Select, Relationship } = require("@itoa/fields");
// const { roleSimple } = require("@itoa/lib/access");
// const { multipleLanguage } = require("@itoa/lib/plugins");
const { atTracking, byTracking } = require("@itoa/list-plugins");
const { models } = require("@itoa/schemas/config");

const reaction = {
  active: models.includes("InteractiveReaction"),
  fields: {
    emoji: {
      options: [
        { label: "Thích", value: "like" },
        { label: "Tim", value: "heart" },
        { label: "Giận", value: "angry" },
        { label: "Ngạc nhiên", value: "wow" },
        { label: "Buồn", value: "sad" },
      ],
      type: Select,
      isRequired: true,
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
  plugins: [atTracking(), byTracking()],
};

if (models.includes("Interactive")) {
  reaction.fields.interactive = {
    type: Relationship,
    ref: "Interactive.reactions",
    many: false,
  };
}

module.exports = reaction;
