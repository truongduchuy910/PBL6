let {
  Editor,
  Images,
  Relationship,
  Text,
  File,
  Integer,
  Select,
  Checkbox,
} = require("@itoa/fields");

const { Color } = require("@itoa/fields-color");

const { modelPage } = require("../access");
let { imageAdapter, imageHooks } = require("../localFileAdapter");

module.exports = {
  fields: {
    store: {
      type: Text,
      label: "Tên cửa hàng",
      isRequired: true,
      adminConfig: { className: "col-sm-12 col-md-6" },
    },
    logo: {
      type: File,
      adapter: imageAdapter,
      hooks: imageHooks("logo"),
      adminConfig: { className: "col-sm-12 col-md-6" },
    },
    slogan: {
      type: Text,
      label: "Slogan & lĩnh vực",
      adminConfig: { className: "col-sm-12 col-md-6" },
    },
    address: {
      type: Text,
      label: "Địa chỉ, trụ sở",
      adminConfig: { className: "col-sm-12 col-md-6" },
    },
    phone: {
      type: Text,
      label: "Số điện thoại (Hotline)",
      adminConfig: { className: "col-sm-12 col-md-6" },
    },
    email: {
      type: Text,
      label: "E-mail",
      adminConfig: { className: "col-sm-12 col-md-6" },
    },
    intro: {
      type: Editor,
      label: "Giới thiệu gắn",
      adminConfig: { className: "col-sm-12 col-md-6" },
    },
    contact: {
      type: Editor,
      label: "Chi nhánh",
      adminConfig: { className: "col-sm-12 col-md-6" },
    },
    pageId: {
      type: Text,
      adminConfig: { className: "col-sm-12 col-md-6" },
      label: "Facebook Page ID",
    },
    twitter: {
      type: Text,
      adminConfig: { className: "col-sm-12 col-md-6" },
    },
    instagram: {
      type: Text,
      adminConfig: { className: "col-sm-12 col-md-6" },
    },
    pinterest: {
      type: Text,
      adminConfig: { className: "col-sm-12 col-md-6" },
    },
    youtube: {
      type: Text,
      adminConfig: { className: "col-sm-12 col-md-6" },
    },
    googlePlus: {
      type: Text,
      adminConfig: { className: "col-sm-12 col-md-6" },
    },
    googleMap: {
      type: Text,
      adminConfig: { className: "col-sm-12 col-md-6" },
    },
    zalo: {
      type: Text,
      adminConfig: { className: "col-sm-12 col-md-6" },
    },
    pixelId: {
      type: Text,
      adminConfig: { className: "col-sm-12 col-md-6" },
    },
    gtag: { type: Text, adminConfig: { className: "col-sm-12 col-md-6" } },
    //
    shipMoneySupport: {
      type: Integer,
      label: "Tiền ship cố định",
      adminConfig: { className: "col-sm-12 col-md-6" },
    },
    ship: {
      type: Editor,
      label: "Thông tin ship",
    },
    transfer: {
      type: Editor,
      label: "Thông tin chuyển khoản ",
    },

    color: {
      type: Color,
      adminConfig: { className: "col-sm-12 col-md-6" },
    },
    colorMode: {
      type: Select,
      options: [
        { label: "Sáng", value: "light" },
        { label: "Tối", value: "dark" },
      ],
      adminConfig: { className: "col-sm-12 col-md-6" },
    },
    blocks: { type: Text, adminConfig: { className: "col-sm-12 col-md-6" } },
    ordering: { type: Checkbox },
    company: {
      type: Relationship,
      ref: "Post.page",
      label: "Về chúng tôi (Chân trang)",
      many: true,
    },
  },
  labelField: "store",
  access: modelPage,
  feed: 3,
  cacheHint: {
    scope: "PUBLIC",
    maxAge: 60 * 60, // 1 hour
  },
};
