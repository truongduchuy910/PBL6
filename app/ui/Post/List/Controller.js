import { gql, useQuery } from "@apollo/client";
export const POST_LIST = gql`
  query($first: Int, $skip: skip, $sortBy: sortBy, $where: PostWhereInput) {
    _allPostsMeta(where: $where) {
      count
    }
    allPosts(first: $first, skip: $skip, sortBy: $sortBy, where: $where) {
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
export default function PostListController({
  UI,
  first = 3,
  skip,
  sortBy,
  where,
  ...props
}) {
  const { loading, error, data = {}, refetch } = useQuery(POST_LIST, {
    variables: { first, where, skip, sortBy },
  });
  const { allPosts, _allPostsMeta } = data;
  return (
    <UI
      {...props}
      loading={loading}
      error={error}
      allPosts={allPosts}
      _allPostsMeta={_allPostsMeta}
      refetch={refetch}
    />
  );
}
