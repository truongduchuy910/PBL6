import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { NativeBaseProvider, extendTheme, Container, Text } from "native-base";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";

import { ProviderNative } from "./ui/Provider";
import { PostItemSimple } from "./ui/Post";
import { UserSignInSimple } from "./ui/User";
import { UserListSuggest } from "./ui/User";
const theme = extendTheme({
  fonts: {
    heading: "Roboto_500Medium",
    body: "Roboto_400Regular",
    mono: "Roboto_400Regular",
  },
});
export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
  });
  return (
    <ProviderNative>
      <NativeBaseProvider theme={theme}>
        <Container maxW="conainer.lg">
          <PostItemSimple />
          {/* <UserSignInSimple /> */}
          {/* <UserListSuggest /> */}
        </Container>
      </NativeBaseProvider>
    </ProviderNative>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
