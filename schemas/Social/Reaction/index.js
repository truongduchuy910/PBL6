let { Editor, Relationship, Select } = require("@itoa/fields");
const { roleAny, roleMember } = require("@itoa/lib/access");
const { of } = require("@itoa/lib/plugins");
module.exports = {
  fields: {
    content: {
      type: Select,
      options: ["like", "display", "heart", "angry"],
      isRequired: true,
    },
    //
    comment: {
      type: Relationship,
      ref: "Comment.reactions",
    },
  },
  access: roleMember,
};
