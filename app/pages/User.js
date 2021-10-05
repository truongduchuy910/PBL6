import React from "react";
import { Container } from "native-base";
import { UserItemDetail } from "../ui/User";

export default function User({ navigation }) {
  return (
    <Container w="container.md" margin="auto" mt="16" maxw="full" px="2">
      <UserItemDetail />
    </Container>
  );
}
