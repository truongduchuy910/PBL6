import React from "react";
import { gql, makeVar, useQuery } from "@apollo/client";
import { INTERACTIVE_LIST } from "../List/Controller";
export const INTERACTIVE_ITEM = gql`
  query(
    $id: ID!
    $sortBy: [SortInteractiveCommentsBy!]
    $first: Int
    $where: InteractiveWhereInput
  ) {
    allInteractives(where: $where) {
      id
      _commentsMeta {
        count
      }
      comments(sortBy: $sortBy, first: $first) {
        id
        content
        createdBy {
          name
          avatar {
            publicUrl
          }
        }
        interactive {
          id
          _commentsMeta {
            count
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
export const RefetchInteractiveItem = makeVar(() => {});

export default function InteractiveItem({ UI, id, where, sortBy, first = 3 }) {
  const { loading, error, data = {}, refetch, fetchMore , variables } = useQuery(
    id ? INTERACTIVE_ITEM : INTERACTIVE_LIST,
    {
      variables: id ? { id, sortBy, first } : { where, sortBy, first },
    }
  );
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
  if (!!refetch) RefetchInteractiveItem(refetch);
  const { allInteractives, Interactive } = data;
  const [interactive] = allInteractives || [Interactive];
  console.log(interactive);
  return (
    <UI
      loading={loading}
      error={error}
      interactive={interactive}
      onClickMore = {onClickMore}
    />
  );
}
