// react
import { useMemo } from "react";
import { createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
// next
// important
//
import { ApolloClient } from "@apollo/client";
import { HttpLink, InMemoryCache, ApolloProvider } from "@apollo/client";
//
import isEqual from "lodash/isEqual";
import { setContext } from "@apollo/client/link/context";
import merge from "deepmerge";

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
      ? setContext(async (_, { headers }) => {
          const token = await AsyncStorage.getItem("token");
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
  return pageProps[VARIABLE_PROP_NAME] || {};
}
export function getApolloState(pageProps = {}) {
  return pageProps[APOLLO_STATE_PROP_NAME];
}

export const PageContext = createContext();
export default function ProviderNext(props) {
  const { pageProps = {} } = props;
  const state = getApolloState(pageProps);
  const variables = getVariables(pageProps);
  const client = useMemo(() => initializeApollo(state, variables), [pageProps]);
  return <ApolloProvider {...props} client={client} />;
}
