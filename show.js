const { reads } = require("@itoa/lib");
// reads("", "./schemas").map((config) => {
//   const schema = require(config.path);
//   if (schema.active) {
//     console.log(`${config.name}`);
//     for (var i in schema.fields) {
//       const f = schema.fields[i];
//       console.log(`- ${i}: ${f.type.type}`);
//     }
//   }
// });
const express = require("express");
const app = express();
reads("", "./routers", [".js"], ["default", "post", "get"]).map((config) => {
  const { handler } = require(config.path);
  app[config.file](config.dir, handler);
});
