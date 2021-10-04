import { gql } from "@apollo/client";
export const REACTION_LIST= gql`
query($id: ID!) {
    Post(where: {id: $id}){
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
export default function ReactionList({ UI, id, ...props }) {
    if (!postId) return "ID required!";
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
  