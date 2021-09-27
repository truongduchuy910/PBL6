import { useMutation, gql, useApolloClient } from "@apollo/client";
export const USER_SIGNIN = gql`
  mutation($phone: String, $password: String) {
    user: authenticateUserWithPassword(phone: $phone, password: $password) {
      token
      item {
        phone
        name
      }
    }
  }
`;
export default function UserSignIn({ UI }) {
  const client = useApolloClient();
  const [on, result = {}] = useMutation(USER_SIGNIN, {
    onCompleted: ({ user }) => {
      client.clearStore();
      client.resetStore();
    },
    onError: (error) => {},
  });
  const signIn = ({ phone, password }) => {
    return on({ variables: { phone, password } });
  };
  const { loading, error, data = {} } = result;
  const { user } = data;
  return <UI signIn={signIn} loading={loading} error={error} user={user} />;
}
