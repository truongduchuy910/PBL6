import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import pages from "./pages";
import {
  useFonts,
  Lexend_300Light,
  Lexend_400Regular,
  Lexend_500Medium,
  Lexend_600SemiBold,
  Lexend_700Bold,
} from "@expo-google-fonts/lexend";
import { ProviderNative } from "./ui/Provider";
import HeaderSimple from "./ui/Headers/Simple";
import { AppRegistry } from "react-native";

const theme = extendTheme({
  fonts: {
    heading: "Lexend",
    body: "Lexend",
    mono: "Lexend",
  },
  components: {
    Text: {
      baseStyle: {
        color: "gray.800",
        fontFamily: "Lexend_400Regular",
      },
      defaultProps: { size: "md" },
      sizes: {
        lg: { fontSize: "32px" },
        md: { fontSize: "14px" },
        sm: { fontSize: "12px" },
      },
    },
    Input: {
      baseStyle: {
        color: "gray.800",
        fontFamily: "Lexend_400Regular",
      },
      defaultProps: { size: "md" },
      sizes: {
        lg: { fontSize: "32px" },
        md: { fontSize: "14px" },
        sm: { fontSize: "12px" },
      },
    },
    Heading: {
      baseStyle: {
        color: "gray.800",
        fontFamily: "Lexend_400Regular",
      },
      defaultProps: { size: "lg" },
      sizes: {
        lg: { fontSize: "32px" },
        md: { fontSize: "24px" },
        sm: { fontSize: "20px" },
      },
    },
  },
});

function App() {
  let [fontsLoaded] = useFonts({
    Lexend_300Light,
    Lexend_400Regular,
    Lexend_500Medium,
    Lexend_600SemiBold,
    Lexend_700Bold,
  });

  return (
    <NativeBaseProvider theme={theme}>
      <ProviderNative navigation={pages} header={HeaderSimple} />
    </NativeBaseProvider>
  );
}

AppRegistry.registerComponent("Kilogram", () => App);
export default App;
