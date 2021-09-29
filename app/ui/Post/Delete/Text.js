import React from "react";
import { Button } from "native-base";
import { FaRegTrashAlt } from "react-icons/fa";

function UI() {
  const toggleText = (e) => {
    console.log("Post Delete Text");
  };

  return (
    <Button
      _text={{ color: "gray.400", fontSize: "12", fontWeight: "600" }}
      p="3"
      py="1.5"
      bgColor="transparrent"
      onPress={toggleText}
      leftIcon={<FaRegTrashAlt color="#22c55e" fontSize="15" />}
    >
      Xoá bài viết
    </Button>
  );
}
export default UI;
