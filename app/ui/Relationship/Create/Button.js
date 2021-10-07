import React from "react";
import { Button } from "native-base";

function UI() {
  const clickHandler = (e) => {
    console.log("User Relationship Create Button");
  };

  return (
    <Button
      _text={{ color: "white", fontSize: ["13", "14"], fontWeight: "600" }}
      p="8px"
      rounded="8px"
      w="full"
      bgColor="green.500"
      onPress={clickHandler}
    >
      Thêm bạn bè
    </Button>
  );
}
export default UI;

// A và B chưa kết bạn với nhau, A gửi lời mời kết bạn cho B, hoặc ngược lại
