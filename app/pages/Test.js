import React, { Fragment } from "react";
import { Container } from "native-base";
import { PostItemDetail } from "../ui/Post";
import { PostListSimple } from "../ui/Post";
import { InteractionCommentListSimple } from "../ui/Interactive/Comment";
export default function Test({ navigation }) {
  return (
    <Fragment>
      <Container>
      <InteractionCommentListSimple />
      </Container>
    </Fragment>
  );
}
