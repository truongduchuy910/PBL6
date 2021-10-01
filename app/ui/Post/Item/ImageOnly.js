import React from "react";
import { Button, Box, Image } from "native-base";

function UI({ item }) {
  const singlePostHandler = () => {
    console.log(item.id, item.link, item.thumbnailUrl);
  };

  return (
    <Box w="100%" position="relative">
      <Image
        source={{
          uri: item.thumbnailUrl,
        }}
        alt="Profile Image"
        backgroundSize="cover"
        flex="1"
        p="50%"
      />
      <Button
        onPress={singlePostHandler}
        position="absolute"
        w="100%"
        h="100%"
        bgColor="transparent"
      ></Button>
    </Box>
  );
}
export default UI;
