import { gql, useQuery } from "@apollo/client";
export const POST_LIST = gql`
  query($first: Int) {
    allPosts(first: $first) {
      id
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
// file ảnh đang lỗi chưa đưa vô
export default function PostList({ UI, first = 4, ...props }) {
  const { loading, error, data = {}, refetch } = useQuery(POST_LIST, {
    variables: { first },
  });
  const { allPosts = [] } = data;
  return (
    <UI
      {...props}
      loading={loading}
      error={error}
      allPosts={allPosts}
      refetch={refetch}
    />
  );
}
