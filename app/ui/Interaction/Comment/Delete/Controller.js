import { gql, useMutation } from "@apollo/client";

export const COMMENT_DELETE = gql`
  mutation($id: ID!) {
    deleteInteractiveComment(id: $id) {
      id
      content
    }
  }
`;

export default function CommentDelete({ UI, children, comment }) {
  const [on, { loading, error, data = {} }] = useMutation(COMMENT_DELETE);
  if (loading) return "...";
  if (error) return error.message;
  const { commentDeleted } = data;
  return (
    <UI comment={comment} onDeleteComment={on} commentDeleted={commentDeleted} /> ||
    children({ comment, onDeleteComment, commentDeleted })
  );
}
