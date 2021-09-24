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

module.exports = {
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
};
