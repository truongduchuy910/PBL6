const { Itoa } = require("@itoa/itoa");
const { gql } = require("@apollo/client");
/**
 * @param {Itoa} itoa
 */
async function initialUser(itoa) {
  const {
    data: {
      _allUsersMeta: { count = 0 },
    },
  } = await itoa.executeGraphQL({
    context: itoa.createContext({ skipAccessControl: true }),
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
    } = await itoa.executeGraphQL({
      context: itoa.createContext({ skipAccessControl: true }),
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
