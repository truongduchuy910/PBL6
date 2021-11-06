import React from "react";
import { gql, useMutation, useReactiveVar } from "@apollo/client";
import { ReactionListRefetch } from "../List/Controller";

export const REACTION_CREATE = gql`
  mutation($id: ID!, $data: InteractiveUpdateInput) {
    updateInteractive(id: $id, data: $data) {
      reactions {
        emoji
      }
    }
  }
`;

export default function ReactionCreate({ UI, interactive, refetch }) {
  const refetchPostItem = () => {
    refetch();
  };
  const [on, { loading, error, data = {} }] = useMutation(REACTION_CREATE, {
    onCompleted: (data) => {
      refetchPostItem();
    },
  });
  const { createInteractiveReaction } = data;
  return (
    <UI
      interactive={interactive}
      loading={loading}
      error={error}
      on={on}
      createReaction={createInteractiveReaction}
    />
  );
}
