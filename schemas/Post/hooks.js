// var vntk = require("vntk");

async function contentBeforeChange({ existingItem, resolvedData, context }) {
  // var tokenizer = vntk.wordTokenizer();
  // if (resolvedData && resolvedData.content) {
  const { content, title = "" } = resolvedData || existingItem;
  if (!content) return;
  var str = `${content} ${title} ${title}`;
  str = str
    .replace(/(?:__|[*#])|\[(.*?)\]\(.*?\)/gm, "")
    .replace(/#|!|@|$|%|^|&|_|\[|]|\?|\.|,/g, " ")
    .replace(/\n/g, " ")
    .replace(/\s+/g, " ")
    .toLocaleLowerCase()
    .trim();
  resolvedData.description = str.slice(0, 180);
  //   findAndCreateHashtags(str, context);
  //   var tags = tokenizer.tag(str);
  //   var filters = {};
  //   tags.map((tag) =>
  //     !filters[tag] ? (filters[tag] = 1) : (filters[tag] = ++filters[tag]),
  //   );
  //   tags = [];
  //   for (var i in filters) tags.push(i);
  //   tags.sort((a, b) =>
  //     a.length > b.length ? -1 : filters[a] > filters[b] ? -1 : 0,
  //   );
  //   resolvedData.keywords = tags.slice(0, 30).join(", ");
  // }
}
module.exports.content = {
  beforeChange: contentBeforeChange,
};

// async function findAndCreateHashtags(str, context) {
//   const hashtags = str.match(/\B\#\w\w+\b/g);
//   console.log(hashtags);
//   return hashtags;
// }
