import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeBaseProvider, extendTheme, Container } from "native-base";
// import { ProviderNext } from "./ui/Provider";
import { PostItemSimple } from "./ui/Post";
const theme = extendTheme({
  fonts: {
    heading: "Roboto",
    body: "Roboto",
    mono: "Roboto",
  },
});
export default function App() {
  return (
    // <ProviderNext>
    <NativeBaseProvider theme={theme}>
      <Container maxW="conainer.lg">
        <PostItemSimple />
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </Container>
    </NativeBaseProvider>
    // </ProviderNext>
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
