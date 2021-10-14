import { gql, useMutation } from "@apollo/client";

export const COMMENT_UPDATE = gql`
  mutation($id: ID!, $data: InteractiveCommentInput) {
    updateInteractiveComment(id: $id, data: $data) {
      id
      content
      }
    }
  }
`;

export default function CommentUpdate({ UI, comment }) {
  const [on, { loading, error, data = {} }] = useMutation(COMMENT_UPDATE);
  if (loading) return "...";
  if (error) return error.message;
  const { commentUpdate } = data;
  return (
    <UI comment={comment} on={on} commentUpdate={commentUpdate} /> 
  );
}
