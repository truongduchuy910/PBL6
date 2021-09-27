import React, { Fragment } from "react";
import InteractionCommentItemSimple from "../Item/Simple";

function UI() {
  // Map list comments => InteractionCommentItemSimple
  return (
    <Fragment>
      <InteractionCommentItemSimple />
      <InteractionCommentItemSimple />
    </Fragment>
  );
}
export default UI;
