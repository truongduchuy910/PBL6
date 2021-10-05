import { gql, useMutation } from "@apollo/client";

export const POST_UPDATE = gql`
  mutation($id: ID!, $data: UpdatePostInput) {
    updatePost(id: $id, data: $data) {
      id
      content
      tags {
        content
      }
    }
  }
`;

export default function PostUpdate({ UI, children, post }) {
  const [on, { loading, error, data = {} }] = useMutation(POST_UPDATE);
  if (loading) return "...";
  if (error) return error.message;
  const { postUpdated } = data;
  return (
    <UI post={post} onUpdatePost={on} postUpdated={postUpdated} /> ||
    children({ post, onUpdatePost, postUpdated })
  );
}
