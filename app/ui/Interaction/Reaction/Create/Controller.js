import { gql, useMutation } from "@apollo/client";

export const REACTION_CREATE = gql`
  mutation($data: InteractiveReactionCreateInput) {
    createInteractiveReaction(data: $data) {
      id
      emoji
    }
  }
`;

export default function ReactionCreate({ UI, children, reaction }) {
  const [on, { loading, error, data = {} }] = useMutation(REACTION_CREATE);
  if (loading) return "...";
  if (error) return error.message;
  const { createReaction } = data;
  return (
    <UI reaction={reaction} on={on} createReaction={createReaction} /> ||
    children({ reaction, on, createReaction })
  );
}
