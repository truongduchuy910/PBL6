import React from "react";
import { gql, useQuery } from "@apollo/client";
export const USER_AUTH = gql`
  query {
    user: authenticatedUser {
      id
      phone
      name
      email
    }
  }
`;
export default function UserAuth({ UI, navigation }) {
  const { loading, error, data = {} } = useQuery(USER_AUTH, {
    onCompleted: ({ user }) => {
      console.log(user);
      if (!user) {
        // navigation.navigate("sign-in");
      }
    },
    onError: (error) => {},
  });
  const { user = {} } = data;
  return <UI loading={loading} error={error} user={user} />;
}
