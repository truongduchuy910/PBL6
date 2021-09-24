const { Text, Password, Checkbox, File, Editor } = require("@itoa/fields");
const { modelUser } = require("@itoa/lib/access");
const { users } = require("@itoa/lib/cache");
const lang = require("@itoa/lib/lang.json");
const { imageAdapter, imageHooks } = require("@itoa/lib/stores");
const { multipleLanguage } = require("@itoa/lib/plugins");
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
    avatar: {
      type: File,
      adapter: imageAdapter,
      hooks: imageHooks("avatar"),
      label: "Hình ảnh",
    },
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
    description: {
      type: Editor,
      label: "Mô tả",
      adminConfig: {
        listKey: "UploadImage",
        fileField: "file",
        searchField: "alt",
      },
    },
    ...multipleLanguage("Translate"),
  },
  labelField: "domain",
  access: true,
  // access: modelUser,
  hooks: {
    afterChange: async ({ context, existingItem }) => {
      users(context);
    },
  },
  cacheHint: {
    scope: "PUBLIC",
    maxAge: 60 * 60, // 1 hour
  },
  auth: {
    identityField: "phone",
    secretField: "password",
  },
};
