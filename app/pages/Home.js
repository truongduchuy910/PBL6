import React from "react";
import { Container, HStack, Box } from "native-base";
import {
  UserAuthShort,
  UserSignOutButton,
  UserListSuggestFixed,
} from "../ui/User";
import { PostListSimple, PostCreateButton } from "../ui/Post";

export default function Home({ navigation }) {
  return (
    <Container w="container.lg" m="auto" mt="16" px="2" maxW="100%">
      <Container maxW="100%" mx={["auto", "auto", "auto", "0"]}>
        <PostCreateButton />
        <PostListSimple />
      </Container>
      <Container
        maxW="100%"
        position="absolute"
        right="2"
        top="4"
        w="270"
        display={["none", "none", "none", "block"]}
      >
        <Container position="fixed">
          <UserListSuggestFixed />
        </Container>
      </Container>
    </Container>
  );
}
