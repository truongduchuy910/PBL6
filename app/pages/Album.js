import React from "react";
import { Container } from "native-base";
import { AlbumListSimple } from "../ui/Album";

export default function NewPost({ navigation }) {
  return (
    <Container w="container.md" margin="auto" mt="16" maxw="full" px="2">
      <AlbumListSimple />
    </Container>
  );
}
