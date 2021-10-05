import React, { useState } from "react";
import { Button, Box, VStack, Divider } from "native-base";
import { Link } from "@react-navigation/native";
import { BsFillCaretDownFill } from "react-icons/bs";
import { RiUser3Fill, RiDownloadCloudFill } from "react-icons/ri";
import { MdSettings } from "react-icons/md";
import { HiLockClosed } from "react-icons/hi";
import { UserSignOutButton } from "../User";

function UI() {
  const [isOpenOptions, setIsOpenOptions] = useState(false);

  const optionsHandler = () => {
    setIsOpenOptions((prev) => !prev);
  };

  return (
    <Box position="relative" right="0">
      <Button
        onPress={optionsHandler}
        rounded="100"
        bgColor="gray.100"
        p="2.5"
        _text={{ color: "gray.400", fontWeight: "600" }}
      >
        <BsFillCaretDownFill color="#a1a1aa" />
      </Button>
      {isOpenOptions && (
        <Box position="absolute" top="10" right="0" w="200px">
          <VStack
            space="1.5"
            bgColor="white"
            p="2"
            rounded="8"
            borderWidth="1"
            borderColor="gray.100"
            alignItems="start"
          >
            <Button
              bgColor="white"
              leftIcon={<RiUser3Fill color="#22c55e" />}
              onPress={optionsHandler}
            >
              <Link to={{ screen: "user" }}>Trang cá nhân</Link>
            </Button>
            <Button
              bgColor="white"
              leftIcon={<MdSettings color="#22c55e" />}
              onPress={optionsHandler}
            >
              <Link to={{ screen: "userupdate" }}>Cài đặt</Link>
            </Button>
            <Button
              bgColor="white"
              leftIcon={<HiLockClosed color="#22c55e" />}
              onPress={optionsHandler}
            >
              <Link to={{ screen: "updatepassword" }}>Đổi mật khẩu</Link>
            </Button>
            <Button
              bgColor="white"
              leftIcon={<RiDownloadCloudFill color="#22c55e" />}
              onPress={optionsHandler}
            >
              <Link to={{ screen: "album" }}>Lưu</Link>
            </Button>

            <UserSignOutButton />
          </VStack>
        </Box>
      )}
    </Box>
  );
}
export default UI;
