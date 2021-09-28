const dotenv = require("dotenv");
dotenv.config();
const { Keystone } = require("@itoa/keystone");
const { GraphQLApp } = require("@itoa/app-graphql");
const { AdminUIApp } = require("@itoa/app-admin-ui");
//const { NextApp } = require("@itoa/lib/app");
const { MongooseAdapter } = require("@itoa/adapter-mongoose");
const { PasswordAuthStrategy } = require("@itoa/auth-password");
const MongoStore = require("connect-mongo");
const express = require("express");
const { reads } = require("@itoa/lib/files");
const initialUser = require("@itoa/lib/initial-user");

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
  // onConnect: initialiseData,
  //
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
const schemaConfigs = reads("", "./schemas");
console.log(schemaConfigs)
schemaConfigs.map((config) => {
  const schema = require(config.path);
  keystone.createList(config.name, schema);
  //
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
});
var apps = [
  new GraphQLApp(),
  new AdminUIApp({
    name: "Itoa.vn",
    appId: process.env.NODE_ENV === "production" ? "145518257438217" : false,
    pageId: process.env.NODE_ENV === "production" ? "106614338147778" : false,
    authStrategy,
    enableDefaultRoute: false,
  }),
//  new NextApp({ dir: "web" }),
];
/**
 *
 * @param {express.Router} app
 */
function configureExpress(app) {
  // const routeConfigs = reads("", "./routes");
}
module.exports = {
  keystone,
  apps,
  configureExpress,
};
