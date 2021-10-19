const fs = require("fs");

/**
 * EXPRESS REQUEST HANDLER
 * @param {Express.Request} req
 * @param {Express.Response} res
 */
function handler(req, res) {
  const dir = path.join(path.resolve(), "public", decodeURI(req.url));
  if (fs.existsSync(dir)) res.sendFile(dir);
  else res.send("file not found");
}
module.exports = { handler };
