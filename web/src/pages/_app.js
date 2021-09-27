import { NativeBaseProvider } from "native-base";
import { ProviderNext, appInitialProps } from "../ui/Provider";

function App({ Component, pageProps }) {
  return (
    <ProviderNext pageProps={pageProps}>
      {/* <NativeBaseProvider> */}
        <Component {...pageProps} />
      {/* </NativeBaseProvider> */}
    </ProviderNext>
  );
}
App.getInitialProps = appInitialProps([]);
export default App;
