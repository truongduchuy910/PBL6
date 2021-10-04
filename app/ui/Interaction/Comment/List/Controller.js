import {gql, useQuery} from "@apollo/client";
export const COMMENT_LIST = gql`
query($id: ID!){
    Post(where: {id: $id}){
        interactive{
            comments{
                id
                content
            }
        }
    }

}
`;
export function CommentList(UI, id, ...props){
    if(!id) return 'id is required!';
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