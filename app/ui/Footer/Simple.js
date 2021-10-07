import React from "react";
import {
  Container,
  HStack,
  Box,
  Image,
  Text,
  VStack,
  Stack,
} from "native-base";
import { Link } from "@react-navigation/native";

function UI() {
  return (
    <Box
      w="full"
      borderTopWidth="1"
      borderColor="gray.100"
      py={["4", "4"]}
      mt="10"
    >
      <Container w="container.lg" mx="auto" maxW="full" px="2">
        <HStack
          borderBottomWidth="1"
          borderColor="gray.100"
          pb="3"
          mb="3"
          w="100%"
        >
          <Text color="gray.500" fontSize="13">
            Tiếng Việt. English. 中文 (Zhōngwén). 汉语, 漢語, 日本語 (にほんご).
            한국어, français, langue française. русский
          </Text>
        </HStack>
        <Stack
          justifyContent="space-between"
          w="100%"
          direction={["column", "row"]}
        >
          <VStack space="0.5">
            <Text color="gray.500" fontSize="13">
              Kilogram - Mạng xã hội sinh viên.
            </Text>
            <Text color="gray.500" fontSize="13">
              Phiên bản v1.0-beta.0
            </Text>
          </VStack>
          <VStack space="0.5">
            <Text color="gray.500" fontSize="13" textAlign="right">
              Đồ án công nghệ phần mềm PBL6.
            </Text>
            <Text color="gray.500" fontSize="13" textAlign="right">
              Đại học Bách Khoa - Đại học Đà Nẵng.
            </Text>
          </VStack>
        </Stack>
      </Container>
    </Box>
  );
}
export default UI;
