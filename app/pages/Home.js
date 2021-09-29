import React from "react";
import { Container } from "native-base";
import { UserSignOutButton } from "../ui/User";

export default function Home({ navigation }) {
  return (
    <Container>
      <UserSignOutButton navigation={navigation} />
    </Container>
  );
}
