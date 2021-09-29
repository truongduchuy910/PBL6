import React from "react";
import { HStack, Text } from "native-base";
import { FaHeart } from "react-icons/fa";

function UI() {
  return (
    <HStack alignItems="center" space="1">
      <FaHeart color="#dc2626" size="16" />
      <Text color="gray.800" fontSize="14" fontWeight="500">
        1,232 lượt thích
      </Text>
    </HStack>
  );
}
export default UI;
