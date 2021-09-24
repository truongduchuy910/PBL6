const { Keystone } = require("@itoa/keystone");
const { gql } = require("@apollo/client");
/**
 * @param {Keystone} keystone
 */
async function initialUser(keystone) {
  const {
    data: {
      _allUsersMeta: { count = 0 },
    },
  } = await keystone.executeGraphQL({
    context: keystone.createContext({ skipAccessControl: true }),
    query: gql`
      query {
        _allUsersMeta {
          count
        }
      }
    `,
  });

  if (count === 0) {
    const {
      data: { createUser },
    } = await keystone.executeGraphQL({
      context: keystone.createContext({ skipAccessControl: true }),
      query: gql`
        mutation initialUser($data: UserCreateInput) {
          createUser(data: $data) {
            id
            name
          }
        }
      `,
      variables: {
        data: {
          name: "Trần Ngọc Huy",
          email: "truonduchuy910@gmail.com",
          phone: "0332813077",
          isAdmin: true,
          password: "0332813077",
        },
      },
    });
    console.log(`initial user`, createUser.name);
  }
  console.log(`find ${count} users`);
}

module.exports = initialUser;
