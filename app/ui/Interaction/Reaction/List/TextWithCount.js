import React from "react";
import { Text } from "native-base";

function UI({loading, error, reactionsList}) {
  const countAllReactions = reactionsList.length;
  return loading ? (
    <Text>...</Text>
  ) : (
    <Text color="gray.400" fontSize="12" fontWeight="600">
      {countAllReactions} thích
    </Text>
  );
}
export default function InteractionReactionListTextWithCount(props) {
  <UI {...props} UI={UI} />;
}
