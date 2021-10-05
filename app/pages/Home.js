import React from "react";
import { Container, HStack, Box, Flex } from "native-base";
import {
  UserAuthShort,
  UserSignOutButton,
  UserListSuggestFixed,
} from "../ui/User";
import { PostListSimple, PostCreateButton } from "../ui/Post";

export default function Home({ navigation }) {
  return (
    <Container w="container.md" mx="auto" mt="16">
      <Flex w="full" mx={["auto", "auto", "auto", "0"]} direction="row">
        <Box flex={8}>
          <PostCreateButton />
          <PostListSimple />
        </Box>
        <Box flex={4}>
          <Box
            w="full"
            px={4}
            position="sticky"
            top="64px"
            display={["none", "none", "none", "block"]}
          >
            <UserListSuggestFixed />
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
