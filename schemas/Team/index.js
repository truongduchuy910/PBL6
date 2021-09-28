let { File, Text, Editor } = require("@itoa/fields");
const { roleSeller } = require("../access");
let { imageAdapter, imageHooks } = require("../localFileAdapter");

module.exports = {
  fields: {
    name: {
      type: Text,
      isRequired: true,
      label: "Tên",
    },
    avatar: {
      type: File,
      adapter: imageAdapter,
      hooks: imageHooks("avatar"),
      label: "Hình ảnh đại diện",
    },
    position: {
      type: Text,
      label: "Vị trí",
    },
    summary: {
      type: Editor,
      label: "Tóm tắt",
    },
    work: {
      type: Editor,
      label: "Kinh nghiệm làm việc",
    },
    skill: {
      type: Editor,
      label: "kỹ năng & năng lực",
    },
    experience: {
      type: Editor,
      label: "Phạm vi kinh nghiệm",
    },
    academic: {
      type: Editor,
      label: "Trình độ học vấn",
    },
    professional: {
      type: Editor,
      label: "Chuyên môn",
    },
    soft: {
      type: Editor,
      label: "Kỹ năng mềm",
    },
    contact: {
      type: Editor,
      label: "Liên hệ",
    },
  },
  access: roleSeller,
  cacheHint: {
    scope: "PUBLIC",
    maxAge: 60 * 60, // 1 hour
  },
};
