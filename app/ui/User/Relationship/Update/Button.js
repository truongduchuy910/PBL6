import React from "react";
import { Button } from "native-base";

function UI() {
  const clickHandler = (e) => {
    console.log("User Relationship Update Button");
  };

  return (
    <Button
      _text={{ color: "white", fontSize: "14", fontWeight: "600" }}
      p="2"
      rounded="8"
      w="100%"
      bgColor="green.500"
      onPress={clickHandler}
    >
      Xác nhận
    </Button>
  );
}
export default UI;
