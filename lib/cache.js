const { gql } = require("@apollo/client");
var cache = { allUsers: [], allProductCategories: [] };

/**
 * @param {Itoa || context} itoa
 */
async function users(itoa) {
  const context = itoa.createContext({ skipAccessControl: true });
  const {
    data: { allUsers = [], allProductCategories = [] },
    errors = [],
  } = await itoa.executeGraphQL({
    context,
    query: gql`
      query {
        allProductCategories {
          id
          name
        }
        allUsers {
          id
          domain
          language
        }
      }
    `,
    skipAccessControl: true,
  });
  cache.allUsers = allUsers;
  cache.allProductCategories = allProductCategories;
  //
  if (errors && errors.length) {
    errors.map((error) => {
      console.log(error);
    });
  }
}
// allUsers.map((page) => {
//   if (!page.domain) return;
//   const domains = page.domain.split(",").map((d) => d.trim());
//   domains.map((domain) => {
//     const id = page.user
//       ? page.user.id
//       : page.createdBy
//       ? page.createdBy.id
//       : null;
//     if (domain && id) createdById[domain] = id;
//   });
// });
// console.log(createdById);
// errors.map((error) => {
//   console.error(error);
// });
module.exports = { cache, users };
