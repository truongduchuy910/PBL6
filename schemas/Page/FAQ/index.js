let { Text, Integer, Editor } = require("@itoa/fields");

const { roleSeller } = require("../access");

module.exports = {
  fields: {
    title: {
      type: Text,
      isRequired: true,
      label: "Tiêu đề câu hỏi",
    },
    body: {
      type: Editor,
      label: "Nội dung",
    },
    prioritize: { type: Integer, label: "độ ưu tiên" },
  },
  access: roleSeller,
  cacheHint: {
    scope: "PUBLIC",
    maxAge: 60 * 60, // 1 hour
  },
};
