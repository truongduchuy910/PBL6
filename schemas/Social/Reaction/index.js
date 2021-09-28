let { Editor, Relationship, Select } = require("@itoa/fields");
const { roleAny, roleMember } = require("../access");
const { of } = require("../plugin");
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
