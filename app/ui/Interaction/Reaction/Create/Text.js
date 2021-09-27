import React, { Fragment, useState } from "react";
import { Button, Text } from "native-base";

function UI() {
  const [isLike, setIsLike] = useState(false);

  const likeHandle = (e) => {
    console.log("Reaction Create Text");
    setIsLike((prev) => !prev);
  };

  return (
    <Fragment>
      {isLike && (
        <Button
          _text={{ color: "green.500", fontSize: "12" }}
          p="0"
          bgColor="transparent"
          onPress={likeHandle}
        >
          Thích
        </Button>
      )}
      {!isLike && (
        <Button
          _text={{ color: "gray.400", fontSize: "12" }}
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
export default UI;
