import { gql, useQuery } from "@apollo/client";
export const RELATIONSHIP_LIST = gql`
  query($where: RelationshipsWhereInput) {
    _allRelationshipsMeta(where: $where) {
      count
    }
    allRelationships(where: $where) {
      id
    }
  }
`;
export function RelationshipListController(UI, where, ...props) {
  const { loading, error, data = {}, refetch } = useQuery(RELATIONSHIP_LIST, {
    variables: { where },
  });
  const { _allRelationshipsMeta = {}, allRelationships = [] } = data;
  const { count } = _allRelationshipsMeta;
  return (
    <UI
      {...props}
      loading={loading}
      error={error}
      allRelationships={allRelationships}
      _allRelationshipsMeta={_allRelationshipsMeta}
      count={count}
      refetch={refetch}
    />
  );
}
