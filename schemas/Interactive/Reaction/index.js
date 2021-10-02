const { Select, Relationship } = require("@itoa/fields");
const { multipleLanguage } = require("@itoa/lib/plugins");
module.exports = {
  active: true,
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
      isUnique: true,
    },
    interactive: {
      type: Relationship,
      ref: "Interactive.reactions",
      many: false,
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