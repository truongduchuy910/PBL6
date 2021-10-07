import React from "react";
import { Button } from "native-base";

function UI() {
  const clickHandler = (e) => {
    console.log("User Relationship Delete Button");
  };

  return (
    <Button
      _text={{ color: "gray.400", fontSize: ["13", "14"], fontWeight: "600" }}
      p="8px"
      rounded="8px"
      w="full"
      bgColor="gray.100"
      onPress={clickHandler}
    >
      Xoá lời mời
    </Button>
  );
}
export default UI;

// A đã tạo Relationship tới B, B chưa đồng ý (Relationship đang inActive)
// B vào tường A thấy nút "xóa lời mời"
