import { gql, useQuery } from "@apollo/client";
import { COMMENT_LIST } from "../List/Controller";
export const COMMENT_ITEM = gql`
  query($id: ID!) {
    InteractiveComment(where: { id: $id }) {
      id
      content
    }
  }
`;
export function CommenItemController(UI, id, where) {
  if (!id) return "Id is required!";
  const { loading, error, data = {} } = useQuery(
    id ? COMMENT_ITEM : COMMENT_LIST,
    {
      variables: id ? { id } : { where },
    }
  );
  if (loading) return "...";
  if (error) return error.message;
  const { allInteractiveComments = [], InteractiveComment } = data;
  const [comment] = allInteractiveComments || [InteractiveComment];
  return <UI loading={loading} error={error} comment={comment} />;
}
