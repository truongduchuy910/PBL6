import { gql } from "@apollo/client";
export const REACTION_LIST= gql`
query($postId: ID!) {
    Post(where: {id: $postId}){
      content
      interactive{
        reactions{
          id
          emoji
        }
      }
    }
  }

`;
export default function ReactionList({ UI, postId, ...props }) {
    if (!postId) return "Post ID required!";
    const { loading, error, data = {}, refetch } = useQuery(REACTION_LIST, {
      variables: { postId },
    });
    const { reactionsList = [] } = data.Post.interactive.reactions;
    return (
      <UI
        {...props}
        loading={loading}
        error={error}
        reactionsList={reactionsList}
        refetch={refetch}
      />
    );
  }
  