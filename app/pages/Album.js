import React from "react";
import { Container } from "native-base";
import { AlbumListSimple } from "../ui/Album";

export default function NewPost({ navigation }) {
  return (
    <Container w="container.lg" margin="auto" mt="16" maxW="100%" px="2">
      <AlbumListSimple />
    </Container>
  );
}
