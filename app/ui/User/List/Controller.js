import React from "react";
import { gql, useQuery } from "@apollo/client";
export const POST_LIST = gql`
  query($first: Int, $where: UserWhereInput) {
    _allUsersMeta {
      count
    }
    allUsers(first: $first, where: $where) {
      id
      phone
    }
  }
`;
// file ảnh đang lỗi chưa đưa vô
export default function UserList({ UI, first = 4, where, ...props }) {
  const { loading, error, data = {}, refetch } = useQuery(POST_LIST, {
    variables: { first, where },
  });
  const { allUsers = [], _allUsersMeta = {} } = data;
  const { count } = _allUsersMeta;
  return (
    <UI
      {...props}
      loading={loading}
      error={error}
      allUsers={allUsers}
      count={count}
      refetch={refetch}
    />
  );
}
