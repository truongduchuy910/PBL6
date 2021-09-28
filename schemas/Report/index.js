let { DateTime, Editor } = require("@itoa/fields");
let { roleSeller } = require("@itoa/lib/access");
const { multipleLanguage } = require("@itoa/lib/plugins");
module.exports = {
  active: true,
  fields: {
    checkin: {
      type: DateTime,
      isRequired: true,
    },
    checkout: {
      type: DateTime,
      isRequired: true,
    },
    content: {
      type: Editor,
      label: "Công việc",
      isRequired: true,
      adminConfig: {
        listKey: "UploadImage",
        fileField: "file",
        searchField: "alt",
      },
    },
    plan: {
      type: Editor,
      label: "Kế hoạch",
      isRequired: true,
      adminConfig: {
        listKey: "UploadImage",
        fileField: "file",
        searchField: "alt",
      },
    },
    note: {
      type: Editor,
      label: "Khó khăn?",
      adminConfig: {
        listKey: "UploadImage",
        fileField: "file",
        searchField: "alt",
      },
    },
  },
  access: roleSeller,
  cacheHint: {
    scope: "PUBLIC",
    maxAge: 60 * 60, // 1 hour
  },
};
