import React from "react";
import { Container, Box, Flex, Text } from "native-base";
import { UserListSuggestFixed } from "../ui/User";
import { PostListSearch } from "../ui/Post";
import { UserListSearch } from "../ui/User";

export default function Result({ navigation }) {
  return (
    <Container
      w="container.lg"
      margin="auto"
      mt="16"
      maxW="full"
      px={["0", "2"]}
    >
      <Flex w="full" direction="row">
        <Box
          flex={[1, 1, 1, 9]}
          maxW="680px"
          mx={["auto", "auto", "auto", "0"]}
        >
          <Box w="full" mt="5" mb="2" px="0.5%">
            <Text fontSize="18" fontWeight="600" color="gray.700">
              Kết quả tìm kiếm cho "Trần Ngọc Huy"
            </Text>
          </Box>
          <UserListSearch />
          <PostListSearch />
        </Box>
        <Box flex={[0, 0, 0, 3]} display={["none", "none", "none", "block"]}>
          <Box w="full" py="2" pl="6" pr="2" position="sticky" top="64px">
            <UserListSuggestFixed />
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
