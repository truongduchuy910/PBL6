import { Text } from "native-base";
import React, { Fragment } from "react";
import UserSignInSimple from "../SignIn/Simple";
import UserSignOutButton from "../SignOut/Button";
import UserAuth from "./Controller";

function UI({ loading, error, user }) {
  return loading ? <Text>Loading...</Text> : <Text>{user && user.phone}</Text>;
}
export default function UserAuthShort(props) {
  return <UserAuth {...props} UI={UI} />;
}
