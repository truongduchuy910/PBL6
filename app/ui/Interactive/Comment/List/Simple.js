import React from "react";
import { UI as InteractionCommentItemSimple } from "../Item/Simple";
import { Button, VStack } from "native-base";
import { CommentListController } from "./Controller";

export function UI({ loading, error, allInteractiveComments = [], count = 0, refetchInteractiveItem }) {
  const moreCommentHandler = () => {
    console.log("More comments");
  };
  // Map list comments => InteractionCommentItemSimple
  if (loading) return "...";
  return (
    <VStack>
      {allInteractiveComments.map((comment) => {
        return (
          <InteractionCommentItemSimple key={comment.id} comment={comment} refetchInteractiveItem={refetchInteractiveItem} />
        );
      })}
      {/* More comments */}
      <Button
        _text={{
          color: "gray.500",
          fontSize: "12",
          fontWeight: "600",
        }}
        p="0"
        bgColor="transparent"
        onPress={moreCommentHandler}
      >
        Xem thêm bình luận
      </Button>
    </VStack>
  );
}
export default function InteractionCommentListSimple(props) {
  return <CommentListController {...props} UI={UI} />;
}
