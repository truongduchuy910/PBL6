import React from "react";
import { Container } from "native-base";
import { UserListSuggest } from "../ui/User";

export default function NewPost({ navigation }) {
  return (
    <Container w="container.lg" margin="auto" mt="16" maxW="full" px="2">
      <UserListSuggest />
    </Container>
  );
}
