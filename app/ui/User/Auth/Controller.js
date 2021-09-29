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
export default function UserAuth({ UI }) {
  const { loading, error, data = {} } = useQuery(USER_AUTH, { ssr: false });
  const { user = {} } = data;
  return <UI loading={loading} error={error} user={user} />;
}
