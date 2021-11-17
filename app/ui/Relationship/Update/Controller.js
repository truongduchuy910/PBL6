import React from "react";
import { gql, useMutation, useReactiveVar } from "@apollo/client";
import { refetchUserItem } from "../../User/Item/Controller";

export const RELATIONSHIP_UPDATE = gql`
  mutation($id: ID!, $data: UpdateRelationshipInput) {
    updateRelationship(id: $id, data: $data) {
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

export default function PostUpdate({ UI, children, relationship, id }) {
  const userItemRefetch = useReactiveVar(refetchUserItem);
  const [on, { loading, error, data = {} }] = useMutation(POST_UPDATE, {
    onCompleted: (data) => {
      userItemRefetch();
    },
  });
  const clickAgree = () => {
    on({ variables: id, data: { isAccepted: true } });
  };
  const { updateRelationship } = data;
  return (
    (
      <UI
        loading={loading}
        error={error}
        clickAgree={clickAgree}
      />
    ) || children({ relationship, on, relationshipUpdated })
  );
}
