import React from "react";
import { gql, useMutation } from "@apollo/client";

export const RELATIONSHIP_CREATE = gql`
  mutation($data: RelationshipCreateInput) {
    createRelationship(data: $data) {
      id
      to {
        id
        name
      }
      createBy {
        id
        name
      }
      isAccepted
    }
  }
`;

export default function PostCreate({ UI }) {
  const [on, { loading, error, data = {} }] = useMutation(POST_CREATE);
  const { createRelationship } = data;
  return <UI loading={loading} error={error} on={on} createRelationship={createRelationship} />;
}
