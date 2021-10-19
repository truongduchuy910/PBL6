const { sizes, public } = require("@itoa/schemas/stores");
const path = require("path");
const fs = require("fs");
const Express = require("express");

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
      .find((a) => a.size <= (w <= h ? w : h)) || sizes[0];

  const origin = path.join(path.resolve(), public, url);
  const resize = path.join(
    path.resolve(),
    public,
    url.replace(/\/img\//g, `/img/${size.name}/`),
  );

  if (fs.existsSync(resize)) res.sendFile(resize);
  else if (fs.existsSync(origin)) res.sendFile(origin);
  else
    res.sendFile(path.join(path.resolve(), public, "/assets/img/no-image.png"));
}
module.exports = { handler };
