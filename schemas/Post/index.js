const { Text, Relationship, Images } = require("@itoa/fields");
// const { roleSimple } = require("@itoa/lib/access");
// const { multipleLanguage } = require("@itoa/lib/plugins");
const { atTracking, byTracking } = require("@itoa/list-plugins");
// const { users } = require("@itoa/lib/cache");
const { content } = require("./hook");
const { models } = require("@itoa/schemas/config");

const post = {
  active: models.includes("Post"),
  fields: {
    content: {
      type: Text,
      isRequired: true,
    },
  },
  // ...multipleLanguage("Translate"),
  labelField: "",
  access: true,
  hooks: content,
  cacheHint: {
    scope: "PUBLIC",
    maxAge: 60 * 60, // 1 hour
  },
  plugins: [atTracking(), byTracking()],
};

if (models.includes("PostTag")) {
  post.fields.tags = {
    type: Relationship,
    ref: "PostTag",
    many: true,
  };
}
if (models.includes("UploadImage")) {
  post.fields.images = {
    type: Images,
    ref: "UploadImage",
    search: "alt",
    file: "file",
    label: "Hình thêm",
    many: true,
  };
}
if (models.includes("Interactive")) {
  post.fields.interactive = {
    type: Relationship,
    ref: "Interactive.post",
    many: false,
  };
}
if (models.includes("User")) {
  post.fields.savedByUsers = {
    type: Relationship,
    ref: "User.savedPosts",
    many: false,
  };
}
module.exports = post;
