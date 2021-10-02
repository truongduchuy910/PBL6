import React from "react";
import { Container } from "native-base";
import { UserAuthShort, UserSignOutButton } from "../ui/User";

export default function Home({ navigation }) {
  return (
    <Container maxW="conainer.lg">
      <UserAuthShort navigation={navigation} />
      <UserSignOutButton navigation={navigation} />
    </Container>
  );
}
