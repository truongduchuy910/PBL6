import React from "react";
import { Button, Box } from "native-base";
import { FaRegTrashAlt } from "react-icons/fa";
import { PostListGrid } from "../../Post";

function UI() {
  return (
    <Box maxW="900" mx="auto" my="2" w="100%" py="4">
      {/* Personal Detail */}
      {/* Personal Post */}
      <PostListGrid />
    </Box>
  );
}
export default UI;
