import { gql, useQuery } from "@apollo/client";
export const COMMENT_LIST = gql`
  query($where: InteractiveCommentsWhereInput) {
    _allInteractiveCommentsMeta(where: $where) {
      count
    }
    allInteractiveComments(where: $where) {
      id
      content
    }
  }
`;
export function CommentListController(UI, where, ...props) {
  if (!id) return "ID is required!";
  const { loading, error, data = {}, refetch } = useQuery(COMMENT_LIST, {
    variables: { where },
  });
  const { _allInteractiveCommentsMeta, allInteractiveComments  } = data;
  return (
    <UI
      {...props}
      loading={loading}
      error={error}
      allComments={allInteractiveComments}
      _allCommentsMeta= {_allInteractiveCommentsMeta}
      refetch={refetch}
    />
  );
}
