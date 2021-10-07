import React, { useState, Fragment } from "react";
import { Button } from "native-base";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Controller from "./Controller";

function UI(loading, error, whereInteractiveID, on) {
  const [isLike, setIsLike] = useState(false);

  const likeHandle = (e) => {
    setIsLike((prev) => !prev);
    on({
      varaible: {
        interactive: { connect: { id: whereInteractiveID } },
        emoji: like,
      },
    });
    console.log("Reaction Create Button");
  };

  return (
    <Fragment>
      {isLike && (
        <Button
          _text={{ color: "green.500", fontSize: "14", fontWeight: "600" }}
          p="2"
          bgColor="transparent"
          leftIcon={<FaHeart color="#22c55e" size="17" />}
          _hover={{ bgColor: "gray.100" }}
          onPress={likeHandle}
        >
          Thích
        </Button>
      )}
      {!isLike && (
        <Button
          _text={{ color: "gray.400", fontSize: "14", fontWeight: "600" }}
          p="2"
          bgColor="transparent"
          leftIcon={<FaRegHeart color="#a1a1aa" size="17" />}
          _hover={{ bgColor: "gray.100" }}
          onPress={likeHandle}
        >
          Thích
        </Button>
      )}
    </Fragment>
  );
}
export default function InteractionReactionCreateButton(props) {
  return <Controller {...props} UI={UI} />;
}
