const {
  Select,
  Translate,
  Editor,
  Text,
  Relationship,
} = require("@itoa/fields");
const { domain, user } = require("./access");
/** */
function editor(label) {
  return {
    type: Editor,
    label,
    adminConfig: {
      listKey: "UploadImage",
      fileField: "file",
      searchField: "alt",
    },
  };
}

const lang = {
  language: {
    type: Select,
    options: Translate._options,
    defaultValue: "vi",
    label: "Ngôn ngữ sử dụng",
    adminConfig: { className: "col-md-12 col-lg-6" },
  },
  translations: {
    type: Translate,
    many: true,
    label: "Các bản dịch",
    ref: "Translate",
    adminDoc: "Chọn một ngôn ngữ để dịch.",
    adminConfig: { className: "col-12", ref: "Translate", lang: "language" },
  },
};
/**
 * TRACKING
 */

/**
 *
 */
const ipValidateInput = async ({ context, resolvedData }) => {
  const { req } = context;
  var ip =
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    (req.connection.socket ? req.connection.socket.remoteAddress : null);
  resolvedData.ip = ip;
  return resolvedData;
};
const ip = {
  type: Text,
  hooks: {
    validateInput: ipValidateInput,
  },
  adminConfig: {
    isReadOnly: true,
  },
};
const ofValidateInput = async ({ authentication, context, resolvedData }) => {
  const _user = user(domain(context, authentication));
  // console.log(_user);
  resolvedData.of = _user.id;
  return resolvedData;
};
const of = {
  type: Relationship,
  ref: "User",
  hooks: {
    validateInput: ofValidateInput,
  },
  adminConfig: {
    isReadOnly: true,
  },
};
module.exports = { editor, lang, of, ip };
