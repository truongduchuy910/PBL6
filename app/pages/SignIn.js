import React from "react";
import { Container } from "native-base";
import { UserSignInSimple } from "../ui/User";
export default function SignIn({ navigation }) {
  return (
    <Container maxW="conainer.lg">
      <UserSignInSimple navigation={navigation} />
    </Container>
  );
}
