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

import redirects from "./src/redirects/redirects";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "In-App Subscriptions Made Easy – RevenueCat",
  tagline:
    "RevenueCat makes it easy to build, analyze, and grow in-app purchases and subscriptions on iOS, Android, and the web – no server code required. Get started for free.",
  favicon: "img/favicon-32x32.png",

  // Set the production url of your site here
  url: "https://revenuecat.com/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: DOC_BASE_URL,

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

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
        docs: {
          sidebarPath: "./sidebars.js",
          routeBasePath: "/",
          breadcrumbs: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
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
            route: "/api/",
          },
          {
            spec: "openapi-spec/api-v1.json",
            route: "/api-v1/",
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: "#f25a5a",
        },
      },
    ],
  ],
  plugins: [["@docusaurus/plugin-client-redirects", redirects]],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "RevenueCat",
        logo: {
          alt: "My Site Logo",
          src: "img/logo-rc.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "defaultSidebar",
            position: "left",
            label: "Documentation",
          },
          {
            label: "API v2",
            to: "/api/",
          },
          {
            label: "API v1",
            to: "/api-v1/",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Docs",
                to: "/welcome/overview",
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
                label: "Twitter",
                href: "https://twitter.com/RevenueCat",
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
        copyright: `Copyright © ${new Date().getFullYear()} RevenueCat. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["java", "dart", "scala"],
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
        }
      }
    }),
};

export default config;
