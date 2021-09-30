import React from "react";
import { Button } from "native-base";

function UI() {
  const clickHandler = (e) => {
    console.log("User Relationship Delete Button");
  };

  return (
    <Button
      _text={{ color: "gray.400", fontSize: "14", fontWeight: "600" }}
      p="2"
      rounded="8"
      w="100%"
      bgColor="gray.100"
      onPress={clickHandler}
    >
      Huỷ kết bạn
    </Button>
  );
}
export default UI;

// A và B đã kết bạn với nhau, B huỷ kết bạn với A
