import { useState } from "react";
import { HStack, Box, Image, Input, Text } from "native-base";

function UI() {
  const [userInput, setUserInput] = useState("");

  const userInputChangeHandle = (e) => {
    setUserInput(e.target.value);
  };

  const userCommentHandle = (e) => {
    const value = e.target.value;
    if (!value.trim().length) {
      return;
    }
    console.log(value);
    setUserInput("");
  };

  return (
    <Box maxW="600" mx="auto" w="100%">
      <HStack space="2" display="flex" flexDirection="row" w="100%">
        <Image
          source={{
            uri:
              "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632719777/200960556_1184264562021915_3530694902678239694_n_u7mk8s.jpg",
          }}
          alt="Alternate Text"
          size="8"
          mx="auto"
          rounded="100"
        />
        <Box flex="1">
          <Input
            name="comment"
            type="text"
            bgColor="white"
            px={2}
            py={1.5}
            fontSize={14}
            borderWidth={1}
            borderColor="gray.100"
            rounded={6}
            _focus={{
              borderColor: "gray.100",
            }}
            placeholder="Viết bình luận ..."
            value={userInput}
            onChange={userInputChangeHandle}
            onSubmitEditing={userCommentHandle}
          />
        </Box>
      </HStack>
    </Box>
  );
}
export default UI;
