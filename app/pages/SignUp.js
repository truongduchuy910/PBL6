import React from "react";
import { Container } from "native-base";
import { UserSignUpSimple } from "../ui/User";
export default function SignIn({ navigation }) {
  return (
    <Container w="container.md" m="auto" mt="0">
      <UserSignUpSimple navigation={navigation} />
    </Container>
  );
}
