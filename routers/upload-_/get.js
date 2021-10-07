const { sizes, uploadPath } = require("@itoa/lib/stores");
const path = require("path");
const fs = require("fs");
const chalk = require("chalk");
/**
 *
 * @param {Express.Request} req
 * @param {Express.Response} res
 */
function handler(req, res) {
  const { size: url } = req.query;
  const _filename = url ? decodeURI(url) : decodeURI(req.url);
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
}
module.exports = { handler };
