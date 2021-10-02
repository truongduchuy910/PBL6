import { gql, useQuery } from "@apollo/client";
export const COMMENT_ITEM = gql`
  query($id: ID!) {
    InteractiveComment(where: { id: id }) {
      id
      content
    }
  }
`;
export function CommenItem(UI, id, children) {
  if (!id) return "id is required!";
  const { loading, error, data = {} } = useQuery(COMMENT_ITEM, {
    variables: id,
  });
  if (loading) return "...";
  if (error) return error.message;
  const { commentItem } = data;
  return <UI commentItem={commentItem} /> || children({ commentItem });
}
