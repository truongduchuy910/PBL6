let { Text, Checkbox, Editor, Relationship } = require("@itoa/fields");
const { roleAny, roleMember } = require("../access");
const { of } = require("../plugin");
module.exports = {
  fields: {
    content: {
      type: Editor,
      isRequired: true,
    },
    parent: {
      type: Relationship,
      ref: "Comment.replies",
    },
    replies: { type: Relationship, ref: "Comment.parent", many: true },
    //
    reactions: {
      type: Relationship,
      ref: "Reaction.comment",
      many: true,
    },
  },
  access: roleMember,
};
