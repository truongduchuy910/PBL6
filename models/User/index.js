const {
  Text,
  Password,
  Relationship,
  Checkbox,
  Select,
} = require("@itoa/fields");
const { gql } = require("@apollo/client");
const { modelUser } = require("../access");
const lang = require("../lang.json");
const { users } = require("../cache");
module.exports = {
  fields: {
    phone: {
      type: Text,
      isRequired: true,
      adminConfig: { className: "col-sm-12 col-md-6" },
      isUnique: true,
    },
    password: {
      adminConfig: { className: "col-sm-12 col-md-6" },
      type: Password,
    },
    name: { type: Text, adminConfig: { className: "col-sm-12 col-md-6" } },
    email: {
      type: Text,
      adminConfig: { className: "col-sm-12 col-md-6" },
    },
    domain: { type: Text },
    language: {
      type: Select,
      options: lang,
      defaultValue: "vi",
      label: "Ngôn ngữ sử dụng",
      adminConfig: { className: "col-sm-12 col-md-6" },
    },
    // ROLE
    isAdmin: {
      type: Checkbox,
      access: {
        update: ({ authentication: { item: user } }) => {
          return user && user.isAdmin;
        },
      },
      adminConfig: { className: "col-sm-12 col-md-6" },
    },
    isSeller: {
      type: Checkbox,
      adminConfig: { className: "col-sm-12 col-md-6" },
    },
  },
  labelField: "domain",
  access: modelUser,
  hooks: {
    afterChange: async ({ context, existingItem }) => {
      users(context);
    },
  },
  cacheHint: {
    scope: "PUBLIC",
    maxAge: 60 * 60, // 1 hour
  },
};
