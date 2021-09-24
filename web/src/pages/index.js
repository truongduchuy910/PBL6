import React from "react";
import { UserAuthShort } from "@itoa/ui/User";
import { Container } from "native-base";
export default function Home() {
  return (
    <Container maxW="lg">
      <UserAuthShort />
    </Container>
  );
}
