import React, { Fragment, useContext } from "react";
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
import { FooterSimple } from "../ui/Footer";
import { UserListCount } from "../ui/User";
import { AuthContext } from "../ui/Provider/Native";
export default function EarlyAccess({ navigation }) {
  const { loading, error, user } = useContext(AuthContext);
  return (
    <Fragment>
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
          <Heading
            fontSize={["54", "80"]}
            color="green.500"
            my="2"
            textAlign="center"
          >
            SẮP RA MẮT
          </Heading>
          <Box>
            <HStack justifyContent="center" mb="8">
              <Text fontSize="18" color="gray.500" mr={3}>
                Số người đăng ký:
              </Text>
              <Box fontSize="18" fontWeight="600">
                <UserListCount />
              </Box>
            </HStack>
            {!user && (
              <HStack justifyContent="center">
                <Text>Hãy </Text>
                <Link to={{ screen: "signup" }}>
                  <Text color="green.500" textDecoration="none">
                    đăng ký
                  </Text>
                </Link>
                <Text> một tài khoản để giữ chỗ </Text>
              </HStack>
            )}
          </Box>
        </VStack>
      </Container>
      <FooterSimple />
    </Fragment>
  );
}
