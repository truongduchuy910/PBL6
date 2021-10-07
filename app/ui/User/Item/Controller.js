import React from "react";
import { gql, useQuery } from "@apollo/client";
import { POST_LIST } from "../List/Controller";
export const POST_ITEM = gql`
  query($id: ID!) {
    User(where: { id: $id }) {
      id
      phone
      name
      avatar {
        publicUrl
      }
    }
  }
`;
export default function UserItem({ UI, where, id }) {
  const { loading, error, data = {} } = useQuery(id ? POST_ITEM : POST_LIST, {
    variables: id ? { id } : { where },
  });
  const { allUsers = [], User } = data;
  const [user] = allUsers || [User];
  return <UI loading={loading} error={error} user={user} />;
}
