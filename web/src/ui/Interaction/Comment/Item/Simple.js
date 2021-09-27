import { useState } from "react";
import { VStack, HStack, Box, Image, Text } from "native-base";

function UI() {
  return (
    <Box maxW="600" mx="auto" w="100%">
      <VStack>
        <HStack space="2" display="flex" flexDirection="row" w="100%">
          <Image
            source={{
              uri:
                "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632719776/120660089_393393651679331_1736612289947580072_n_zxf7cs.jpg",
            }}
            alt="Alternate Text"
            size="8"
            rounded="100"
          />

          <VStack flex="1">
            <Box bgColor="gray.50" rounded="8" px="3" py="2">
              <Text color="gray.900" fontWeight="600" fontSize="14">
                Trần Ngọc Huy
              </Text>
              <Text color="gray.700" lineHeight="18">
                Đây là một địa điểm tuyệt vời cho các bạn sống ảo. Hãy liên hệ
                với mình để biết thêm thông tin chi tiết.
              </Text>
            </Box>
            <Box ml="3" mt="2">
              <Text color="gray.400" fontSize="11">
                14 giờ
              </Text>
            </Box>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
}
export default UI;
