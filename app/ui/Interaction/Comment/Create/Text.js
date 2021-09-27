import React from "react";
import { Button, Text } from "native-base";

function UI() {
  const toggleText = (e) => {
    console.log("Comment Create Text");
  };

  return (
    <Button
      _text={{ color: "gray.400", fontSize: "12" }}
      p="0"
      bgColor="transparent"
      onPress={toggleText}
    >
      <Text>Trả lời</Text>
    </Button>
  );
}
export default UI;
