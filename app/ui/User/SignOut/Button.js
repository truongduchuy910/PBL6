import React from "react";
import UserSignOut from "./Controller";
import { Button, Text } from "native-base";
import { IoLogOut, IoLogIn } from "react-icons/io5";
function UI({ loading, error, signOut, navigation, auth }) {
  /**
   *
   * @param {Event} e
   */
  const clickSignOut = (e) => {
    signOut();
  };
  return loading ? (
    <Text>Loading...</Text>
  ) : (
    <Button
      onPress={clickSignOut}
      rounded={8}
      bgColor="green.500"
      py={2}
      px={3}
      _text={{ color: "white", fontWeight: "600" }}
      leftIcon={
        auth.data?.user ? <IoLogOut size={24} /> : <IoLogIn size={24} />
      }
    >
      {auth.data?.user ? "Đăng xuất" : "Đăng nhập"}
    </Button>
  );
}
export default function UserSignOutButton(props) {
  return <UserSignOut {...props} UI={UI} />;
}
