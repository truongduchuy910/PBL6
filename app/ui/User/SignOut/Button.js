import React from "react";
import UserSignOut from "./Controller";
import { Button } from "native-base";
import { IoLogOut } from "react-icons/io5";
function UI({ loading, error, signOut }) {
  /**
   *
   * @param {Event} e
   */
  const clickSignOut = (e) => {
    signOut();
  };
  return (
    <Button
      onPress={clickSignOut}
      rounded={8}
      bgColor="green.500"
      py={2}
      px={3}
      _text={{ color: "white", fontWeight: "600" }}
      leftIcon={<IoLogOut size={24} />}
    >
      Đăng xuất
    </Button>
  );
}
export default function UserSignOutButton() {
  return <UserSignOut UI={UI} />;
}
