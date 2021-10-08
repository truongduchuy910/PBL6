import React from "react";
import { gql, useQuery } from "@apollo/client";
export const INTERACTIVE_LIST = gql`
  query(
    $first: Int
    $skip: skip
    $sortBy: sortBy
    $where: InteractiveWhereInput
  ) {
    _allInteractivesMeta(where: $where) {
      count
    }
    allInteractives(
      first: $first
      skip: $skip
      sortBy: $sortBy
      where: $where
    ) {
      id
      comments {
        content
      }
      reactions {
        emoji
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
  const { allInteractives, _allInteractivesMeta } = data;
  return (
    <UI
      {...props}
      loading={loading}
      error={error}
      allInteractives={allInteractives}
      _allInteractivesMeta={_allInteractivesMeta}
      refetch={refetch}
    />
  );
}
