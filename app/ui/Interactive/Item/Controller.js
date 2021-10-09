import { gql, useQuery } from "@apollo/client";
import { INTERACTIVE_LIST } from "../List/Controller";
export const INTERACTIVE_ITEM = gql`
  query($id: ID!) {
    allInteractives(where: { id: $id }) {
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
export default function InteractiveItem({ UI, id, where }) {
  const { loading, error, data = {} } = useQuery(
    id ? INTERACTIVE_ITEM : INTERACTIVE_LIST,
    {
      variables: id ? { id } : { where },
    },
  );
  const { allInteractives, Interactive } = data;
  const [post] = allInteractives || [Interactive];
  return <UI loading={loading} error={error} post={post} />;
}
