import React from "react";
import { gql, useQuery, makeVar } from "@apollo/client";
export const INTERACTIVE_LIST = gql`
  query(
    $first: Int
    $skip: Int
    $sortBy: [SortInteractiveCommentsBy!]
    $where: InteractiveWhereInput
  ) {
    _allInteractivesMeta(where: $where) {
      count
    }
    allInteractives(where: $where) {
      id
      _commentsMeta {
        count
      }
      comments(sortBy: $sortBy, first: $first, skip: $skip) {
        id
        content
        createdBy {
          name
          avatar {
            publicUrl
          }
        }
      }
      reactions {
        id
        emoji
        createdBy {
          name
          avatar {
            publicUrl
          }
        }
      }
    }
  }
`;

export const InteractiveListRefetch = makeVar(() => {});
// file ảnh đang lỗi chưa đưa vô
export default function InteractiveListController({
  UI,
  first = 3,
  skip,
  sortBy,
  where,
  ...props
}) {
  const { loading, error, data = {}, refetch, fetchMore, variables } = useQuery(INTERACTIVE_LIST, {
    variables: { first, where, skip, sortBy },
  });
  const onClickMore = () => {
    if (!loading)
      fetchMore({
        variables: { skip: data.allInteractives.length },
        updateQuery: (previousResult, { fetchMoreResult, queryVariables }) => {
          return {
            ...previousResult,
            allPosts: [...previousResult.allInteractives, ...fetchMoreResult.allInteractives],
          };
        },
      });
  };
  const { allInteractives, _allInteractivesMeta = {} } = data;
  const { count = 0 } = _allInteractivesMeta;
  if (refetch) InteractiveListRefetch(refetch);
  return (
    <UI
      {...props}
      loading={loading}
      error={error}
      allInteractives={allInteractives}
      count={count}
      onClickMore = {onClickMore}
      refetch={refetch}
    />
  );
}
