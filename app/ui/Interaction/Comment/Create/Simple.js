import React, { useState } from "react";
import { HStack, Box, Image, Input } from "native-base";
import Controller  from "./Controller";

function UI({ loading, error, on, whereInteractiveID }) {
  const clickCreate = () => {
    on({
      variables: {
        data: {
          content: userInput,
          interactive: { connect: { id: whereInteractiveID } },
        },
      },
    });
  };

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
    clickCreate();
    setUserInput("");
  };

  return (
    <Box mx="auto" w="full">
      <HStack space="2" display="flex" flexDirection="row" w="full">
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
            rounded="8"
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
export default function InteractionCommentCreateSimple(props) {
  return <Controller {...props} UI={UI} />;
}
