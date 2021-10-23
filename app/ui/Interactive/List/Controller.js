import React from "react";
import { gql, useQuery } from "@apollo/client";
export const INTERACTIVE_LIST = gql`
  query(
    $first: Int
    $skip: Int
    $sortBy: [SortInteractiveCommentsBy!]
    $where: InteractiveWhereInput
  ) {
    _allInteractivesMeta(where: $where) {
      count
    }
    allInteractives(where: $where) {
      id
      comments(sortBy: $sortBy, first: $first, skip: $skip) {
        id
        content
        createdBy {
          name
          avatar {
            publicUrl
          }
        }
      }
      reactions {
        id
        emoji
        createdBy {
          name
          avatar {
            publicUrl
          }
        }
      }
    }
  }
`;
// file ảnh đang lỗi chưa đưa vô
export default function InteractiveListController({
  UI,
  first = 3,
  skip,
  sortBy,
  where,
  ...props
}) {
  const { loading, error, data = {}, refetch } = useQuery(INTERACTIVE_LIST, {
    variables: { first, where, skip, sortBy },
  });
  const { allInteractives, _allInteractivesMeta = {} } = data;
  const { count = 0 } = _allInteractivesMeta;
  return (
    <UI
      {...props}
      loading={loading}
      error={error}
      allInteractives={allInteractives}
      count={count}
      refetch={refetch}
    />
  );
}
