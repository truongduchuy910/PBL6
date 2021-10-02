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
  return (
    <UI post={post} onDeletePost={on} postDeleted={postDeleted} /> ||
    children({ post, onDeletePost, postDeleted })
  );
}
