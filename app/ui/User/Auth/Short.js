import { Button, Text } from "native-base";
import React from "react";
import UserAuth from "./Controller";
import { Link } from "@react-navigation/native";

function UI({ loading, error, user }) {
  const userContent = (
    <Link to={{ screen: "user" }}>
      <Button
        rounded={8}
        bgColor="gray.100"
        p="2"
        px="3"
        _text={{ color: "gray.400", fontWeight: "600" }}
      >
        {user && user.name}
      </Button>
    </Link>
  );
  return loading ? <Text>Loading...</Text> : userContent;
}
export default function UserAuthShort(props) {
  return <UserAuth {...props} UI={UI} />;
}
