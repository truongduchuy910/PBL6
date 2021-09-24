var user = require("./User");
var report = require("./Report");

const { byTracking, atTracking } = require("@itoa/list-plugins");
const { lang, editor } = require("./plugin");
const { Keystone } = require("@itoa/keystone");
const fs = require("fs");
var pluralize =
  process.env.NODE_ENV === "development" ? require("pluralize") : false;
const { PasswordAuthStrategy } = require("@itoa/auth-password");
class Models {
  static creates = [];
  keystone;
  lists = [];
  fileQuery = ``;
  list(keystone, listKey, config) {
    // if (listKey !== "User") lang(listKey, config, "Translate");
    editor(listKey, config, "UploadImage", "file", "alt");
    this.lists.push({ listKey, config });
    if (keystone) keystone.createList(listKey, config);
    var fields = [];
    if (pluralize) {
      for (var i in config.fields) {
        const field = config.fields[i];
        fields.push(i);
        if (field.type.type === "File") {
          this.fileQuery += `\nall${pluralize(listKey)} {${i} { publicUrl } }`;
        }
      }
    }
  }

  /**
   *
   * @param {Keystone} keystone
   * @param {ApolloClient} client
   * @returns
   */
  createList(keystone) {
    /**
     * DEFAULT PLUGIN
     */
    const at = atTracking();
    const by = byTracking();
    this.list(keystone, "Report", {
      ...report,
      plugins: [by, at],
    });
    /**
     * USER
     */
    this.list(keystone, "User", user);

    this.fileQuery = `query { ${this.fileQuery} }`;
    if (process.env.NODE_ENV === "development")
      fs.writeFile(
        "./file-query.json",
        JSON.stringify({ query: this.fileQuery }),
        { encoding: "utf-8" },
        () => {},
      );
    return keystone.createAuthStrategy({
      type: PasswordAuthStrategy,
      list: "User",
      config: {
        identityField: "phone",
        secretField: "password",
      },
      plugin: [logAuth],
    });
  }

  /**
   *
   * @param {Object} object
   * @return []
   */
  getPublicUrl(object) {
    var publicUrls = [];
    for (var i in object) {
      var urls = [];
      if (typeof object[i] === "object") urls = this.getPublicUrl(object[i]);
      else if (i === "publicUrl") urls = [object[i]];
      publicUrls = publicUrls.concat(urls);
      //   else if
      // else return [];
    }
    return publicUrls;
  }

  /**
   *
   * @param {Keystone} keystone keystone
   */
  validFile(keystone) {}
}
module.exports = { Models };

const logAuth = ({ hooks, ...options }) => {
  return {
    ...options,
    hooks: {
      afterAuth: () => console.log("A user logged in!"),
      ...hooks,
    },
  };
};
