import React from "react";
import { Container } from "native-base";
import { UserItemDetail } from "../ui/User";

export default function User({ navigation }) {
  return (
    <Container maxW="conainer.lg">
      <UserItemDetail />
    </Container>
  );
}
