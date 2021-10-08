import { gql, useMutation } from "@apollo/client";

export const COMMENT_CREATE = gql`
  mutation($data: InteractiveCommentCreateInput) {
    createInteractiveComment(data: $data) {
      id
      content
    }
  }
`;

export default function CommentCreate({ UI, interactive  }) {
  const [on, { loading, error, data = {} }] = useMutation(COMMENT_CREATE);
  const { createComment } = data;
  return (
    <UI
      loading={loading}
      error={error}
      on={on}
      createComment={createComment}
      interactive ={interactive }
    />
  );
}
