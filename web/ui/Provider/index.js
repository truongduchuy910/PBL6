// react
import { Fragment, useMemo } from "react";
import { createContext } from "react";
// next
import NextApp from "next/app";
import Head from "next/head";
import Script, { initScriptLoader } from "next/script";
// important
//
import { ApolloClient } from "@apollo/client";
import { HttpLink, InMemoryCache, ApolloProvider } from "@apollo/client";
//
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import chroma from "chroma-js";
import isEqual from "lodash/isEqual";
import { setContext } from "@apollo/client/link/context";
import merge from "deepmerge";
//
import PageList from "../primes/Page/List";
// import Process from "@itoa/ui/Process";
// import ProcessTop from "@itoa/ui/Process/Top";
import { config } from "@itoa/ui/theme";
//
const UNKNOWN_USER_COLOR_STRING = "#000";
const LIGHTNESS_MAP = [0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.0];
const SATURATION_MAP = [0.32, 0.16, 0.08, 0.04, 0, 0, 0.04, 0.08, 0.16, 0.32];
const HUE_MAP = [0, 4, 8, 12, 16, 20, 24, 28, 32, 36];

const getUserColorChroma = (
  colorString,
  fallbackValue = UNKNOWN_USER_COLOR_STRING,
) => (chroma.valid(colorString) ? chroma(colorString) : chroma(fallbackValue));

export const SmartSwatch = (userColorInput = "#000") => {
  const trimmedColor = userColorInput.trim();
  const userColorChroma = getUserColorChroma(trimmedColor);

  const lightnessGoal = userColorChroma.get("hsl.l");
  const closestLightness = LIGHTNESS_MAP.reduce((prev, curr) =>
    Math.abs(curr - lightnessGoal) < Math.abs(prev - lightnessGoal)
      ? curr
      : prev,
  );

  const baseColorIndex = LIGHTNESS_MAP.findIndex((l) => l === closestLightness);

  const colors = LIGHTNESS_MAP.map((l) => userColorChroma.set("hsl.l", l))
    .map((color) => chroma(color))
    .map((color, i) => {
      const saturationDelta =
        SATURATION_MAP[i] - SATURATION_MAP[baseColorIndex];
      return saturationDelta >= 0
        ? color.saturate(saturationDelta)
        : color.desaturate(saturationDelta * -1);
    });
  const colorsHueDown = colors.map((color, i) => {
    const hueDelta = HUE_MAP[i] - HUE_MAP[baseColorIndex];
    return hueDelta >= 0
      ? color.set("hsl.h", `-${hueDelta}`)
      : color.set("hsl.h", `-${(hueDelta * -1) / 2}`);
  });
  const result = {};
  const c = colorsHueDown.map((color, index) => {
    const number = getColorNumber(index);
    result[number] = color.hex();
  });
  return result;
};

export function debounce(func, wait, immediate) {
  let timeout;

  return function () {
    const context = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    }, wait);
    if (immediate && !timeout) {
      func.apply(context, args);
    }
  };
}
export const getColorNumber = (index) => (index === 0 ? 50 : index * 100);
export const APOLLO_STATE_PROP_NAME = "__apollo_state__";
export const VARIABLE_PROP_NAME = "__variable__";
/**
 * @returns {ApolloClient}
 */
function createApolloClient(domain = "", locale) {
  const cms = process.env.CMS;
  const uri = cms + "/admin/api";
  const as =
    process.env.NODE_ENV === "production" ? domain : process.env.HOST_DEV;
  console.log("createApolloClient", uri, as);
  const httpLink = new HttpLink({
    uri,
    headers: {
      as, // HOST env for dev mode
      locale,
    },
  });
  const link =
    typeof window === "object"
      ? setContext((_, { headers }) => {
          const token = localStorage.getItem("token");
          return {
            headers: {
              ...headers,
              authorization: token ? `Bearer ${token}` : "",
            },
          };
        }).concat(httpLink)
      : httpLink;
  const cache = new InMemoryCache();
  return new ApolloClient({
    link,
    ssrMode: typeof window === "undefined",
    cache,
  });
}
export let apolloClients = {};
/**
 * @returns {ApolloClient}
 */
function existingApolloClient(name) {
  return apolloClients[name];
}

function mergeState(a, b) {
  return merge(a, b, {
    arrayMerge: (destinationArray, sourceArray) => [
      ...sourceArray,
      ...destinationArray.filter((d) =>
        sourceArray.every((s) => !isEqual(d, s)),
      ),
    ],
  });
}
/**
 *
 * @param {*} initialState
 * @param {*} param1
 * @returns {ApolloClient}
 */
export function initializeApollo(initialState = null, { domain, locale }) {
  const _apolloClient =
    existingApolloClient(domain) || createApolloClient(domain, locale);
  if (initialState) {
    const existingCache = _apolloClient.cache.extract();
    const data = mergeState(initialState, existingCache);
    _apolloClient.cache.restore(data);
  }
  if (!apolloClients[domain]) apolloClients[domain] = _apolloClient;
  return _apolloClient;
}
export function getContextVar(context) {
  const { locale, asPath } = context;
  return {
    domain: context.req ? context.req.headers.host : window.location.host,
    locale,
    asPath,
  };
}
export function getVariables(pageProps = {}) {
  return pageProps[VARIABLE_PROP_NAME];
}
export function getApolloState(pageProps = {}) {
  return pageProps[APOLLO_STATE_PROP_NAME];
}
export function addVariables(variable) {}

