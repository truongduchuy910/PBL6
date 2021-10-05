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
function UI({ user, navigation, route, options, back }) {
  const title = getHeaderTitle(options, route.name);
  const pressBack = navigation.goBack;

  // const [isOpenNotification, setIsOpenNotification] = useState(false);
  // const [isOpenOptions, setIsOpenOptions] = useState(false);

  const notificationHandler = () => {
    console.log("Click on notification");
    // setIsOpenNotification((prev) => !prev);
  };

  const optionsHandler = () => {
    console.log("Click on options");
    // setIsOpenOptions((prev) => !prev);
  };

  return (
    <Box
      w="full"
      position="fixed"
      borderBottomWidth="1"
      borderColor="gray.100"
      bgColor="white"
    >
      <Container w="container.md" mx="auto" maxw="full" px="2">
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
            {user ? (
              <HStack alignItems="center" space="2.5">
                <UserAuthShort navigation={navigation} />
                <NotificationListToggle />
                <Options navigation={navigation} />
              </HStack>
            ) : (
              <Text>Login first</Text>
            )}
            {/* <Button
                onPress={notificationHandler}
                rounded="100"
                bgColor="gray.100"
                p="2.5"
                _text={{ color: "gray.400", fontWeight: "600" }}
              >
                {isOpenNotification ? (
                  <HiBell color="#22c55e" />
                ) : (
                  <HiBell color="#a1a1aa" />
                )}
              </Button>
              <Button
                onPress={optionsHandler}
                rounded="100"
                bgColor="gray.100"
                p="2.5"
                _text={{ color: "gray.400", fontWeight: "600" }}
              >
                {isOpenOptions ? (
                  <BsFillCaretDownFill color="#22c55e" />
                ) : (
                  <BsFillCaretDownFill color="#a1a1aa" />
                )}
              </Button> */}
          </HStack>
        </Box>
      </Container>
    </Box>
  );
}
export default function HeaderSimple(props) {
  return <AuthController {...props} UI={UI} />;
}
