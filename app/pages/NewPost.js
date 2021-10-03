import React from "react";
import { Container } from "native-base";
import { PostCreateSimple } from "../ui/Post";

export default function NewPost({ navigation }) {
  return (
    <Container w="container.lg" margin="auto" mt="16" maxW="100%" px="2">
      <PostCreateSimple />
    </Container>
  );
}
