import React from "react";
import { gql, useQuery } from "@apollo/client";
export const COMMENT_LIST = gql`
  query($where: InteractiveCommentWhereInput) {
    _allInteractiveCommentsMeta(where: $where) {
      count
    }
    allInteractiveComments(where: $where) {
      id
      content
    }
  }
`;
export function CommentListController({ UI, where, ...props }) {
  const { loading, error, data = {}, refetch } = useQuery(COMMENT_LIST, {
    variables: { where },
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
