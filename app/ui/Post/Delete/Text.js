import React from "react";
import { Button } from "native-base";
import { FaRegTrashAlt } from "react-icons/fa";
import PostDelete from "./Controller";

function UI({loading, error, onClickDetete, postDeleted}) {
  const toggleText = (e) => {
    console.log("Post Delete Text");
  };
  const clickDetete = (e) => {
    onClickDetete();
  };

  return loading ? (
    <Text>...</Text>
  ) : (
    <Button
      _text={{ color: "gray.400", fontSize: "12", fontWeight: "600" }}
      p="3"
      py="1.5"
      bgColor="transparrent"
      onPress={clickDetete}
      leftIcon={<FaRegTrashAlt color="#22c55e" fontSize="15" />}
    >
      Xoá bài viết
    </Button>
  );
}
export default function PostDeleteText(props) {
  return <PostDelete {...props} UI={UI} />;
}