import React from "react";
import { Container } from "native-base";
import { PostItemDetail } from "../ui/Post";

export default function Post({ navigation }) {
  return (
    <Container
      w="container.lg"
      margin="auto"
      mt="64px"
      maxW="full"
      px={["0", "8px"]}
    >
      <PostItemDetail />
    </Container>
  );
}
