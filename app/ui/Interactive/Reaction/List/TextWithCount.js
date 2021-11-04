import React from "react";
import { Text } from "native-base";
import Controller from "./Controller";

function UI({ loading, error, allReactions, _allReactionsMeta }) {
  return loading ? (
    <Text>...</Text>
  ) : (
    <Text color="gray.400" fontSize="12" fontWeight="600">
      {_allReactionsMeta.count} lượt thích
    </Text>
  );
}
export default function InteractionReactionListTextWithCount(props) {
  return <Controller {...props} UI={UI} />;
}
