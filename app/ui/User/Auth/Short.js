import { Button, Text } from "native-base";
import React, { Fragment } from "react";
import UserAuth from "./Controller";
import { Link } from "@react-navigation/native";

function UI({ loading, error, user }) {
  return loading ? <Text>Loading...</Text> : <Text>{user && user.phone}</Text>;
}
export default function UserAuthShort(props) {
  return <UserAuth {...props} UI={UI} />;
}
