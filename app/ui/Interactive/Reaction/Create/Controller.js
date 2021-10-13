import React from "react";
import { gql, useMutation } from "@apollo/client";

export const REACTION_CREATE = gql`
  mutation($data: InteractiveReactionCreateInput) {
    createInteractiveReaction(data: $data) {
      id
      emoji
    }
  }
`;

export default function ReactionCreate({ UI, interactive }) {
  const [on, { loading, error, data = {} }] = useMutation(REACTION_CREATE);
  const { createReaction } = data;
  return (
    <UI
      loading={loading}
      error={error}
      interactive={interactive}
      on={on}
      createReaction={createReaction}
    />
  );
}
