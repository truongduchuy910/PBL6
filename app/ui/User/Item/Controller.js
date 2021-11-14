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
    allPosts(where: { createdBy: { id: $id } }) {
      id
    }
  }
`;
export default function UserItem({ UI, where, id }) {
  const { loading, error, data = {} } = useQuery(id ? POST_ITEM : POST_LIST, {
    variables: id ? { id } : { where },
    //variables: id ? { id: id, my_id: currentUser.id } : { where, my_id: currentUser.id }
  });
  const { allUsers, User } = data;
  const [user] = allUsers || [User];
  const { allPosts = [] } = data;
  return <UI loading={loading} error={error} user={user} posts={allPosts} />;
}
// export const POST_ITEM = gql`
//   query($id: ID!, $my_id: ID!) {
//     User(where: { id: $id }) {
//       id
//       phone
//       name
//       avatar {
//         publicUrl
//       }
//     }
//     allPosts(where: { createdBy: { id: $id } }) {
//       id
//     }
//     allRelationships(where: { createdBy: { id: $my_id }, to: { id: $id } }) {
//       id
//       isAccepted
//       createdBy {
//         id
//       }
//       to {
//         id
//       }
//     }
//   }
// `;