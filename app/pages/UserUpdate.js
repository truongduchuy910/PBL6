import React from "react";
import { Container } from "native-base";
import { UserUpdateSimple } from "../ui/User";

export default function UserUpdate({ navigation }) {
  return (
    <Container w="container.md" margin="auto" mt="16" maxw="full" px="2">
      <UserUpdateSimple />
    </Container>
  );
}
