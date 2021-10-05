import { gql, useMutation } from "@apollo/client";

export const REACTION_DELETE = gql`
  mutation($id: ID!) {
    deleteInteractiveReaction(id: $id) {
      id
      emoji
    }
  }
`;

export default function ReactionDelete({ UI, children, reaction }) {
  const [on, { loading, error, data = {} }] = useMutation(REACTION_DELETE);
  if (loading) return "...";
  if (error) return error.message;
  const { reactionDeleted } = data;
  const clickDetete = () => {
    on({ variables: { id: reaction.id } });
  };
  return (
    (
      <UI
        page={reaction}
        onClickDelete={clickDetete}
        reactionDeleted={reactionDeleted}
      />
    ) || children({ reaction, onDelete, commentDeleted })
  );
}
