import { gql, useQuery } from "@apollo/client";
export const query = gql`
  query($id: ID!) {
    Post(where: { id: $id }) {
      content
      tags {
        content
      }
      images {
        alt
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
// file anh dang loi nen chua bo vao
export default function PostItem({ id, UI, children }) {
  if (!id) return "Id required!";
  const { loading, error, data = {} } = useQuery(query, {
    variables: { id },
  });
  if (loading) return "...";
  if (error) return error.message;
  const post = data;
  return <UI post={post} /> || children({ post });
}
