import React from "react";
import { Container } from "native-base";
import { PostItemDetail } from "../ui/Post";

export default function Post({ navigation }) {
  return (
    <Container maxW="conainer.lg">
      <PostItemDetail />
    </Container>
  );
}
