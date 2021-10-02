import { gql, useMutation } from "@apollo/client";

export const COMMENT_UPDATE = gql`
  mutation($id: ID!, $data: UpdateCommentInput) {
    updatePost(id: $id, data: $data) {
      id
      content
      }
    }
  }
`;

export default function CommentUpdate({ UI, children, page }) {
  const [on, { loading, error, data = {} }] = useMutation(COMMENT_UPDATE);
  if (loading) return "...";
  if (error) return error.message;
  const { commentUpdate } = data;
  return (
    <UI page={page} onUpdateComment={on} commentUpdate={commentUpdate} /> ||
    children({ page, onUpdateComment, commentUpdate })
  );
}
