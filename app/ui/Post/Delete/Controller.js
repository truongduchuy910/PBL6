import { gql, useMutation } from "@apollo/client";

export const POST_DELETE = gql`
  mutation($id: ID!) {
    deletePost(id: $id) {
      id
      content
    }
  }
`;

export default function PostDelete({ UI, id }) {
  const [on, { loading, error, data = {} }] = useMutation(POST_DELETE);
  const { post } = data;
  const clickDetete = () => {
    on({ variables: { id } });
  };
  return (
    <UI
      loading={loading}
      error={error}
      clickDetete={clickDetete}
      post={post}
    />
  );
}
