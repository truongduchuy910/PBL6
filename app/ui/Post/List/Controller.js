import { gql, useQuery } from "@apollo/client";
export const POST_LIST = gql`
  query($first: Int, $where: PostWhereInput) {
    allPosts(first: $first, where: $where) {
      id
      content
      tags {
        content
      }
      // images {
      //   file {
      //     publicUrl
      //   }
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
export default function PostListController({ UI, first = 4, where, ...props }) {
  const { loading, error, data = {}, refetch } = useQuery(POST_LIST, {
    variables: { first, where },
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
