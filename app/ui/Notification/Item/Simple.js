import React from "react";
import { Box, Button, Text, Image, HStack } from "native-base";
import { Link } from "@react-navigation/native";

function UI(props) {
  return (
    <Button bgColor="white" onPress={props.notificationHandler}>
      <Link to={{ screen: "user" }}>
        <HStack
          space="3"
          display="flex"
          flexDirection="row"
          w="full"
          px="1"
          alignItems="flex-start"
          justifyContent="flex-start"
          position="relative"
          zIndex="1"
        >
          <Image
            source={{
              uri: props.item.imgUrl,
            }}
            alt="Profile image"
            size="10"
            rounded="100"
            mt="1"
          />
          <Box>
            <Text color="gray.900" fontWeight="600" fontSize="14">
              {props.item.user}
            </Text>
            <Text color="gray.900" fontSize="14">
              {props.item.content}
            </Text>
            <Text color="gray.400" fontSize="12">
              {props.item.time}
            </Text>
          </Box>
        </HStack>
      </Link>
    </Button>
  );
}
export default UI;
