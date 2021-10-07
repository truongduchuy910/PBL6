import React from "react";
import { HStack, Box, Image, Text, Button } from "native-base";
import { Link } from "@react-navigation/native";

function UI() {
  const createHandler = () => {};

  return (
    <Box mt="2" mx="0" w="full">
      <HStack
        space="4"
        alignItems="center"
        w="full"
        p="3"
        my="2"
        rounded={["0", "12"]}
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
            Bạn đang nghĩ gì?
          </Text>
        </Box>
        <Link to={{ screen: "newpost" }}>
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
        </Link>
      </HStack>
    </Box>
  );
}
export default UI;
