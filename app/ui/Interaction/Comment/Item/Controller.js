import { gql, useQuery } from "@apollo/client";
export const COMMENT_ITEM = gql`
  query($id: ID!) {
    InteractiveComment(where: { id: id }) {
      id
      content
    }
  }
`;
export function CommenItem(UI, id, ...props) {
  if (!id) return "id is required!";
  const { loading, error, data = {} } = useQuery(COMMENT_ITEM, {
    variables: id,
  });
  const { commentItem = [] } = data;
  return (
    <UI
      {...props}
      loading={loading}
      error={error}
      commentItem={commentItem}
    />
  );
}
