import { NativeBaseProvider } from "native-base";
import { ProviderNext, appInitialProps } from "../ui/Provider";

function App({ Component, pageProps }) {
  return (
    <NativeBaseProvider>
      <ProviderNext pageProps={pageProps}>
        <Component {...pageProps} />
      </ProviderNext>
    </NativeBaseProvider>
  );
}
App.getInitialProps = appInitialProps([]);
export default App;
