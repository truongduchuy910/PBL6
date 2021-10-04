import React, { useState } from "react";
import { getHeaderTitle } from "@react-navigation/elements";
import {
  Container,
  HStack,
  Icon,
  IconButton,
  Box,
  Heading,
  Image,
  Button,
} from "native-base";

import { AiOutlineMore, AiOutlineArrowLeft } from "react-icons/ai";
import { BsFillCaretDownFill } from "react-icons/bs";
import { HiBell } from "react-icons/hi";
import { Link } from "@react-navigation/native";
import { UserAuthShort } from "../User";
export default function HeaderSimple({ navigation, route, options, back }) {
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
    // <Container w="container.md" margin="auto">
    //   <Box
    //     safeAreaTop
    //     shadow="lg"
    //     py={2}
    //     borderBottomWidth={1}
    //     boxSize="full"
    //     borderColor="gray.400"
    //   >
    //     <HStack justifyContent="space-between" alignItems="center">
    //       {back ? (
    //         <IconButton
    //           icon={<Icon as={<AiOutlineArrowLeft />} size="sm" />}
    //           onPress={pressBack}
    //         />
    //       ) : (
    //         <Link to={{ screen: "home" }}>
    //           <Image
    //             source={{
    //               uri:
    //                 "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632635691/favicon_gc42jc.svg",
    //             }}
    //             alt="Alternate Text"
    //             size="xs"
    //           />
    //         </Link>
    //       )}
    //       <Heading>{title}</Heading>
    //       <UserAuthShort navigation={navigation} />
    //       <IconButton icon={<Icon as={<AiOutlineMore />} size="sm" />} />
    //     </HStack>
    //   </Box>
    // </Container>
    <Container
      w="100%"
      maxW="100%"
      position="fixed"
      borderBottomWidth="1"
      borderColor="gray.100"
      bgColor="white"
    >
      <Container w="container.lg" mx="auto" maxW="100%" px="2">
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
            <HStack alignItems="center" space="2">
              <UserAuthShort navigation={navigation} />
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
          </HStack>
        </Box>
      </Container>
    </Container>
  );
}
