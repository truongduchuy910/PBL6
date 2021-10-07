import { gql, useMutation } from "@apollo/client";

export const REACTION_CREATE = gql`
  mutation($data: InteractiveReactionCreateInput) {
    createInteractiveReaction(data: $data) {
      id
      emoji
    }
  }
`;

export default function ReactionCreate({ UI, whereInteractiveID }) {
  const [on, { loading, error, data = {} }] = useMutation(REACTION_CREATE);
  const { createReaction } = data;
  return (
    <UI
      loading={loading}
      error={error}
      whereInteractiveID={whereInteractiveID}
      on={on}
      createReaction={createReaction}
    />
  );
}
