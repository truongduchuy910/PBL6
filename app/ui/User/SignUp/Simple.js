import React, { Fragment, useRef, useState } from "react";
import { Link } from "@react-navigation/native";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  HStack,
  Image,
  Radio,
} from "native-base";
import Controller from "../Create/Controller.js";
function UI({ loading, error, user, navigation, on }) {
  /**
   *
   * @param {Event} e
   */

  const usernameRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const [sex, setSex] = useState("male");
  const [inputError, setInputError] = useState(null);

  const clickSignUp = () => {
    setInputError(null);
    const username = usernameRef.current.value;
    const phone = phoneRef.current.value;
    const password = passwordRef.current.value;

    // Validation username
    if (!username.trim() || !isNaN(username) || !username.includes(" ")) {
      setInputError("Kiểm tra lại họ và tên");
      return;
    }

    // Validation phone number
    if (
      !phone.trim() ||
      (!(phone.length === 10) && !(phone.length === 11)) ||
      isNaN(phone)
    ) {
      setInputError("Kiểm tra lại số điện thoại");
      return;
    }

    // Validation password
    if (password.trim().length < 6) {
      setInputError("Độ dài mật khẩu ít nhất 6 kí tự");
      return;
    }

    console.log(username, phone, password, sex);

    // Sign up
    if (!loading) {
      on({ variables: { data: { name: username, phone, password } } });
    }
  };

  return (
    <Fragment>
      <Box maxW="350" w="full" mx="auto" mt="24">
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
          Tạo tài khoản mới
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
                Họ và tên
              </FormControl.Label>
              <Input
                ref={usernameRef}
                name="username"
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
            <FormControl mb="2">
              <FormControl.Label
                _text={{
                  color: "coolGray.800",
                  fontSize: "14",
                  fontWeight: 400,
                }}
              >
                Giới tính
              </FormControl.Label>
              <Radio.Group
                name="sex"
                accessibilityLabel="sex"
                value={sex}
                onChange={(newValue) => {
                  setSex(newValue);
                }}
              >
                <HStack space="8">
                  <Radio
                    colorScheme="green"
                    size="sm"
                    value="male"
                    borderWidth="1"
                    borderColor="gray.300"
                  >
                    <Text fontSize="13" ml="1.5">
                      Nam
                    </Text>
                  </Radio>
                  <Radio
                    borderWidth="1"
                    borderColor="gray.300"
                    colorScheme="green"
                    size="sm"
                    value="female"
                  >
                    <Text fontSize="13" ml="1.5">
                      Nữ
                    </Text>
                  </Radio>
                  <Radio
                    borderWidth="1"
                    borderColor="gray.300"
                    colorScheme="green"
                    size="sm"
                    value="other"
                  >
                    <Text fontSize="13" ml="1.5">
                      Khác
                    </Text>
                  </Radio>
                </HStack>
              </Radio.Group>
            </FormControl>
            {!loading && (
              <Button
                onPress={clickSignUp}
                rounded={8}
                bgColor="green.500"
                p={2}
                _text={{ color: "white", fontWeight: "600" }}
              >
                TẠO TÀI KHOẢN
              </Button>
            )}
            {loading && (
              <Button
                rounded={8}
                bgColor="green.500"
                p={2}
                _text={{ color: "white", fontWeight: "600" }}
              >
                ĐANG TẢI ...
              </Button>
            )}
          </VStack>
        </Box>
        <Box mt={4} p={3.5} rounded={10} borderWidth={1} borderColor="gray.100">
          <HStack justifyContent="center">
            <Text>Bạn đã có tài khoản? </Text>
            <Link to={{ screen: "home" }}>
              <Text color="green.500" textDecoration="none">
                Đăng nhập ngay
              </Text>
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
              Vui lòng sử dụng số điện thoại khác
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
export default function UserSignUp(props) {
  return <Controller {...props} UI={UI} />;
}
