import { useState, Fragment } from "react";
import { Button } from "native-base";
import { FaRegHeart, FaHeart } from "react-icons/fa";

function UI() {
  const [isLike, setIsLike] = useState(false);

  const likeHandle = (e) => {
    setIsLike((prev) => !prev);
    console.log("Reaction Create Button");
  };

  return (
    <Fragment>
      {isLike && (
        <Button
          _text={{ color: "red.600", fontSize: "14" }}
          p="2"
          m="1"
          bgColor="transparent"
          leftIcon={<FaHeart color="#dc2626" size="17" />}
          _hover={{ bgColor: "gray.100" }}
          onPress={likeHandle}
        >
          Thích
        </Button>
      )}
      {!isLike && (
        <Button
          _text={{ color: "gray.400", fontSize: "14" }}
          p="2"
          m="1"
          bgColor="transparent"
          leftIcon={<FaRegHeart color="#a1a1aa" size="17" />}
          _hover={{ bgColor: "gray.100" }}
          onPress={likeHandle}
        >
          Thích
        </Button>
      )}
    </Fragment>
  );
}
export default UI;
