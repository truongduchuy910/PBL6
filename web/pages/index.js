import { UserAuthShort } from "../ui/User";
// import UserSignInSimple from "@itoa/web-ui/User/SignIn/Simple";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View>
      {/* AUTH USER */}
      <UserAuthShort />
    </View>
  );
}
