import { gql, useMutation } from "@apollo/client";

export const POST_DELETE = gql`
  mutation ($id: ID!) {
      deletePost(id: $id){
          id
          content
      }
  }
`;

export default function PostDelete({ UI, children, page }) {
  const [on, { loading, error, data = {} }] = useMutation(mutation);
  if (loading) return "...";
  if (error) return error.message;
  const { postDeleted } = data;
  return (
    <UI page={page} onDeletePost={on} postDeleted={postDeleted} /> ||
    children({ page, onDeletePost, postDeleted })
  );
}
