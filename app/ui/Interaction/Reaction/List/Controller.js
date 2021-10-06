import { gql } from "@apollo/client";
export const REACTION_LIST = gql`
  query($where: InteractiveReactionWhereInput) {
    allInteractiveReactions(where: $where ) {
      id
      emoji
    }
  }
`;
export default function ReactionList({ UI, id }) {
  if (!id) return "ID required!";
  const { loading, error, data = {} } = useQuery(REACTION_LIST, {
    variables: { where: { interactive: { post: { id: $id } } } },
  });
  const { allReactions = [] } = data;
  return <UI loading={loading} error={error} allReactions={allReactions} />;
}
