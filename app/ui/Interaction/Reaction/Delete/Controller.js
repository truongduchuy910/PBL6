import { gql, useMutation } from "@apollo/client";

export const REACTION_DELETE = gql`
  mutation($id: ID!) {
    deleteReaction(id: $id) {
      id
      emoji
    }
  }
`;

export default function ReactionDelete({ UI, children, page }) {
  const [on, { loading, error, data = {} }] = useMutation(REACTION_DELETE);
  if (loading) return "...";
  if (error) return error.message;
  const { reactionDeleted } = data;
  return (
    <UI page={page} onDelete={on} reactionDeleted={reactionDeleted} /> ||
    children({ page, onDelete, commentDeleted })
  );
}
