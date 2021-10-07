import React, { Fragment, useState } from "react";
import { getHeaderTitle } from "@react-navigation/elements";
import { Container, HStack, Box, Image, Text } from "native-base";
import AuthController from "../User/Auth/Controller";
import { AiOutlineMore, AiOutlineArrowLeft } from "react-icons/ai";
import { BsFillCaretDownFill } from "react-icons/bs";
import { HiBell } from "react-icons/hi";
import { Link } from "@react-navigation/native";
import { UserAuthShort } from "../User";
import Options from "./Options";
import { NotificationListToggle } from "../Notification";
import HeadersSearch from "./Search";
function UI({ user, navigation, route, options, back }) {
  const title = getHeaderTitle(options, route.name);
  const pressBack = navigation.goBack;

  return (
    <Box
      w="full"
      position="fixed"
      borderBottomWidth="1"
      borderColor="gray.100"
      bgColor="white"
    >
      <Container w="container.lg" mx="auto" maxW="full" px="2">
        <Box safeAreaTop pt="3" pb="2" boxSize="full">
          <HStack justifyContent="space-between" alignItems="center">
            <Link to={{ screen: "home" }}>
              <Image
                source={{
                  uri:
                    "https://res.cloudinary.com/cloudinaryassets/image/upload/v1633232418/logo-header_mc8fhl.svg",
                }}
                alt="Logo"
                w="150px"
                h="40px"
              />
            </Link>
            {user && <HeadersSearch />}
            {user && (
              <HStack alignItems="center" space="2.5">
                <Box display={["none", "block"]}>
                  <UserAuthShort navigation={navigation} />
                </Box>
                <NotificationListToggle />
                <Options navigation={navigation} />
              </HStack>
            )}
          </HStack>
        </Box>
      </Container>
    </Box>
  );
}
export default function HeaderSimple(props) {
  return <AuthController {...props} UI={UI} />;
}
