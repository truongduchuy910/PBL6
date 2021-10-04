import React from "react";
import { getHeaderTitle } from "@react-navigation/elements";
import {
  Container,
  HStack,
  Icon,
  IconButton,
  Box,
  Heading,
  Image,
} from "native-base";

import { AiOutlineMore, AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "@react-navigation/native";
import { UserAuthShort } from "../User";
export default function HeaderSimple({ navigation, route, options, back }) {
  const title = getHeaderTitle(options, route.name);
  const pressBack = navigation.goBack;
  return (
    <Container w="container.md" margin="auto">
      <Box
        safeAreaTop
        shadow="lg"
        py={2}
        borderBottomWidth={1}
        boxSize="full"
        borderColor="gray.400"
      >
        <HStack justifyContent="space-between" alignItems="center">
          {back ? (
            <IconButton
              icon={<Icon as={<AiOutlineArrowLeft />} size="sm" />}
              onPress={pressBack}
            />
          ) : (
            <Link to={{ screen: "home" }}>
              <Image
                source={{
                  uri:
                    "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632635691/favicon_gc42jc.svg",
                }}
                alt="Alternate Text"
                size="xs"
              />
            </Link>
          )}
          <Heading>{title}</Heading>
          <UserAuthShort navigation={navigation} />
          <IconButton icon={<Icon as={<AiOutlineMore />} size="sm" />} />
        </HStack>
      </Box>
    </Container>
  );
}
