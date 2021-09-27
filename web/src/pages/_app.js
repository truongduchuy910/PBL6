import { NativeBaseProvider, extendTheme } from "native-base";
import { ProviderNext, appInitialProps } from "../ui/Provider";

const theme = extendTheme({
  fonts: {
    heading: "Roboto",
    body: "Roboto",
    mono: "Roboto",
  },
});

function App({ Component, pageProps }) {
  return (
    <NativeBaseProvider theme={theme}>
      <ProviderNext pageProps={pageProps}>
        <Component {...pageProps} />
      </ProviderNext>
    </NativeBaseProvider>
  );
}
App.getInitialProps = appInitialProps([]);
export default App;
