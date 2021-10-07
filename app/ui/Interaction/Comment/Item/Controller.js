import { gql, useQuery } from "@apollo/client";
export const COMMENT_ITEM = gql`
  query($id: ID!) {
    InteractiveComment(where: { id: $id }) {
      id
      content
    }
  }
`;
export function CommenItemController(UI, id, children) {
  if (!id) return "id is required!";
  const { loading, error, data = {} } = useQuery(COMMENT_ITEM, {
    variables: { id },
  });
  if (loading) return "...";
  if (error) return error.message;
  const { comment } = data;
  return <UI comment={comment} /> || children({ comment });
}
