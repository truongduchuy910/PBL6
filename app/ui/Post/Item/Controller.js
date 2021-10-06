import { gql, useQuery } from "@apollo/client";
export const POST_ITEM = gql`
  query($id: ID!) {
    Post(where: { id: $id }) {
      content
      tags {
        content
      }
      images {
        file {
          publicUrl
        }
      }
      interactive {
        comments {
          content
        }
        reactions {
          emoji
        }
      }
    }
  }
`;
export default function PostItem({ id, UI, children }) {
  if (!id) return "Id required!";
  const { loading, error, data = {} } = useQuery(POST_ITEM, {
    variables: { id },
  });
  if (loading) return "...";
  if (error) return error.message;
  const post = data;
  return <UI post={post} /> || children({ post });
}
