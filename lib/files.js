const fs = require("fs");
const path = require("path");
/**
 *
 * @param {*} dir
 * @param {*} root
 * @param {*} exts
 * @returns {Array}
 */
function reads(dir = "", root = "", exts = [".js"], names = ["index"]) {
  var paths = [];
  const files = fs.readdirSync(path.join(root, dir));
  for (var i in files) {
    const file = files[i];
    const current = path.join(root, dir, file);
    const child = path.join(dir, file);
    const stats = fs.lstatSync(current);
    if (stats.isDirectory()) {
      paths = paths.concat(reads(child, root, exts, names));
    } else if (stats.isFile()) {
      const result = path.parse(current);
      if (exts.includes(result.ext)) {
        if (names.includes(result.name)) {
          const name = dir.replace(/\//g, "").replace(/\\/g, "");
          paths.push({
            name,
            path: `${root}/${dir}/${file}`,
            dir: `/${dir}`,
            file: result.name,
          });
        }
      }
    }
  }
  return paths;
}
module.exports = { reads };
