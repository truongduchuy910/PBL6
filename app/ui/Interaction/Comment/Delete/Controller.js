import { gql, useMutation } from "@apollo/client";

export const COMMENT_DELETE = gql`
  mutation($id: ID!) {
    deleteInteractiveComment(id: $id) {
      id
      content
    }
  }
`;

export default function CommentDelete({ UI, id }) {
  const [on, { loading, error, data = {} }] = useMutation(COMMENT_DELETE);
  const { commentDeleted } = data;
  const clickDetete = () => {
    on({ variables: { id: id } });
  };
  return (
    <UI
      loading={loading}
      error={error}
      onClickDetete={clickDetete}
      commentDeleted={commentDeleted}
    />
  );
}
