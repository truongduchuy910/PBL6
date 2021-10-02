import React from "react";
import { VStack } from "native-base";
import PostItemSimple from "../Item/Simple";

function UI() {
  return (
    <VStack maxW="600" w="100%" mx="auto">
      {/* Map list posts */}
      <PostItemSimple />
      <PostItemSimple />
    </VStack>
  );
}
export default UI;
