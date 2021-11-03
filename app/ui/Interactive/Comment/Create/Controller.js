import React from "react";
import { gql, useMutation, useReactiveVar, ReactiveVar } from "@apollo/client";
import { RefetchInteractiveCommentList } from "../List/Controller";
import { RefetchInteractiveItem } from "../../Item/Controller";

export const COMMENT_CREATE = gql`
  mutation($data: InteractiveCommentCreateInput) {
    createInteractiveComment(data: $data) {
      id
      content
    }
  }
`;

export default function CommentCreate({ UI, interactive, refetch }) {
  const refectInteractiveItem = () => {
    console.log("Completed create comment");
    refetch();
  };

  const [on, { loading, error, data = {} }] = useMutation(COMMENT_CREATE, {
    onCompleted: (data) => {
      refectInteractiveItem();
    },
  });
  const { createComment } = data;
  return (
    <UI
      loading={loading}
      error={error}
      on={on}
      createComment={createComment}
      interactive={interactive}
    />
  );
}
