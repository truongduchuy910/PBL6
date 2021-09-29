import React from "react";
import { useMutation, gql, useApolloClient } from "@apollo/client";
export const USER_SIGNIN = gql`
  mutation {
    status: unauthenticateUser {
      success
    }
  }
`;
export default function UserSignIn({ UI, navigation }) {
  const client = useApolloClient();
  const [on, result = {}] = useMutation(USER_SIGNIN, {
    onCompleted: async ({ status }) => {
      await client.clearStore();
      await client.resetStore();
      navigation.navigate("sign-in");
    },
    onError: (error) => {},
  });
  const { loading, error, data = {} } = result;
  const { status } = data;
  return <UI signOut={on} loading={loading} error={error} status={status} />;
}
