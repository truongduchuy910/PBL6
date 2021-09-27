import React from "react";
import { UserAuthShort } from "@itoa/ui/User";
import { PostItemSimple } from "@itoa/ui/Post";
import { Container } from "native-base";
export default function Home() {
  return (
    <Container maxW="conainer.lg">
      {/* <UserAuthShort /> */}
      <PostItemSimple />
    </Container>
  );
}
