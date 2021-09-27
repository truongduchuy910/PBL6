import React from "react";
import { UserAuthShort } from "@itoa/ui/User";
import { UserCommentItemSimple } from "@itoa/ui/Interaction/Comment";
import { UserCommentCreateSimple } from "@itoa/ui/Interaction/Comment";
import { Container } from "native-base";
export default function Home() {
  return (
    <Container maxW="conainer.lg">
      {/* <UserAuthShort /> */}
      <UserCommentCreateSimple />
      <UserCommentItemSimple />
    </Container>
  );
}
