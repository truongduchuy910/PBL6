import React from "react";
import { gql, useMutation } from "@apollo/client";

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
