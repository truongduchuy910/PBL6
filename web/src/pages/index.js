import React from "react";
import { UserAuthShort } from "@itoa/ui/User";
import { UserCommentSimple } from "@itoa/ui/Interaction/Comment";
import { Container } from "native-base";
export default function Home() {
  return (
    <Container maxW="conainer.lg">
      {/* <UserAuthShort /> */}
      <UserCommentSimple />
    </Container>
  );
}
