import { gql, useMutation } from "@apollo/client";

export const COMMENT_CREATE = gql`
  mutation($data: InteractiveCommentCreateInput) {
    createInteractiveComment(data: $data) {
      id
      content
      user {
        id
      }
    }
  }
`;

export default function CommentCreate({ UI, children, comment }) {
  const [on, { loading, error, data = {} }] = useMutation(COMMENT_CREATE);
  if (loading) return "...";
  if (error) return error.message;
  const { createComment } = data;
  return (
    <UI comment={comment} on={on} createComment={createComment} /> ||
    children({ comment, on, createComment })
  );
}
