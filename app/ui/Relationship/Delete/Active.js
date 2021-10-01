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
      Xoá bạn bè
    </Button>
  );
}
export default UI;

// A đã tạo Relationship tới B, B đã đồng ý (cập nhật trạng thái Relationship là active)
// A vào tường của B sẽ thấy nút "xóa bạn"
