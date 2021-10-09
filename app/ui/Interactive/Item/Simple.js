import { Box } from "native-base";
import {
  InteractionCommentCreateSimple,
  InteractionCommentListSimple,
} from "../Comment";

function UI({ interactive }) {
  return (
    <Box w="full">
      <InteractionCommentCreateSimple
        my="10"
        where={{ interactive: { id: interactive.id } }}
      />
      <InteractionCommentListSimple
        where={{ interactive: { id: interactive.id } }}
      />
    </Box>
  );
}
export default function InteractiveItemSimple(props) {
  return <Controller {...props} UI={UI} />;
}
