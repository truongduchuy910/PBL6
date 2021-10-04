import React from "react";
import { Container } from "native-base";
import { UserListRequest } from "../ui/User";

export default function NewPost({ navigation }) {
  return (
    <Container w="container.lg" margin="auto" mt="16" maxW="100%" px="2">
      <UserListRequest />
    </Container>
  );
}
