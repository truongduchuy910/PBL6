import React from "react";
import ListToggleText from "../List/ToggleText";
import CreateText from "../Create/Text";
import DeleteText from "../Delete/Text";
import {
  InteractionReactionCreateText,
  InteractionReactionListTextWithCount,
} from "../../Reaction";
import { VStack, HStack, Box, Image, Text } from "native-base";
import { CommenItemController } from "./Controller";

function UI({loading, error, comment}) {
  return (
    <Box mx="auto" my="2" w="full">
      <VStack>
        <HStack space="2" display="flex" flexDirection="row" w="full">
          <Image
            source={{
              uri:
                "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632719776/120660089_393393651679331_1736612289947580072_n_zxf7cs.jpg",
            }}
            alt="Profile image"
            size="8"
            rounded="100"
          />
          <VStack flex="1">
            <HStack>
              <Box bgColor="gray.50" rounded="8" px="3" py="2" flex="1">
                <Text color="gray.900" fontWeight="600" fontSize="14">
                  Trần Ngọc Huy
                </Text>
                <Text color="gray.700" lineHeight="18">
                  {comment.content}
                </Text>
              </Box>
            </HStack>
            <HStack ml="3" mt="1" space="3">
              <InteractionReactionCreateText />
              <CreateText />
              <DeleteText />
              <InteractionReactionListTextWithCount />
              <Text color="gray.400" fontSize="12">
                14 giờ
              </Text>
            </HStack>

            {/* Check if this comment has reponses */}
            <HStack ml="3" mt="1">
              <ListToggleText />
            </HStack>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
}
export default function InteractionCommentItemSimple(props){
  return <CommenItemController {...props} UI={UI}/>

};
