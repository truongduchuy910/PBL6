import React from "react";
import { Container } from "native-base";
import { UserListRequest } from "../ui/User";

export default function NewPost({ navigation }) {
  return (
    <Container w="container.md" margin="auto" mt="16" maxw="full" px="2">
      <UserListRequest />
    </Container>
  );
}
