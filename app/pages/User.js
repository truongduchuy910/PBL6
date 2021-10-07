import React from "react";
import { Container } from "native-base";
import { UserItemDetail } from "../ui/User";

export default function User({ navigation }) {
  return (
    <Container w="container.lg" margin="auto" mt="16" maxW="full" px="2">
      <UserItemDetail />
    </Container>
  );
}
