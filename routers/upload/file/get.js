const fs = require("fs");

/**
 * EXPRESS REQUEST HANDLER
 * @param {Express.Request} req
 * @param {Express.Response} res
 */
function handler(req, res) {
  res.send("file not found");
}
module.exports = { handler };
