import React from "react";
import { Container } from "native-base";
// import { UserAuthShort, UserSignOutButton } from "../ui/User";
import { PostListSimple } from "../ui/Post";

export default function Home({ navigation }) {
  return (
    <Container w="container.md" margin="auto">
      <PostListSimple />
    </Container>
  );
}
