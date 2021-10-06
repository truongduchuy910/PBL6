import { gql } from "@apollo/client";
export const REACTION_LIST = gql`
  query($id: ID!) {
    allInteractiveReactions(where: { interactive: { post: { id: $id } } }) {
      id
      emoji
    }
  }
`;
export default function ReactionList({ UI, postId }) {
  if (!postId) return "ID required!";
  const { loading, error, data = {} } = useQuery(REACTION_LIST, {
    variables: { id: postId },
  });
  const { allReactions = [] } = data;
  return (
    <UI
      loading={loading}
      error={error}
      allReactions={allReactions}
    />
  );
}
