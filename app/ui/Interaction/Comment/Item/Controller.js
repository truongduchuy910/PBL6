import { gql, useQuery } from "@apollo/client";
export const COMMENT_ITEM = gql`
  query($id: ID!) {
    InteractiveComment(where: { id: $id }) {
      id
      content
    }
  }
`;
export function CommenItemController(UI, id) {
  if (!id) return "Id is required!";
  const { loading, error, data = {} } = useQuery(COMMENT_ITEM, {
    variables: { id },
  });
  const { InteractiveComment } = data;
  return <UI loading={loading} error={error} comment={InteractiveComment} />;

}
