import React from "react";
import { Container } from "native-base";
import { UserItemDetail } from "../ui/User";
import { useRoute } from "@react-navigation/core";

export default function User({ navigation }) {
  const { params = {} } = useRoute();
  const { id } = params;
  return (
    <Container w="container.lg" margin="auto" mt="64px" maxW="full" px="8px">
      <UserItemDetail id={id} />
    </Container>
  );
}
