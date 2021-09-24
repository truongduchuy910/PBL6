const { Relationship, Text, Select, Translate } = require("@itoa/fields");
const { domain, user } = require("./access");

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
const ofValidateInput = async ({ context, resolvedData }) => {
  const _user = user(domain(context));
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
const multipleLanguage = (ref) => ({
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
    ref,
    adminDoc: "Chọn một ngôn ngữ để dịch.",
    adminConfig: { className: "col-12", ref, lang: "language" },
  },
});

const editor = (listKey, config, _listKey, fileField, searchField) => {
  for (var i in config.fields) {
    const type = config.fields[i].type.type;
    if (type === "Editor") {
      config.fields[i].adminConfig = {
        ...config.fields[i].adminConfig,
        listKey: _listKey,
        fileField,
        searchField,
      };
    }
  }
  return config;
};
module.exports = { of, ip, editor, multipleLanguage };
