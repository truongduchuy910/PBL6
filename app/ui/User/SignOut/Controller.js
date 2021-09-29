import React from "react";
import { useMutation, gql, useApolloClient } from "@apollo/client";
export const USER_SIGNIN = gql`
  mutation {
    status: unauthenticateUser {
      success
    }
  }
`;
export default function UserSignIn({ UI }) {
  const client = useApolloClient();
  const [on, result = {}] = useMutation(USER_SIGNIN, {
    onCompleted: ({ status }) => {
      client.clearStore();
      client.resetStore();
    },
    onError: (error) => {},
  });
  const { loading, error, data = {} } = result;
  const { status } = data;
  return <UI signOut={on} loading={loading} error={error} status={status} />;
}
