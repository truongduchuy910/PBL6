import { gql, useQuery } from "@apollo/client";
export const USER_AUTH = gql`
  query {
    authenticatedUser {
      id
      phone
      name
      email
    }
  }
`;
export default function UserAuth({ UI }) {
  const { loading, error, data = {} } = useQuery(USER_AUTH, { ssr: false });
  const { authenticatedUser = {} } = data;
  return (
    <UI loading={loading} error={error} authenticatedUser={authenticatedUser} />
  );
}
