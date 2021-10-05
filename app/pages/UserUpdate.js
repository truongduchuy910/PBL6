import React from "react";
import { Container } from "native-base";
import { UserUpdateSimple } from "../ui/User";

export default function UserUpdate({ navigation }) {
  return (
    <Container w="container.lg" margin="auto" mt="16" maxW="100%" px="2">
      <UserUpdateSimple />
    </Container>
  );
}
