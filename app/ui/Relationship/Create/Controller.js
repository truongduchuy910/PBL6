import React from "react";
import { gql, useMutation, useReactiveVar } from "@apollo/client";
import { refetchUserItem } from "../../User/Item/Controller";

export const RELATIONSHIP_CREATE = gql`
  mutation($data: RelationshipCreateInput) {
    createRelationship(data: $data) {
      id
      to {
        id
        name
      }
      createdBy {
        id
        name
      }
      isAccepted
    }
  }
`;

export default function RelationshipCreate({ UI, toId }) {
  const userItemRefetch = useReactiveVar(refetchUserItem);
  const [on, { loading, error, data = {} }] = useMutation(RELATIONSHIP_CREATE, {
    onCompleted: (data) => {
      userItemRefetch();
    },
  });
  const clickAddFriend = () => {
    on({
      variables: {
        data: {
          to: {
            connect: {
              id: toId,
            },
          },
          isAccepted: false,
        },
      },
    });
  };
  const { createRelationship } = data;
  return (
    <UI
      loading={loading}
      error={error}
      clickAddFriend={clickAddFriend}
      createRelationship={createRelationship}
    />
  );
}
