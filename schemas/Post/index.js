const { Text, Relationship, Images } = require("@itoa/fields");
const { roleSimple } = require("@itoa/lib/access");
const { multipleLanguage } = require("@itoa/lib/plugins");
const { atTracking, byTracking } = require("@itoa/list-plugins");
const { users } = require("@itoa/lib/cache");
const { content } = require('./hook');
module.exports = {
  active: true,
  fields: {
    content: {
      type: Text,
      isRequired: true,
    },
    tags: {
      type: Relationship,
      ref: "PostTag",
      many: true,
    },
    images: {
      type: Images,
      ref: "UploadImage",
      search: "alt",
      file: "file",
      label: "Hình thêm",
      many: true,
    },
    interactive: {
      type: Relationship,
      ref: "Interactive",
      many: false,
    },
  },
  ...multipleLanguage("Translate"),
  labelField: "",
  access: roleSimple,
  hooks: content,
  cacheHint: {
    scope: "PUBLIC",
    maxAge: 60 * 60, // 1 hour
  },
  plugins: [atTracking(), byTracking()],
};
