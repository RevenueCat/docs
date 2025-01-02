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
import tailwindPlugin from "./src/plugins/tailwind/tailwind-config.cjs";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "In-App Subscriptions Made Easy – RevenueCat",
  tagline:
    "RevenueCat makes it easy to build, analyze, and grow in-app purchases and subscriptions on iOS, Android, and the web – no server code required. Get started for free.",
  favicon: "img/favicon-32x32.png",

  // Set the production url of your site here
  url: "https://www.revenuecat.com/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: DOC_BASE_URL,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  onBrokenAnchors: "warn",

  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: false,
        docs: {
          sidebarPath: "./sidebars.js",
          routeBasePath: "/",
          breadcrumbs: true,
          editUrl: "https://github.com/RevenueCat/docs/tree/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
    [
      "redocusaurus",
      {
        // Plugin Options for loading OpenAPI files
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
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: "#f25a5a",
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
    "./src/plugins/tailwind/tailwind-config.cjs",
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/social-preview.jpg",
      navbar: {
        title: "RevenueCat",
        logo: {
          alt: "RevenueCat Logo",
          src: "img/logo-rc.svg",
          href: "https://www.revenuecat.com/",
        },
        items: [
          {
            label: "Documentation",
            to: "/welcome/overview",
            items: [
              {
                type: "docSidebar",
                sidebarId: "defaultSidebar",
                label: "Implementing RevenueCat",
              },
              {
                type: "docSidebar",
                sidebarId: "dataSidebar",
                label: "Charts, Metrics, & Data Reference",
              },
            ],
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
          },
          {
            label: "SDK Reference",
            to: "/platform-resources/sdk-reference",
            position: "left",
            items: [
              {
                label: "iOS SDK",
                to: "https://revenuecat.github.io/purchases-ios-docs/",
              },
              {
                label: "Android SDK",
                to: "https://sdk.revenuecat.com/android/index.html",
              },
              {
                label: "Flutter SDK",
                to: "https://pub.dev/documentation/purchases_flutter/6.5.0/",
              },
              {
                label: "React Native SDK",
                to: "https://revenuecat.github.io/react-native-purchases-docs",
              },
              {
                label: "Capacitor SDK",
                to: "https://www.npmjs.com/package/@revenuecat/purchases-capacitor",
              },
              {
                label: "Cordova SDK",
                to: "https://revenuecat.github.io/cordova-plugin-purchases-docs/",
              },

              {
                label: "Web SDK",
                to: "https://revenuecat.github.io/purchases-js-docs",
              },
            ],
          },
          {
            label: "Blog",
            to: "https://www.revenuecat.com/blog/",
            position: "left",
          },
          {
            label: "Get Help",
            to: "/revenuecat-support/support-first-steps",
            position: "left",
          },
          {
            label: "Account",
            position: "right",
            items: [
              {
                label: "Sign Up",
                to: "https://app.revenuecat.com/signup",
              },
              {
                label: "Sign In",
                to: "https://app.revenuecat.com/login",
              },
            ],
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
        // The application ID provided by Algolia
        appId: ALGOLIA_APP_ID,

        // Public API key: it is safe to commit it
        apiKey: ALGOLIA_API_KEY,

        indexName: ALGOLIA_INDEX_NAME,

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: '/docs/', // or as RegExp: /\/docs\//
        //   to: '/',
        // },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",

        //... other Algolia params
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: false,
        },
      },
      metadata: [
        { name: "google-site-verification", content: GOOGLE_SITE_VERIFICATION },
      ],
    }),
};

export default config;
