import {gql, useQuery} from "@apollo/client";
export const COMMENT_LIST = gql`
query($id: ID!) {
  allInteractiveComments(where: { interactive: { post: { id: $id } } }) {
    id
    content
  }
}
`;
export function CommentList(UI, id, ...props){
    if(!id) return 'ID is required!';
 const {loading, error, data = {}, refetch}= useQuery(COMMENT_LIST,{variables:postId});
 const { commentList = [] } = data.Post.interactive.comments;
    return (
      <UI
        {...props}
        loading={loading}
        error={error}
        commentList={commentList}
        refetch={refetch}
      />)
}