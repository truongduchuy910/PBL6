import React from "react";
import { HStack, Text } from "native-base";
import { FaHeart } from "react-icons/fa";

function UI() {
  const countAllReactions = reactionsList.allInteractiveComments.length;
  return loading ? (
    <Text>...</Text>
  ) : (
    <HStack alignItems="center" space="1">
      <FaHeart color="#22c55e" size="16" />
      <Text color="gray.800" fontSize="14" fontWeight="500">
        {countAllReactions} thích
      </Text>
    </HStack>
  );
}
export default function InteractionReactionListIconTextWithCount(props) {
  <UI {...props} UI={UI} />;
}
