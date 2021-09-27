import React, { Fragment, useRef, useState } from "react";
import UserSignIn from "./Controller";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Image,
} from "native-base";

function UI({ signIn, loading, error, user }) {
  /**
   *
   * @param {Event} e
   */

  const phoneRef = useRef();
  const passwordRef = useRef();
  const [inputError, setInputError] = useState(null);

  const submitSignIn = () => {
    setInputError(null);

    const phone = phoneRef.current.value;
    const password = passwordRef.current.value;

    if (phone.trim().length === 0 || password.trim().length === 0) {
      setInputError("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    if (!loading) signIn({ phone, password });
  };

  return (
    <Fragment>
      <Box w={420} p={10} mx="auto">
        <Image
          source={{
            uri:
              "https://res.cloudinary.com/cloudinaryassets/image/upload/v1632635691/favicon_gc42jc.svg",
          }}
          alt="Alternate Text"
          size="sm"
          mx="auto"
        />
        <Heading
          my={5}
          textAlign="center"
          fontWeight="400"
          fontSize={24}
          color="coolGray.800"
        >
          Đăng nhập để tiếp tục
        </Heading>
        <Box
          px={5}
          py={7}
          rounded={10}
          borderWidth={1}
          borderColor="gray.100"
          bg="gray.50"
        >
          <VStack space={3}>
            <FormControl>
              <FormControl.Label
                _text={{
                  color: "coolGray.800",
                  fontSize: "14",
                  fontWeight: 400,
                }}
              >
                Số điện thoại
              </FormControl.Label>
              <Input
                ref={phoneRef}
                name="phone"
                bgColor="white"
                px={2}
                py={1.5}
                fontSize={14}
                borderWidth={1}
                borderColor="gray.100"
                rounded={6}
                _focus={{
                  borderColor: "green.500",
                }}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label
                _text={{
                  color: "coolGray.800",
                  fontSize: "14",
                  fontWeight: 400,
                }}
              >
                Mật khẩu
              </FormControl.Label>
              <Input
                ref={passwordRef}
                name="password"
                type="password"
                bgColor="white"
                px={2}
                py={1.5}
                fontSize={14}
                borderWidth={1}
                borderColor="gray.100"
                rounded={6}
                _focus={{
                  borderColor: "green.500",
                }}
              />
            </FormControl>
            {!loading && (
              <Button
                onPress={submitSignIn}
                rounded={8}
                bgColor="green.500"
                p={2}
                _text={{ color: "white" }}
              >
                ĐĂNG NHẬP
              </Button>
            )}
            {loading && (
              <Button
                rounded={8}
                bgColor="green.500"
                p={2}
                _text={{ color: "white" }}
              >
                ĐANG TẢI ...
              </Button>
            )}
          </VStack>
        </Box>
        <Box mt={4} p={3.5} rounded={10} borderWidth={1} borderColor="gray.100">
          <HStack justifyContent="center">
            <Text>Bạn chưa có tài khoản? </Text>
            <Link
              _text={{
                color: "green.500",
                textDecoration: "none",
              }}
              href="#"
            >
              Tạo tài khoản
            </Link>
          </HStack>
        </Box>
        {error && (
          <Box
            mt={4}
            p={3.5}
            rounded={10}
            borderWidth={1}
            borderColor="red.500"
          >
            <Text textAlign="center" color="red.500">
              Sai số điện thoại hoặc mật khẩu
            </Text>
          </Box>
        )}
        {inputError && (
          <Box
            mt={4}
            p={3.5}
            rounded={10}
            borderWidth={1}
            borderColor="red.500"
          >
            <Text textAlign="center" color="red.500">
              {inputError}
            </Text>
          </Box>
        )}
      </Box>
    </Fragment>
  );
}
export default function UserSignInSimple() {
  return <UserSignIn UI={UI} />;
}
