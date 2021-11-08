import React from "react";
import { gql, useMutation } from "@apollo/client";
import { REACTION_DELETE } from "../Delete/Controller";

export const REACTION_CREATE = gql`
  mutation($id: ID!, $data: InteractiveUpdateInput) {
    updateInteractive(id: $id, data: $data) {
      reactions {
        emoji
      }
    }
  }
`;

export default function ReactionCreate({
  UI,
  interactive,
  refetch,
  reactionsList,
  id,
}) {
  const refetchPostItem = () => {
    refetch();
  };
  const [onCreate, { loading1, error1, data1 = {} }] = useMutation(
    REACTION_CREATE,
    {
      onCompleted: (data) => {
        refetchPostItem();
      },
    }
  );
  const [onDelete, { loading2, error2, data2 = {} }] = useMutation(
    REACTION_DELETE,
    {
      onCompleted: (data) => {
        refetchPostItem();
      },
    }
  );
  const { createInteractiveReaction } = data1;
  const { deleteInteractiveReaction } = data2;
  return (
    <UI
      interactive={interactive}
      loading={loading1}
      error={error1}
      onCreate={onCreate}
      onDelete={onDelete}
      createReaction={createInteractiveReaction}
      deleteReaction={deleteInteractiveReaction}
      reactionsList={reactionsList}
    />
  );
}
