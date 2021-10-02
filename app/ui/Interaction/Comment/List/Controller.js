import {gql, useQuery} from "@apollo/client";
export const COMMENT_LIST = gql`
query($postId: ID!){
    Post(where: {id: $postId}){
        interactive{
            comments{
                id
                content
            }
        }
    }

}
`;
export function CommentList(UI, postId, ...props){
    if(!postId) return 'postId is required!';
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