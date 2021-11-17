import React from "react";
import { gql, useMutation, useReactiveVar } from "@apollo/client";
import { refetchUserItem } from "../../User/Item/Controller";

export const RELATIONSHIP_DELETE = gql`
  mutation($id: ID!) {
    deleteRelationship(id: $id) {
      id
      isAccepted
    }
  }
`;

export default function RelationshipDelete({ UI, id }) {
  const userItemRefetch = useReactiveVar(refetchUserItem);
  const [on, { loading, error, data = {} }] = useMutation(RELATIONSHIP_DELETE, {
    onCompleted: (data) => {
      userItemRefetch();
    },
  });
  const { deleteRelationship } = data;
  const clickDetete = () => {
    on({ variables: { id } });
  };
  return (
    <UI
      loading={loading}
      error={error}
      clickDetete={clickDetete}
      relationship={deleteRelationship}
      id={id}
    />
  );
}
