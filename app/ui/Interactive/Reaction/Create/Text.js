import React, { Fragment, useState } from "react";
import { Button, Text } from "native-base";
import Controller from "./Controller";

function UI({ loading, error, on, interactive }) {
  const [isLike, setIsLike] = useState(false);
  const likeHandle = (e) => {
    console.log("Reaction Create Text");
    on({
      variables: {
        data: {
          interactive: { connect: { id: interactive.id } },
          emoji: "like",
        },
      },
    });
    setIsLike((prev) => !prev);
  };

  return (
    <Fragment>
      {isLike && (
        <Button
          _text={{ color: "green.500", fontSize: "12", fontWeight: "600" }}
          p="0"
          bgColor="transparent"
          onPress={likeHandle}
        >
          Thích
        </Button>
      )}
      {!isLike && (
        <Button
          _text={{ color: "gray.400", fontSize: "12", fontWeight: "600" }}
          p="0"
          bgColor="transparent"
          onPress={likeHandle}
        >
          Thích
        </Button>
      )}
    </Fragment>
  );
}
export default function InteractionReactionCreateText(props) {
  return <Controller {...props} UI={UI} />;
}
