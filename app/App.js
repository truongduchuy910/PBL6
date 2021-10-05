import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import pages from "./pages";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";

import { ProviderNative } from "./ui/Provider";
import HeaderSimple from "./ui/Headers/Simple";
import { AppRegistry } from "react-native";
const theme = extendTheme({
  fonts: {
    heading: "Roboto_500Medium",
    body: "Roboto_400Regular",
    mono: "Roboto_400Regular",
  },
});
function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
  });
  return (
    <NativeBaseProvider theme={theme}>
      <ProviderNative navigation={pages} header={HeaderSimple} />
    </NativeBaseProvider>
  );
}
AppRegistry.registerComponent("Kilogram", () => App);
export default App;
