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

export default function PostUpdate({ UI, children, page }) {
  const [on, { loading, error, data = {} }] = useMutation(POST_UPDATE);
  if (loading) return "...";
  if (error) return error.message;
  const { postUpdated } = data;
  return (
    <UI page={page} onUpdatePost={on} postUpdated={postUpdated} /> ||
    children({ page, onUpdatePost, postUpdated })
  );
}
