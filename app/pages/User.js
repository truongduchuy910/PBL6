import React from "react";
import { Container } from "native-base";
import { UserItemDetail } from "../ui/User";

export default function User({ navigation }) {
  return (
    <Container w="container.md" margin="auto">
      <UserItemDetail />
    </Container>
  );
}
