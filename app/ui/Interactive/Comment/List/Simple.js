import React from "react";
import { UI as InteractionCommentItemSimple } from "../Item/Simple";
import { Button, VStack } from "native-base";
import { CommentListController } from "./Controller";

export function UI({
  loading,
  error,
  allInteractiveComments = [],
  count,
  onClickMore,
}) {
  const moreCommentHandler = () => {
    console.log("More comments");
  };
  // Map list comments => InteractionCommentItemSimple
  if (loading) return "...";
  return (
    <VStack>
      {allInteractiveComments.map((comment) => {
        return (
          <InteractionCommentItemSimple key={comment.id} comment={comment} />
        );
      })}
      {/* More comments */}
      {count > allInteractiveComments.length && (
        <Button
          _text={{
            color: "gray.500",
            fontSize: "12",
            fontWeight: "600",
          }}
          p="0"
          bgColor="transparent"
          onPress={onClickMore}
        >
          {console.log(count)}
          Xem thêm bình luận
        </Button>
      )}
    </VStack>
  );
}
export default function InteractionCommentListSimple(props) {
  return <CommentListController {...props} UI={UI} />;
}
