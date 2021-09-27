import React from "react";
import { Box, HStack } from "native-base";
import {
  InteractionCommentCreateSimple,
  InteractionCommentListSimple,
  InteractionCommentListToggleButton,
} from "../../../ui/Interaction/Comment";
import { InteractionReactionCreateButton } from "../../../ui/Interaction/Reaction";

function UI() {
  return (
    <Box maxW="600" mx="auto" w="100%">
      <HStack
        w="100%"
        my="3"
        borderBottomWidth="1"
        borderBottomColor="gray.100"
        borderTopWidth="1"
        borderTopColor="gray.100"
      >
        <Box w="50%">
          <InteractionReactionCreateButton />
        </Box>
        <Box w="50%">
          <InteractionCommentListToggleButton />
        </Box>
      </HStack>
      <InteractionCommentCreateSimple my="10" />
      <InteractionCommentListSimple />
    </Box>
  );
}
export default UI;
