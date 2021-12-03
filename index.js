const dotenv = require("dotenv");
const MongoStore = require("connect-mongo");
const express = require("express");
const { Itoa } = require("@itoa/itoa");
const { GraphQLApp } = require("@itoa/app-graphql");
const { AdminUIApp } = require("@itoa/app-admin-ui");
const { MongooseAdapter } = require("@itoa/adapter-mongoose");
const { PasswordAuthStrategy } = require("@itoa/auth-password");
const { StaticApp } = require("@itoa/app-static");
const { reads } = require("@itoa/lib/files");
const initialUser = require("@itoa/lib/initial-user");
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const morgan = require("morgan");
const path = require("path");
dotenv.config();
const coreDatabase = {
    mongoUri:
         `mongodb://localhost:27017/${process.env.DB_NAME}`
  };

const sessionDatabase = {
    mongoUrl:
         `mongodb://localhost:27017/${process.env.DB_SESSION}`
  }
console.log(coreDatabase, sessionDatabase);
/**
 * ITOA
 */
var itoa = new Itoa({
  onConnect: initialUser,
  adapter: new MongooseAdapter(coreDatabase),
  sessionStore: new MongoStore(sessionDatabase),
  secureCookies: process.env.NODE_ENV === "production",
  cookieSecret: "seller.itoa.vn",
  cookie: {
    secure: process.env.NODE_ENV === "production",
    maxAge: 1000 * 60 * 60 * 24 * 3,
    sameSite: false,
  },
});

/**
 * SCHEMA
 */
var authStrategy = null;
reads("", "./schemas").map((config) => {
  const schema = require(config.path);
  if (!schema.active) return;
  console.log("create", config.name);
  itoa.createList(config.name, schema);
  if (!schema.auth) return;
  const { identityField, secretField } = schema.auth;
  authStrategy = itoa.createAuthStrategy({
    type: PasswordAuthStrategy,
    list: config.name,
    config: {
      identityField,
      secretField,
    },
  });
});

/**
 * ROUTER
 * @param {express.Router} app
 */
function configureExpress(app) {
  app.set("trust proxy", true);
  app.use(express.static(path.join(path.resolve(), "public")));
  app.use(morgan("short"));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  reads("", "./routers/", [".js"], ["default", "post", "get"]).map((config) => {
    config.path = config.path.replace(/\\/g, "/").replace("//", "/");
    config.dir = config.dir
      .replace(/\\/g, "/")
      .replace("[[...", ":")
      .replace("]]", "/*")
      .replace("[", ":")
      .replace("]", "");
    const { handler } = require(config.path);
    app[config.file](config.dir, handler);
  });
  return app;
}
var apps = [new GraphQLApp()];
if (process.env.AUTH)
  apps.push(
    new AdminUIApp({
      name: "Itoa.vn",
      appId: process.env.NODE_ENV === "production" ? "145518257438217" : false,
      pageId: process.env.NODE_ENV === "production" ? "106614338147778" : false,
      authStrategy,
      enableDefaultRoute: false,
    })
  );
else
  apps.push(
    new StaticApp({
      path: "/",
      src: "app/web-build",
      fallback: "index.html",
    })
  );

module.exports = {
  itoa,
  apps,
  configureExpress,
};
