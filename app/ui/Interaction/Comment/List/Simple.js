import React from "react";
import InteractionCommentItemSimple from "../Item/Simple";
import { Button, VStack } from "native-base";
import { CommentListController } from "./Controller";

function UI({loading, error, allComments}) {
  const moreCommentHandler = () => {
    console.log("More comments");
  };

  // Map list comments => InteractionCommentItemSimple
  return (
    <VStack>
      {allComments.map((cmt)=>{
        <InteractionCommentItemSimple comment={cmt}/>
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
export default function InteractionCommentListSimple({where}){
  return <CommentListController where={where} UI={UI} />
};
