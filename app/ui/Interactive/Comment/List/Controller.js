import React from "react";
import { gql, makeVar, useQuery } from "@apollo/client";
export const COMMENT_LIST = gql`
  query(
    $first: Int
    $sortBy: [SortInteractiveCommentsBy!]
    $skip: Int
    $where: InteractiveCommentWhereInput
  ) {
    _allInteractiveCommentsMeta(where: $where) {
      count
    }
    allInteractiveComments(
      first: $first
      skip: $skip
      sortBy: $sortBy
      where: $where
    ) {
      id
      content
    }
  }
`;
export const CommentListRefetch = makeVar(() => {});

export function CommentListController({
  UI,
  first = 5,
  sortBy = "createdAt_DESC",
  skip,
  where,
  ...props
}) {
  const { loading, error, data = {}, fetchMore, refetch } = useQuery(
    COMMENT_LIST,
    {
      variables: { first, skip, sortBy, where },
    }
  );
  const { _allInteractiveCommentsMeta = {}, allInteractiveComments } = data;
  const { count } = _allInteractiveCommentsMeta;
  if (refetch) CommentListRefetch(refetch);
  return (
    <UI
      {...props}
      loading={loading}
      error={error}
      allInteractiveComments={allInteractiveComments}
      count={count}
      refetch={refetch}
    />
  );
}
