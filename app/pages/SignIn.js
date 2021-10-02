import React from "react";
import { Container } from "native-base";
import { UserSignInSimple } from "../ui/User";
export default function SignIn({ navigation }) {
  return (
    <Container w="container.md" margin="auto">
      <UserSignInSimple navigation={navigation} />
    </Container>
  );
}
