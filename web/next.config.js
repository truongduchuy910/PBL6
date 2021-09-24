const CMS =
  process.env.NODE_ENV === "production" ? process.env.CMS : process.env.CMS_DEV;

async function rewrites() {
  console.log("process.env.NODE_ENV", CMS);
  return [
    // =====
    {
      source: "/admin",
      destination: CMS + "/admin/products",
    },
    {
      source: "/admin/:path*",
      destination: CMS + "/admin/:path*",
    },
    // =====
    {
      source: "/upload/file/:name*",
      destination: CMS + "/upload/file/:name*",
    },
    {
      source: "/upload/img/:size/:name*",
      destination: CMS + "/upload/img/:name*",
    },
    {
      source: "/upload/img/:name*",
      destination: CMS + "/upload/img/:name*",
    },
    // =====
    {
      source: "/__webpack_hmr",
      destination: CMS + "/__webpack_hmr",
    },
    {
      source: "/__webpack-hmr",
      destination: CMS + "/__webpack-hmr",
    },
    // =====
  ];
}

const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "native-base",
  "react-native-svg",
  "styled-components",
  "react-native-safe-area-context",
  "@react-aria/visually-hidden",
  "@react-native-aria/button",
  "@react-native-aria/checkbox",
  "@react-native-aria/combobox",
  "@react-native-aria/focus",
  "@react-native-aria/interactions",
  "@react-native-aria/listbox",
  "@react-native-aria/overlays",
  "@react-native-aria/radio",
  "@react-native-aria/slider",
  "@react-native-aria/tabs",
  "@react-native-aria/utils",
  "@react-stately/combobox",
  "@react-stately/radio",
]);

module.exports = withPlugins([withTM], {
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      "react-native$": "react-native-web",
    };
    config.resolve.extensions = [
      ".web.js",
      ".web.jsx",
      ".web.ts",
      ".web.tsx",
      ...config.resolve.extensions,
    ];
    return config;
  },
  /**
   *
   */
  webpack5: true,
  i18n: {
    locales: ["vi", "en", "zh", "ja", "ko", "fr", "ru"],
    defaultLocale: "vi",
  },
  env: {
    HOST_DEV: process.env.HOST_DEV,
    CMS,
    IMG: "",
  },
  rewrites,
  images: {
    domains: [
      process.env.NODE_ENV === "production" ? "itoa.vn" : "localhost",
      "ecom.itoa.vn",
    ],
    path: process.env.CMS + "/loader",
    minimumCacheTTL: 60,
  },
});
