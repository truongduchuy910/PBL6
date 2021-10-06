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
    res.sendFile(
      path.join(path.resolve(), "public/img/no-image.png"),
      (err) => {
        console.log(err);
      },
    );
  }
}
module.exports = { handler };
