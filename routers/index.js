const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const { Keystone } = require("@itoa/keystone");
const fs = require("fs");
const chalk = require("chalk");
const { gql } = require("@apollo/client");
const morgan = require("morgan");
const { uploadPath, sizes } = require("../schemas/localFileAdapter");
/**
 * Router sử dụng tham chiếu keystonejs
 */
class Router {
  keystone;
  /**
   * @param {Keystone} keystone
   */
  constructor(keystone) {
    this.keystone = keystone;
  }
  /**
   *
   * @param {express.Router} app
   */
  config = (app) => {
    app.use(morgan("short"));
    app.set("trust proxy", true);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieParser());
    distributeFileSystem(app);
    app.get("/sp/:id", async (req, res) => {
      const { id } = req.params;
      const { data, errors } = await this.keystone.executeGraphQL({
        context: this.keystone.createContext({ skipAccessControl: true }),
        query: gql`
          query($id: ID!) {
            Product(where: { id: $id }) {
              url
              categories {
                url
              }
              createdBy {
                domain
              }
            }
          }
        `,
        variables: { id },
      });
      if (!data) res.redirect("/");
      const {
        Product: {
          url,
          categories = [],
          createdBy: { domain },
        },
      } = data;
      const [category = {}] = categories;
      res.redirect(`http://${domain}/san-pham/${category.url || "_"}/${url}`);
    });
  };
}
module.exports = { Router };

/**
 *
 * @param {express.Router} app
 */
function distributeFileSystem(app) {
  /**
   * Nếu có tại local thì phản hồi
   */

  /**
   * Thử tìm ở các server khác.
   */
  app.get("/loader", (req, res) => {
    const { url: _url, w = 1920, h = 1920 } = req.query;
    const url = decodeURI(_url).replace(/\/md/g, "").replace(/\/sm/g, "");
    const size =
      sizes
        .sort((a, b) => (a.size > b.size ? -1 : 1))
        .find((a) => a.size < (w > h ? w : h)) || sizes[0];

    const dir = path.join(
      path.resolve(),
      uploadPath,
      url.replace(/\/img\//g, `/img/${size.name}/`),
    );
    //
    if (fs.existsSync(dir)) {
      res.sendFile(dir);
    } else {
      if (process.env.NODE_ENV === "production")
        console.log(chalk.red("missing  "), chalk.gray(url));
      res.sendFile(path.join(path.resolve(), "public/no-image.png"), (err) => {
        console.log(err);
      });
    }
  });
  app.get("/upload/*", (req, res, next) => {
    const { size: url } = req.query;
    const _filename = url ? decodeURI(url) : decodeURI(req.url);
    console.log(_filename);
    const filename =
      req.headers.referer && req.headers.referer.includes("admin")
        ? _filename
            .replace("/sm", "")
            .replace("/md", "")
            .replace("/upload/img/", "")
        : _filename.replace("/upload/img/", "");
    const size = sizes.sort((a, b) => (a.size > b.size ? 1 : -1))[0]; // smallest
    //
    const dir = path.join(
      path.resolve(),
      uploadPath,
      "/upload/img",
      size.name,
      filename,
    );
    //
    if (fs.existsSync(dir)) {
      res.sendFile(dir);
    } else {
      if (process.env.NODE_ENV === "production")
        console.log(chalk.red("missing  "), chalk.gray(dir), req.url);
      res.sendFile(path.join(path.resolve(), "public/no-image.png"), (err) => {
        console.log(err);
      });
    }
  });
}
