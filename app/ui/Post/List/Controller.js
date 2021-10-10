import React from "react";
import { gql, useQuery } from "@apollo/client";
export const POST_LIST = gql`
  query(
    $first: Int
    $skip: Int
    $sortBy: [SortPostsBy!]
    $where: PostWhereInput
  ) {
    _allPostsMeta(where: $where) {
      count
    }
    allPosts(first: $first, skip: $skip, sortBy: $sortBy, where: $where) {
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
      createdBy {
        id
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
  const { allPosts, _allPostsMeta = {} } = data;
  const { count = 0 } = _allPostsMeta;
  return (
    <UI
      {...props}
      loading={loading}
      error={error}
      allPosts={allPosts}
      refetch={refetch}
      count={count}
    />
  );
}