export async function executeInitialProps(context, initialProps, queries = []) {
  if (typeof window === "undefined") {
    console.log(context.asPath);
    const { props } = await executeServerSide(context, queries);
    initialProps.pageProps = props;
  } else {
    const { domain, locale } = getContextVar(context);
    initialProps.pageProps[VARIABLE_PROP_NAME] = { domain, locale };
  }
  return initialProps;
}

export async function executeServerSide(context, queries = []) {
  // add
  const { domain, locale } = getContextVar(context);
  const client = initializeApollo(null, { domain, locale });
  for (var i in queries) {
    var QUERY = queries[i];
    if (!QUERY.disableLocale) {
      if (QUERY.variables) QUERY.variables.locale = locale;
      else QUERY.variables = { locale };
    }
    try {
      await client.query(QUERY);
    } catch (e) {
      console.log("cannot execute", QUERY, e);
    }
  }

  return {
    props: {
      [APOLLO_STATE_PROP_NAME]: client.cache.extract(),
      [VARIABLE_PROP_NAME]: { domain, locale },
    },
  };
}

export function appInitialProps(queries = []) {
  return async (app) => {
    var initialProps = await NextApp.getInitialProps(app);
    const context = app.ctx;
    if (context.res)
      context.res.setHeader(
        "Cache-Control",
        "public, s-maxage=10, stale-while-revalidate=59",
      );
    const props = await executeInitialProps(context, initialProps, queries);
    return props;
  };
}
export const PageContext = createContext();
function ThemeProviderUI({ page = {}, children, Loading, loading, ...props }) {
  const theme = useMemo(() => {
    if (!page.id) return extendTheme({});
    const brand = SmartSwatch(
      process.env.NODE_ENV === "production"
        ? page.color || "rgb(36,196,138)"
        : "#254171",
    );
    const initialColorMode = page.colorMode || "light";
    return extendTheme(
      merge.all([
        config,
        {
          colors: { brand },
          config: {
            initialColorMode,
            useSystemColorMode: false,
          },
        },
      ]),
    );
  }, [page.id]);
  // const _process = <Process UI={ProcessTop} />;
  return (
    <Fragment>
      <ChakraProvider theme={theme} {...props}>
        {Loading && <Loading page={page} />}
        {/* {_process} */}
        {children}
      </ChakraProvider>
      {page?.gtag && (
        <Script
          src={`https://www.googletagmanager.com/gtag/js`}
          id={page.gtag}
          strategy="lazyOnload"
          onLoad={() => {
            console.log("Google Analystic is loaded successfully");
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag("js", new Date());
            gtag("config", page.gtag);
          }}
        />
      )}
      <Script src="https://sp.zalo.me/plugins/sdk.js"></Script>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        nonce="3HoFlu1a"
        onLoad={() => {
          console.log("on load facebook sdk", page.pageId, page.pixelId);
          window.fbAsyncInit = function () {
            console.log("Facebook Plugin is loaded successfully");
            FB.init({
              appId:
                process.env.NODE_ENV === "production"
                  ? "145518257438217"
                  : "793212068255116",
              autoLogAppEvents: true,
              xfbml: true,
              version: "v11.0",
            });
            FB.getLoginStatus(function (response) {
              console.log(response);
              if (response.status === "connected") {
                // The user is logged in and has authenticated your
                // app, and response.authResponse supplies
                // the user's ID, a valid access token, a signed
                // request, and the time the access token
                // and signed request each expire.
                var uid = response.authResponse.userID;
                var accessToken = response.authResponse.accessToken;
              } else if (response.status === "not_authorized") {
                // The user hasn't authorized your application.  They
                // must click the Login button, or you must call FB.login
                // in response to a user gesture, to launch a login dialog.
              } else {
                // The user isn't logged in to Facebook. You can launch a
                // login dialog with a user gesture, but the user may have
                // to log in to Facebook before authorizing your application.
              }
            });
          };
          if (page.pixelId) {
            fbq("init", pixelId);
            fbq("track", "PageView");
          }
        }}
      />

      {page.pixelId && (
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${page.pixelId}&ev=PageView&noscript=1`}
          />
        </noscript>
      )}
      <Head>
        <link rel="icon" href={page?.logo?.publicUrl} type="image/jpg" />
      </Head>
    </Fragment>
  );
}

export default function UIProvider(props) {
  const { pageProps = {}, children } = props;
  const state = getApolloState(pageProps);
  const variables = getVariables(pageProps);
  const client = useMemo(() => initializeApollo(state, variables), [pageProps]);
  return (
    <Fragment>
      <ApolloProvider client={client}>
        <PageList {...props} UI={ThemeProviderUI} />
      </ApolloProvider>
    </Fragment>
  );
}
