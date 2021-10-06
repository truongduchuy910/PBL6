import React from "react";
import { Container } from "native-base";
import { UserSignInSimple } from "../ui/User";
export default function SignIn({ navigation }) {
  return (
    <Container w="container.lg" m="auto" mt="0" maxW="90%">
      <UserSignInSimple navigation={navigation} />
    </Container>
  );
}
