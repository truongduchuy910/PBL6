import React from "react";
import { Container } from "native-base";
import { PostItemDetail } from "../ui/Post";

export default function Post({ navigation }) {
  return (
    <Container w="container.lg" margin="auto" mt="16" maxW="100%" px="2">
      <PostItemDetail />
    </Container>
  );
}
