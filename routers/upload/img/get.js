const path = require("path");
const fs = require("fs");

/**
 * EXPRESS REQUEST HANDLER
 * @param {Express.Request} req
 * @param {Express.Response} res
 */
function handler(req, res) {
  res.sendFile(
    path.join(path.resolve(), "public/assets/img/no-image.png"),
    (err) => {
      if (err) console.log(err);
    },
  );
}
module.exports = { handler };
