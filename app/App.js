import React from "react";
import { NativeBaseProvider, extendTheme, Container } from "native-base";
import pages from "./pages";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";

import { ProviderNative } from "./ui/Provider";
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
    <NativeBaseProvider theme={theme}>
      <ProviderNative navigation={pages} />
    </NativeBaseProvider>
  );
}
