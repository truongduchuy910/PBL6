import { gql, useMutation } from "@apollo/client";

export const POST_DELETE = gql`
  mutation($id: ID!) {
    deletePost(id: $id) {
      id
      content
    }
  }
`;

export default function PostDelete({ UI, children, post }) {
  const [on, { loading, error, data = {} }] = useMutation(POST_DELETE);
  if (loading) return "...";
  if (error) return error.message;
  const { postDeleted } = data;
  const clickDetete = () => {
    on({ variables: { id: post.id } });
  };
  return (
    <UI post={post} onClickDetete={clickDetete} postDeleted={postDeleted} /> ||
    children({ post, onDeletePost, postDeleted })
  );
}
