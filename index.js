const dotenv = require("dotenv");
dotenv.config();
const { Keystone } = require("@itoa/keystone");
const { GraphQLApp } = require("@itoa/app-graphql");
const { AdminUIApp } = require("@itoa/app-admin-ui");
const { MongooseAdapter } = require("@itoa/adapter-mongoose");
const { PasswordAuthStrategy } = require("@itoa/auth-password");
const { StaticApp } = require("@itoa/app-static");
const MongoStore = require("connect-mongo");
const express = require("express");
const { reads } = require("@itoa/lib/files");
const initialUser = require("@itoa/lib/initial-user");
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const morgan = require("morgan");
const path = require("path");
var keystone = new Keystone({
  onConnect: initialUser,
  adapter: new MongooseAdapter({
    mongoUri:
      process.env.NODE_ENV === `production`
        ? `mongodb://ecom:${process.env.DB_PWD}@db.itoa.vn:27017/${process.env.DB_NAME}`
        : process.env.DB_DEV
          ? process.env.DB_DEV
          : `mongodb://localhost:27017/${process.env.DB_NAME}`,
  }),
  sessionStore: new MongoStore({
    mongoUrl:
      process.env.NODE_ENV === `production`
        ? `mongodb://session:${process.env.DB_PWD}@db.itoa.vn:27017/${process.env.DB_SESSION}`
        : process.env.DB_DEV
          ? process.env.DB_DEV
          : `mongodb://localhost:27017/${process.env.DB_SESSION}`,
  }),
  //
  secureCookies: process.env.NODE_ENV === "production",
  cookieSecret: "seller.itoa.vn",
  cookie: {
    secure: process.env.NODE_ENV === "production",
    maxAge: 1000 * 60 * 60 * 24 * 3,
    sameSite: false,
  },
});
var authStrategy = null;
reads("", "./schemas").map((config) => {
  const schema = require(config.path);
  if (schema.active) {
    keystone.createList(config.name, schema);
    if (schema.auth) {
      const { identityField, secretField } = schema.auth;
      authStrategy = keystone.createAuthStrategy({
        type: PasswordAuthStrategy,
        list: config.name,
        config: {
          identityField,
          secretField,
        },
      });
    }
  }
});
/**
 *
 * @param {express.Router} app
 */
function configureExpress(app) {
  app.use(express.static(path.join(path.resolve(), "public")));
  app.use(morgan("short"));
  app.set("trust proxy", true);
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  reads("", "./routers/", [".js"], ["default", "post", "get"]).map((config) => {

    config.dir = config.dir.replace(/\\/g, "/")
    config.path = config.path.replace(/\\/g, "/").replace("//", "/")

    config.dir = config.dir.replace('[[...', ':').replace(']]', '/*').replace('[', ':').replace(']', '');
    // if (config.dir.split(/\\/g)[1].startsWith('[')) {
    //   config.dir = config.dir.replace('[', ':').replace(']', '')D
    // }  
    // if (config.dir.split('[[...').length() >= 2) {
    //   var tempDir = config.Dir;
    //   console.log('[[...]] la:' + tempDir)
    //   //app[config.file](config.dir, handler);
    // }
    const { handler } = require(config.path);
    console.log(config)
    app[config.file](config.dir, handler);
  },

  );
  return app;
}
module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      name: "Itoa.vn",
      appId: process.env.NODE_ENV === "production" ? "145518257438217" : false,
      pageId: process.env.NODE_ENV === "production" ? "106614338147778" : false,
      authStrategy,
      enableDefaultRoute: false,
    }),
    new StaticApp({
      path: "/",
      src: "app/web-build",
      fallback: "index.html",
    }),
  ],
  configureExpress,
};
