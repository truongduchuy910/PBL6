const { LocalFileAdapter } = require("@itoa/file-adapters");
const path = require("path");
const fs = require("fs");
var Jimp = require("jimp");
const chalk = require("chalk");
const { Images, File } = require("@itoa/fields");
const public = "./public";
const sizes = [
  { name: "sm", size: 384 },
  { name: "md", size: 828 },
  { name: "", size: 1920 },
];

sizes.map((size) => {
  const dir = path.join(public, "/upload/img", size.name);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
});

const imageAdapter = new LocalFileAdapter({
  src: public + "/upload/img",
  path: "/upload/img/sm",
});
const fileAdapter = new LocalFileAdapter({
  src: public + "/upload/file",
  path: "/upload/file",
});
var count = { remove: 0, resize: 0, exist: 0, valid: 0, missing: 0 };

async function resize(filename) {
  if (!filename) return;
  //
  const _filename = path.join(public, "/upload/img", filename);
  if (!fs.existsSync(_filename)) {
    console.log(chalk.red("\nmissing "), filename);
    count.missing++; // normal missing
    return; // - MISSING NORMAL FILE!
  }
  //
  count.exist++; // normal exist
  // MOVE
  for (var i in sizes) {
    const size = sizes[i];
    const des = size.name.length
      ? path.join(public, "/upload/img", size.name, filename)
      : path.join(public, "/upload/img", filename);
    try {
      if (_filename !== des)
        fs.copyFileSync(_filename, des, fs.constants.COPYFILE_EXCL);
    } catch (err) {
      console.log(err, des);
      //
    }
    // RESIZE, VALID
    try {
      const _dest = await Jimp.read(des);
      const width = _dest.getWidth();
      const height = _dest.getHeight();
      if (width > height) {
        if (width > size.size) {
          _dest.resize(size.size, Jimp.AUTO).write(des);
          count.resize++;
        } else {
          count.valid++;
        }
      } else {
        if (height > size.size) {
          _dest.resize(Jimp.AUTO, size.size).write(des);
          count.resize++;
        } else {
          count.valid++;
        }
      }
    } catch (err) {
      //
      console.log(err, des);
    }
  }
}
async function removes(filename) {
  if (!filename) return;
  sizes.map((size) => {
    const des = path.join(public, "/upload/img", size.name, filename);
    fs.unlink(des, (err) => {
      if (err) console.log(err);
    });
  });
}
//
function remove(dir) {
  if (!dir) return;
  fs.unlinkSync(dir);
  // console.log(chalk.green("remove"), dir);
  count.remove++;
}
/**
 * IMAGE HOOK
 * @param {*} file
 * @param {LocalFileAdapter} adapter
 * @returns
 */
function imageHooks(file) {
  return {
    resolveInput: async ({
      resolvedData = {},
      existingItem = {},
      operation,
    }) => {
      const _new = resolvedData[file];
      const _old = existingItem[file];
      if (operation === "create") {
        if (_new) resize(_new.filename);
      }
      if (operation === "update") {
        if (_new) resize(_new.filename);
        if (_new && _old) removes(_old.filename);
      }
      return _new;
    },
    afterDelete: async ({ resolvedData = {}, existingItem = {} }) => {
      const _old = existingItem[file];
      if (_old) removes(_old.filename);
      return resolvedData;
    },
  };
}
/**
 * FILE HOOK
 * @param {*} file
 * @returns
 */
function fileHooks(file) {
  return {
    beforeChange: async ({ resolvedData, existingItem = {} }) => {
      if (existingItem[file]) {
        await imageAdapter.delete(existingItem[file]);
      }
      return resolvedData;
    },
    afterDelete: async ({ resolvedData, existingItem = {} }) => {
      if (existingItem[file]) {
        await imageAdapter.delete(existingItem[file]);
      }
      return resolvedData;
    },
  };
}
/**
 *
 * @returns {Array}
 */
function valueOf(object, field) {
  var filenames = [];
  for (var i in object) {
    var urls = [];
    if (typeof object[i] === "object") urls = valueOf(object[i], field);
    else if (i === field) urls = [object[i]];
    filenames = filenames.concat(urls);
  }
  return filenames;
}
function pathOf(filenames = []) {
  const result = [];
  filenames.map((filename) => {
    sizes.map((size) => {
      result.push(path.join(public, "/upload/img", size.name, filename));
    });
  });
  return result;
}
function pathIn(dir = "") {
  const _path = path.join(public, dir);
  const stats = fs.statSync(_path);
  // return file as forder contain file
  if (stats.isFile()) return [_path];
  var results = [];
  fs.readdirSync(_path).map((file) => {
    const _child = path.join(dir, file);
    results = results.concat(pathIn(_child));
  });
  return results;
}
/**
 *
 */
function image(field = "image", label, isRequired = false) {
  return {
    [field]: {
      type: File,
      adapter: imageAdapter,
      hooks: imageHooks(field),
      label,
      isRequired,
      adminConfig: { className: "col-sm-12 col-md-6" },
    },
  };
}
function file(field = "file", label, isRequired = false) {
  return {
    [field]: {
      type: File,
      adapter: fileAdapter,
      hooks: fileHooks("file"),
      label,
      isRequired,
    },
  };
}
function images(label) {
  return {
    type: Images,
    ref: "UploadImage",
    search: "alt",
    file: "file",
    label,
    many: true,
  };
}
module.exports = {
  image,
  file,
  images,
  public,
  sizes,
};
