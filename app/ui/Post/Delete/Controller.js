import { gql, useMutation } from "@apollo/client";

export const POST_DELETE = gql`
  mutation($id: ID!) {
    deletePost(id: $id) {
      id
      content
    }
  }
`;

export default function PostDelete({ UI, postId }) {
  const [on, { loading, error, data = {} }] = useMutation(POST_DELETE);
  const { postDeleted } = data;
  const clickDetete = () => {
    on({ variables: { id: postId } });
  };
  return (
    <UI
      loading={loading}
      erro={error}
      onClickDetete={clickDetete}
      postDeleted={postDeleted}
    />
  );
}
