import React from "react";
import { Container } from "native-base";
import { UserUpdatePassword } from "../ui/User";

export default function UserUpdate({ navigation }) {
  return (
    <Container w="container.lg" margin="auto" mt="16" maxW="full" px="3">
      <UserUpdatePassword />
    </Container>
  );
}
