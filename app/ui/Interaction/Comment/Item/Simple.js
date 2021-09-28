import React from "react";
import ListToggleText from "../List/ToggleText";
import CreateText from "../Create/Text";
import {
  InteractionReactionCreateText,
  InteractionReactionListTextWithCount,
} from "../../Reaction";

import { VStack, HStack, Box, Image, Text } from "native-base";

function UI() {
  return (
    <Box maxW="600" mx="auto" my="2" w="100%">
      <VStack>
        <HStack space="2" display="flex" flexDirection="row" w="100%">
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
            <Box bgColor="gray.50" rounded="8" px="3" py="2">
              <Text color="gray.900" fontWeight="600" fontSize="14">
                Trần Ngọc Huy
              </Text>
              <Text color="gray.700" lineHeight="18">
                Đây là một địa điểm tuyệt vời cho các bạn sống ảo.
              </Text>
            </Box>
            <HStack ml="3" mt="1" space="4">
              <InteractionReactionCreateText />
              <CreateText />
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
export default UI;
