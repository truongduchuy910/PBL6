import React from "react";
import { Container } from "native-base";
import { PostCreateSimple } from "../ui/Post";

export default function NewPost({ navigation }) {
  return (
    <Container w="container.md" margin="auto" mt="16" maxw="full" px="2">
      <PostCreateSimple />
    </Container>
  );
}
