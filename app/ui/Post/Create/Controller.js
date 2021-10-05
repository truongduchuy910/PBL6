import { gql, useMutation } from "@apollo/client";

export const POST_CREATE = gql`
  mutation($data: PostCreateInput) {
    createPost(data: $data) {
      id
      content
      tags {
        content
      }
    }
  }
`;

export default function PostCreate({ UI, children, post }) {
  const [on, { loading, error, data = {} }] = useMutation(POST_CREATE);
  if (loading) return "...";
  if (error) return error.message;
  const { createPost } = data;
  return (
    <UI post={post} on={on} createPost={createPost} /> ||
    children({ post, on, createPost })
  );
}
