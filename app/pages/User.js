import React from "react";
import { Container } from "native-base";
import { UserItemDetail } from "../ui/User";

export default function User({ navigation }) {
  return (
    <Container w="container.lg" margin="auto" mt="64px" maxW="full" px="8px">
      <UserItemDetail />
    </Container>
  );
}
