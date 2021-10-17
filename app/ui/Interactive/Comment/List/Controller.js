import React from "react";
import { gql, useQuery } from "@apollo/client";
export const COMMENT_LIST = gql`
  query($first: Int, $skip: Int, $where: InteractiveCommentWhereInput) {
    _allInteractiveCommentsMeta(where: $where) {
      count
    }
    allInteractiveComments(first: $first, skip: $skip, where: $where) {
      id
      content
    }
  }
`;
export function CommentListController({
  UI,
  first,
  skip,
  where,
  ...props
}) {
  const { loading, error, data = {}, refetch } = useQuery(COMMENT_LIST, {
    variables: { first, skip, where },
  });
  const { _allInteractiveCommentsMeta = {}, allInteractiveComments } = data;
  const { count } = _allInteractiveCommentsMeta;
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
