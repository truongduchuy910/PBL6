import React from "react";
import { gql, useQuery } from "@apollo/client";
export const FRIEND_LIST = gql`
  query($id: ID!) {
    allRelationships(where: { to: { id: $id }, isAccepted_not: true }) {
      id
      isAccepted
      createdBy {
        id
        phone
        name
        avatar {
          publicUrl
        }
      }
      to {
        id
        phone
        name
        avatar {
          publicUrl
        }
      }
    }
  }
`;
export default function UserList({ UI, where, id, ...props }) {
  const { loading, error, data = {}, refetch } = useQuery(FRIEND_LIST, {
    variables: { id },
  });
  const { allRelationships = [] } = data;
  let allUsers = []
  allRelationships.map((relationship) => {
    allUsers.push(relationship?.createdBy)
  })
  return (
    <UI
      {...props}
      loading={loading}
      error={error}
      allUsers={allUsers}
      refetch={refetch}
    />
  );
}
