import React from "react";
import { Button, Text } from "native-base";
import { IoIosReturnRight } from "react-icons/io";

function UI() {
  const toggleText = (e) => {
    console.log("Comment List ToggleText");
  };

  return (
    <Button
      _text={{ color: "gray.400", fontSize: "12" }}
      p="0"
      bgColor="transparent"
      leftIcon={<IoIosReturnRight size="16" />}
      onPress={toggleText}
    >
      <Text>Xem câu trả lời (1)</Text>
    </Button>
  );
}
export default UI;
