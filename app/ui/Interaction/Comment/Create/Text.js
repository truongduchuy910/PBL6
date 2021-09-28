import React from "react";
import { Button } from "native-base";
function UI() {
  const toggleText = (e) => {
    console.log("Comment Create Text");
  };

  return (
    <Button
      _text={{ color: "gray.400", fontSize: "12", fontWeight: "600" }}
      p="0"
      bgColor="transparent"
      onPress={toggleText}
    >
      Trả lời
    </Button>
  );
}
export default UI;
