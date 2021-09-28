let {
  Text,
  Relationship,
  Slug,
  File,
  Editor,
  Integer,
} = require("@itoa/fields");
let { imageAdapter, imageHooks } = require("@itoa/lib/stores");
let { roleSeller } = require("@itoa/lib/access");
const { content } = require("./hooks");

module.exports = {
  fields: {
    title: {
      type: Text,
      isRequired: true,
      label: "Tên bài viết",
    },
    thumbnail: {
      type: File,
      adapter: imageAdapter,
      hooks: imageHooks("thumbnail"),
      label: "Bìa",
    },
    content: {
      type: Editor,
      hooks: content,
      label: "Nội dung",
    },
    hashtags: {
      type: Relationship,
      ref: "PostHashtag",
      many: true,
      label: "Phân loại",
    },
    embed: { type: Text, label: "Mã nhúng" },
    description: {
      type: Text,
      label: "Mô tả ngắn",
      adminConfig: {
        isReadOnly: true,
      },
    },
    keywords: {
      type: Text,
      label: "Các từ khóa",
      adminConfig: {
        isReadOnly: true,
      },
    },
    url: {
      type: Slug,
      adminConfig: {
        isReadOnly: true,
      },
      from: "title",
    },
    body: {
      type: Editor,
      label: "Nội dung (Sắp bị lược bỏ)",
      adminConfig: {
        isReadOnly: true,
      },
    },
    page: {
      type: Relationship,
      ref: "Page.company",
      label: "Ghim",
    },
    prioritize: { type: Integer, label: "độ ưu tiên" },
  },
  labelField: "title",
  access: roleSeller,
  feed: 100,
  cacheHint: {
    scope: "PUBLIC",
    maxAge: 60 * 60, // 1 hour
  },
};
