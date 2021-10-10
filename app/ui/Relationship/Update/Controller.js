import { gql, useMutation } from "@apollo/client";

export const RELATIONSHIP_UPDATE = gql`
  mutation($id: ID!, $data: UpdateRelationshipInput) {
    updateRelationship(id: $id, data: $data) {
      id
      to {
        id
        name
      }
      createBy {
        id
        name
      }
      isAccepted
    }
  }
`;

export default function PostUpdate({ UI, children, relationship }) {
  const [on, { loading, error, data = {} }] = useMutation(POST_UPDATE);
  const { updateRelationship } = data;
  return (
    (
      <UI
        loading={loading}
        error={error}
        relationship={relationship}
        on={on}
        relationshipUpdated={updateRelationship}
      />
    ) || children({ relationship, on, relationshipUpdated })
  );
}
