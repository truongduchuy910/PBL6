import { gql, useMutation } from "@apollo/client";

export const REACTION_DELETE = gql`
  mutation($id: ID!) {
    deleteInteractiveReaction(id: $id) {
      id
      emoji
    }
  }
`;

export default function ReactionDelete({ UI, id }) {
  const [on, { loading, error, data = {} }] = useMutation(REACTION_DELETE);
  const { reactionDeleted } = data;
  const clickDetete = () => {
    on({ variables: { id: id } });
  };
  return (
    <UI
      loading={loading}
      error={error}
      onClickDelete={clickDetete}
      reactionDeleted={reactionDeleted}
    />
  );
}
