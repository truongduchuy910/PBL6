import { gql, useMutation } from "@apollo/client";

export const RELATIONSHIP_DELETE = gql`
    deleteRelationship(id: $id) {
      id
      isAccepted
    }
  }
`;

export default function RelationshipDelete({ UI, id }) {
  const [on, { loading, error, data = {} }] = useMutation(RELATIONSHIP_DELETE);
  const { deleteRelationship } = data;
  const clickDetete = () => {
    on({ variables: { id } });
  };
  return (
    <UI loading={loading} error={error} clickDetete={clickDetete} relationship={deleteRelationship} />
  );
}
