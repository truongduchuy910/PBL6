import React from "react";
import { useMutation, gql, useApolloClient, useQuery } from "@apollo/client";
import { USER_AUTH } from "../Auth/Controller";
export const USER_SIGNIN = gql`
  mutation {
    status: unauthenticateUser {
      success
    }
  }
`;
export default function UserSignIn({ UI, navigation }) {
  const client = useApolloClient();
  const auth = useQuery(USER_AUTH);
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
  return (
    <UI
      signOut={on}
      loading={loading}
      error={error}
      status={status}
      auth={auth}
    />
  );
}
