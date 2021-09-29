import React from "react";
import { HStack, Box, Image, Text, Button } from "native-base";

function UI() {
  const createHandler = () => {};

  return (
    <Box maxW="600" mx="auto" w="100%">
      <HStack
        space="4"
        alignItems="center"
        w="100%"
        p="2"
        px="3"
        my="1.5"
        rounded="12"
        borderWidth="1"
        borderColor="gray.100"
      >
        <Image
          source={{
            uri:
              "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632719777/200960556_1184264562021915_3530694902678239694_n_u7mk8s.jpg",
          }}
          alt="Profile image"
          size="8"
          mx="auto"
          rounded="100"
        />
        <Box flex="1">
          <Text color="gray.500" fontSize="15">
            Chia sẻ kỉ niệm du lịch của bạn
          </Text>
        </Box>
        <Button
          bgColor="green.500"
          _text={{ color: "white", fontSize: "14", fontWeight: "600" }}
          rounded="8"
          py="2"
          px="4"
          onPress={createHandler}
        >
          THÊM BÀI VIẾT
        </Button>
      </HStack>
    </Box>
  );
}
export default UI;
