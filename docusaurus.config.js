// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

const DOC_BASE_URL = process.env.DOC_BASE_URL || "/docs/";
const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID || "SET_BY_CI";
const ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY || "SET_BY_CI";
const ALGOLIA_INDEX_NAME = process.env.ALGOLIA_INDEX_NAME || "SET_BY_CI";
const SEGMENT_WRITE_KEY = process.env.SEGMENT_WRITE_KEY || "SET_BY_CI";
const GA_TRACKING_ID = process.env.GA_TRACKING_ID || "SET_BY_CI";
const SIXSENSE_TOKEN = process.env.SIXSENSE_TOKEN || "SET_BY_CI";
const HOCKEYSTACK_API_KEY = process.env.HOCKEYSTACK_API_KEY || "SET_BY_CI";
const GOOGLE_SITE_VERIFICATION =
  process.env.GOOGLE_SITE_VERIFICATION || "SET_BY_CI";

import redirects from "./src/redirects/redirects.js";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "In-App Subscriptions Made Easy – RevenueCat",
  tagline:
    "RevenueCat makes it easy to build, analyze, and grow in-app purchases and subscriptions on iOS, Android, and the web – no server code required. Get started for free.",
  favicon: "img/favicon-32x32.png",

  url: "https://www.revenuecat.com/",
  baseUrl: DOC_BASE_URL,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  onBrokenAnchors: "warn",

  trailingSlash: false,

  staticDirectories: ["static"],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  future: {
    experimental_faster: {
      lightningCssMinimizer: true,
      mdxCrossCompilerCache: true,
      swcJsLoader: true,
      swcJsMinimizer: true,
      swcHtmlMinimizer: true,
      rspackBundler: true,
      rspackPersistentCache: true,
      ssgWorkerThreads: false, // redocusaurus doesn't support this yet, so we'll disable it for now
    },
    v4: true,
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: false,
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
          breadcrumbs: false,
          editUrl: "https://github.com/RevenueCat/docs/tree/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        googleTagManager: {
          containerId: "GTM-NJWQK6DX",
        },
      }),
    ],
    [
      "redocusaurus",
      {
        specs: [
          {
            spec: "openapi-spec/api-v2.yaml",
            route: "/api-v2/",
          },
          {
            spec: "openapi-spec/api-v2-beta.yaml",
            route: "/api-v2-beta/",
          },
          {
            spec: "openapi-spec/external-purchases-api.yaml",
            route: "/external-purchases-api-beta/",
          },
          {
            spec: "openapi-spec/api-v1.yaml",
            route: "/api-v1/",
          },
        ],
        theme: {
          primaryColor: "#576cdb",
        },
        config: "redocly.yaml",
      },
    ],
  ],
  plugins: [
    ["@docusaurus/plugin-client-redirects", redirects],
    "./src/plugins/lightbox/lightbox-plugin",
    [
      "./src/plugins/analytics/6sense/6sense-plugin",
      { writeKey: SIXSENSE_TOKEN },
    ],
    [
      "./src/plugins/analytics/segment/segment-plugin",
      { writeKey: SEGMENT_WRITE_KEY },
    ],
    [
      "./src/plugins/analytics/hockeystack/hockeystack-plugin",
      { writeKey: HOCKEYSTACK_API_KEY },
    ],

    [
      "@docusaurus/plugin-google-gtag",
      {
        trackingID: GA_TRACKING_ID,
        anonymizeIP: true,
      },
    ],
    "./src/plugins/markdown-alternates/index.js",
    "./src/plugins/tailwind/tailwind-config.cjs",
    function myRawLoaderPlugin() {
      // this plugin replaces raw-loader with asset/source (webpack 5)
      return {
        name: "my-raw-loader",
        configureWebpack() {
          return {
            module: {
              rules: [
                {
                  resourceQuery: /\?raw$/,
                  type: "asset/source",
                },
              ],
            },
          };
        },
      };
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      image: "img/social-preview.jpg",
      navbar: {
        title: "RevenueCat",
        logo: {
          alt: "RevenueCat Logo",
          src: "img/logo-rc-small.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "defaultSidebar",
            label: "Implementation",
          },
          {
            type: "docSidebar",
            sidebarId: "dataSidebar",
            label: "Charts & Data",
          },
          {
            type: "docSidebar",
            sidebarId: "integrationsSidebar",
            label: "Integrations",
          },
          {
            label: "Guides",
            type: "docSidebar",
            sidebarId: "playbookSidebar",
            position: "left",
          },
          {
            label: "Support",
            type: "docSidebar",
            sidebarId: "supportSidebar",
            position: "left",
          },
          {
            label: "REST API",
            to: "/api-v1/",
            items: [
              {
                label: "API v1",
                to: "/api-v1/",
              },
              {
                label: "API v2",
                to: "/api-v2/",
              },
            ],
            position: "left",
          },
          {
            label: "Dashboard",
            position: "right",
            to: "https://app.revenuecat.com",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "RevenueCat",
            items: [
              {
                label: "Docs",
                to: "/welcome/overview",
              },
              {
                label: "REST API Reference",
                to: "/api-v1",
              },
              {
                label: "Status and Incidents",
                to: "https://status.revenuecat.com/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/revenuecat",
              },
              {
                label: "RevenueCat Community",
                href: "https://community.revenuecat.com",
              },
              {
                label: "X",
                href: "https://x.com/RevenueCat",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/revenuecat",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} RevenueCat`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["java", "dart", "scala", "brightscript"],
      },
      algolia: {
        appId: ALGOLIA_APP_ID,
        apiKey: ALGOLIA_API_KEY,
        indexName: ALGOLIA_INDEX_NAME,
        contextualSearch: true,
        searchParameters: {},
        searchPagePath: "search",
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        },
      },
      metadata: [
        { name: "google-site-verification", content: GOOGLE_SITE_VERIFICATION },
      ],
    }),
};

export default config;
