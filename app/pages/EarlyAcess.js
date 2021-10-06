import React from "react";
import {
  Container,
  Heading,
  Image,
  Box,
  Text,
  VStack,
  HStack,
} from "native-base";
import { Link } from "@react-navigation/native";

export default function EarlyAccess({ navigation }) {
  return (
    <Container w="container.lg" margin="auto" mt="6" maxW="full" px="2">
      <VStack
        maxW="500"
        w="full"
        mx="auto"
        mt="24"
        alignItems="center"
        space="6"
      >
        <Image
          source={{
            uri:
              "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632635691/favicon_gc42jc.svg",
          }}
          alt="Alternate Text"
          size="lg"
          mx="auto"
        />
        <VStack alignItems="center">
          <Text
            fontSize="20"
            fontWeight="600"
            mb="2"
            textAlign="center"
            maxW={["80%", "100%"]}
          >
            KILOGRAM - MẠNG XÃ HỘI DÀNH CHO SINH VIÊN
          </Text>
          <Text color="gray.500" fontSize="16">
            Được phát triển bởi sinh viên ĐH BKĐN
          </Text>
        </VStack>
        <Heading fontSize={["54", "80"]} color="green.600" my="4">
          SẮP RA MẮT
        </Heading>
        <Box>
          <HStack justifyContent="center">
            <Text>Hãy </Text>
            <Link to={{ screen: "signup" }}>
              <Text color="green.500" textDecoration="none">
                đăng ký
              </Text>
            </Link>
            <Text> một tài khoản để giữ chỗ </Text>
          </HStack>
          <Text textAlign="center" mt="1">
            Cảm ơn các bạn đã quan tâm!
          </Text>
        </Box>
      </VStack>
    </Container>
  );
}
