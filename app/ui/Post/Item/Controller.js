import { gql, useQuery } from "@apollo/client";
export const POST_ITEM = gql`
  query($id: ID!) {
    Post(where: { id: $id }) {
      id
      content
      tags {
        content
      }
      # images {
      #   file {
      #     publicUrl
      #   }
      # }
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
export default function PostItem({ id, UI }) {
  if (!id) return "Id required!";
  const { loading, error, data = {} } = useQuery(POST_ITEM, {
    variables: { id },
  });
  const post = data;
  return <UI loading={loading} error={error} post={post} />;
}
