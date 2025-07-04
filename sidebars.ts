/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

import {
  Category,
  SubCategory,
  Link,
  Page,
  GeneratedIndex,
  CategoryConfig,
  SubCategoryConfig,
} from "./src/sidebars/sidebar-utils";

// The sidebar is a tree of categories and pages.
// Options:
//    Category - Top level categories with an emoji
//    Subcategory - Page with a collection of subpages
//    Page - An individual doc
//    Link - A link to a different doc
//
// Each page has an explicit path/slug with /docs as the parent.
// The path/slug is relative to the path of its parent if `itemsPathPrefix` is provided.
// i.e. Category -> Sub-category -> Page
// "categories/welcome" -> "projects" -> "collaborators"
// rendered path: "categories/welcome/projects/collaborators"

const welcomeCategory = Category({
  iconName: "info",
  label: "New to RevenueCat?",
  itemsPathPrefix: "",
  items: [Page({ slug: "welcome/overview" })],
});

const projectsCategory = Category({
  iconName: "hammer",
  label: "Projects & Apps",
  itemsPathPrefix: "",
  items: [
    Page({ slug: "projects/projects-overview" }),
    Page({ slug: "projects/connect-a-store" }),
    SubCategory({
      label: "Connect Server Notifications",
      slug: "platform-resources/server-notifications",
      itemsPathPrefix: "platform-resources/server-notifications/",
      items: [
        Page({ slug: "apple-server-notifications" }),
        Page({ slug: "google-server-notifications" }),
        Page({ slug: "stripe-server-notifications" }),
        Page({ slug: "paddle-server-notifications" }),
        Page({ slug: "amazon-server-notifications" }),
      ],
    }),
    SubCategory({
      label: "Project Settings",
      items: [
        Page({ slug: "projects/authentication" }),
        Page({ slug: "projects/collaborators" }),
        Page({ slug: "projects/restore-behavior" }),
        Page({ slug: "projects/sandbox-access" }),
      ],
      index: { title: "Project Settings", link: "projects/project-settings" },
    }),
  ],
});

const mobileSDKCategory = Category({
  iconName: "mobile",
  label: "RevenueCat SDK",
  itemsPathPrefix: "getting-started/",
  items: [
    Page({ slug: "quickstart" }),
    SubCategory({
      label: "Install the SDK",
      slug: "installation",
      itemsPathPrefix: "installation/",
      items: [
        Page({ slug: "ios" }),
        Page({ slug: "android" }),
        Page({ slug: "reactnative" }),
        Page({ slug: "expo" }),
        Page({ slug: "flutter" }),
        Page({ slug: "kotlin-multiplatform" }),
        Page({ slug: "capacitor" }),
        Page({ slug: "cordova" }),
        Page({ slug: "unity" }),
        Page({ slug: "web-sdk" }),
        Page({ slug: "app-builders" }),
        Page({ slug: "roku" }),
      ],
    }),
    SubCategory({
      label: "Configure the SDK",
      slug: "configuring-sdk",
      items: [Page({ slug: "configuring-sdk/ios-app-extensions" })],
    }),
    Link({ label: "Identifying Users", slug: "/customers/user-ids" }),
    Link({ label: "Present a Paywall", slug: "/tools/paywalls" }),
    Link({
      label: "Checking Subscription Status",
      slug: "/customers/customer-info",
    }),
  ],
});

const paywallsCategory = Category({
  iconName: "paywall",
  label: "Paywalls",
  itemsPathPrefix: "",
  items: [
    SubCategory({
      label: "RevenueCat Paywalls",
      slug: "tools/paywalls",
      itemsPathPrefix: "tools/paywalls/",
      items: [
        Page({ slug: "installation" }),
        SubCategory({
          label: "Creating Paywalls",
          slug: "creating-paywalls",
          itemsPathPrefix: "creating-paywalls/",
          items: [
            Page({ slug: "components" }),
            Page({ slug: "component-properties" }),
            Page({ slug: "web-purchase-button" }),
            Page({ slug: "variables" }),
            Page({ slug: "localization" }),
            Page({ slug: "customer-states" }),
            Page({ slug: "app-review" }),
          ],
        }),
        Page({ slug: "displaying-paywalls" }),
        Page({ slug: "change-log" }),
      ],
    }),
    SubCategory({
      label: "RevenueCat Paywalls (Legacy)",
      slug: "tools/paywalls-legacy",
      itemsPathPrefix: "tools/paywalls-legacy/",
      items: [
        Page({ slug: "installation" }),
        Page({ slug: "creating-paywalls" }),
        Page({ slug: "displaying-paywalls" }),
      ],
    }),
    SubCategory({
      label: "Manual Implementation",
      itemsPathPrefix: "getting-started/",
      items: [
        Page({ slug: "displaying-products" }),
        SubCategory({
          label: "Making Purchases",
          slug: "making-purchases",
          items: [
            Page({ slug: "making-purchases/android-with-jetpack-compose" }),
          ],
        }),
        Page({ slug: "restoring-purchases" }),
      ],
      // TODO: add a custom page for this, i.e. 'slug' instead of 'index'
      index: {
        title: "Custom Paywalls (Manual Implementation)",
        link: "paywalls/custom-paywalls",
      },
    }),
  ],
});

const webSDKCategory = Category({
  iconName: "desktop",
  label: "RevenueCat Web",
  itemsPathPrefix: "web/",
  items: [
    SubCategory({
      label: "Integrate RevenueCat Web",
      slug: "web-billing/overview",
      itemsPathPrefix: "web-billing/",
      items: [
        Page({ slug: "web-sdk" }),
        Page({ slug: "web-purchase-links" }),
        Page({ slug: "testing" }),
      ],
    }),
    SubCategory({
      label: "Configure Web Billing",
      slug: "web-billing/product-setup",
      itemsPathPrefix: "web-billing/",
      items: [
        Page({ slug: "customization" }),
        Page({ slug: "subscription-lifecycle" }),
        Page({ slug: "payment-methods" }),
        Page({ slug: "multi-currency-support" }),
        Page({ slug: "localization" }),
        Page({ slug: "redemption-links" }),
        Page({ slug: "tax" }),
        Page({ slug: "custom-metadata" }),
      ],
    }),
    Page({ slug: "web-billing/managing-customer-subscriptions" }),
    Page({ slug: "web-billing/refunding-payments" }),
    Page({ slug: "web-billing/customer-portal" }),
    Page({ slug: "web-billing/lifecycle-emails" }),
    SubCategory({
      label: "External Purchase Integrations",
      slug: "payment-integrations",
      itemsPathPrefix: "integrations/",
      items: [Page({ slug: "stripe" }), Page({ slug: "paddle" })],
    }),
    Page({ slug: "faq" }),
  ],
});

const offeringsCategory = Category({
  iconName: "tag",
  label: "Offerings & Entitlements",
  itemsPathPrefix: "",
  items: [
    SubCategory({
      label: "Entitlements",
      slug: "getting-started/entitlements",
      items: [Page({ slug: "customers/trusted-entitlements" })],
    }),
    SubCategory({
      label: "Offerings",
      slug: "offerings/offerings",
      items: [
        SubCategory({
          label: "Offering Metadata",
          slug: "tools/offering-metadata",
          itemsPathPrefix: "tools/offering-metadata/",
          items: [Page({ slug: "offering-metadata-examples" })],
        }),
      ],
    }),
    SubCategory({
      label: "Targeting",
      slug: "tools/targeting",
      itemsPathPrefix: "tools/targeting/",
      items: [
        Page({ slug: "placements" }),
        Page({ slug: "custom-attributes" }),
      ],
    }),
    SubCategory({
      label: "Product Configuration",
      slug: "offerings/products-overview",
      itemsPathPrefix: "",
      items: [
        SubCategory({
          label: "Subscription Products",
          itemsPathPrefix: "subscription-guidance/",
          items: [
            SubCategory({
              label: "Free Trials & Promo Offers",
              slug: "subscription-offers",
              itemsPathPrefix: "subscription-offers/",
              items: [
                Page({ slug: "ios-subscription-offers" }),
                Page({ slug: "google-play-offers" }),
                Page({ slug: "stripe-free-trials" }),
              ],
            }),
            Page({ slug: "how-grace-periods-work" }),
            Page({ slug: "managing-subscriptions" }),
            Page({ slug: "price-changes" }),
            Page({ slug: "refunds" }),
            Page({ slug: "google-prepaid-plans" }),
          ],
          index: {
            title: "Subscription Products",
            link: "subscription-guidance/overview",
          },
        }),
        Page({ slug: "platform-resources/non-subscriptions" }),
        SubCategory({
          label: "Store Product Setup",
          itemsPathPrefix: "getting-started/entitlements/",
          items: [
            Page({ slug: "ios-products" }),
            Page({ slug: "android-products" }),
            Page({ slug: "google-subscriptions-and-backwards-compatibility" }),
            Page({ slug: "amazon-product-setup" }),
            Page({ slug: "stripe-products" }),
            Page({ slug: "paddle-products" }),
            Link({
              label: "Web Billing Product Setup",
              slug: "/web/web-billing/product-setup",
            }),
            Page({ slug: "roku-products" }),
          ],
          index: {
            title: "Store Product Setup",
            link: "offerings/products/setup",
          },
        }),
      ],
    }),
    SubCategory({
      label: "Virtual Currency",
      slug: "offerings/virtual-currency",
      itemsPathPrefix: "offerings/virtual-currency/",
      items: [
        Page({ slug: "subscriptions" }),
        Page({ slug: "refunds" }),
        Page({ slug: "events" }),
      ],
    }),
    Page({ slug: "offerings/troubleshooting" }),
  ],
});

const customersCategory = Category({
  iconName: "person",
  label: "Customers",
  itemsPathPrefix: "",
  items: [
    SubCategory({
      label: "Customers Overview",
      slug: "customers/overview",
      items: [
        Page({ slug: "customers/user-ids" }),
        Page({ slug: "customers/customer-info" }),
        Page({ slug: "customers/customer-attributes" }),
      ],
    }),
    SubCategory({
      label: "Customer History",
      slug: "dashboard-and-metrics/customer-history",
      itemsPathPrefix: "dashboard-and-metrics/customer-history/",
      items: [
        Page({ slug: "active-entitlements" }),
        Page({ slug: "aliases-card" }),
        Page({ slug: "attributes" }),
        Page({ slug: "attribution-card" }),
        Page({ slug: "basic-information" }),
        Page({ slug: "offering-override" }),
        Page({ slug: "promotionals" }),
        Page({ slug: "manage-users" }),
      ],
    }),
    SubCategory({
      label: "Customer Center",
      slug: "tools/customer-center",
      itemsPathPrefix: "tools/customer-center/",
      items: [
        Page({ slug: "customer-center-installation" }),
        SubCategory({
          label: "Configuration",
          slug: "customer-center-configuration",
          items: [
            Page({ slug: "customer-center-promo-offers-apple" }),
            Page({ slug: "customer-center-promo-offers-google" }),
          ],
        }),
        SubCategory({
          label: "Integration",
          slug: "customer-center-integration",
          items: [
            Page({ slug: "customer-center-integration-ios" }),
            Page({ slug: "customer-center-integration-android" }),
            Page({ slug: "customer-center-flutter" }),
            Page({ slug: "customer-center-react-native" }),
            Page({ slug: "customer-center-kmp" }),
          ],
        }),
      ],
    }),
    Page({ slug: "dashboard-and-metrics/customer-lists" }),
    Page({ slug: "dashboard-and-metrics/supporting-your-customers" }),
  ],
});

const testAndLaunchCategory = Category({
  iconName: "help-prominent",
  label: "Test & Launch",
  itemsPathPrefix: "test-and-launch/",
  items: [
    SubCategory({
      label: "Debugging",
      slug: "debugging",
      itemsPathPrefix: "debugging/",
      items: [
        Page({ slug: "caching" }),
        Page({ slug: "troubleshooting-the-sdks" }),
      ],
    }),
    Page({ slug: "errors" }),
    SubCategory({
      label: "Sandbox Testing",
      slug: "sandbox",
      itemsPathPrefix: "sandbox/",
      items: [
        Page({ slug: "apple-app-store" }),
        Page({ slug: "google-play-store" }),
        Page({ slug: "amazon-store-sandbox-testing" }),
      ],
    }),
    Page({ slug: "launch-checklist" }),
    Page({ slug: "app-store-rejections" }),
  ],
});

// this section is a mess, but it's a combination of the old platform-resources and service-credentials sections
// to retain links to the old pages, it took a bit of maneuvering
const platformResourcesCategory = Category({
  iconName: "appstore",
  label: "Store Configuration",
  itemsPathPrefix: "",
  items: [
    SubCategory({
      label: "Apple App Store",
      slug: "platform-resources/apple-platform-resources",
      items: [
        SubCategory({
          label: "Service Credentials",
          slug: "service-credentials/itunesconnect-app-specific-shared-secret",
          items: [
            Page({
              slug: "service-credentials/itunesconnect-app-specific-shared-secret",
            }),
            Page({
              slug: "service-credentials/itunesconnect-app-specific-shared-secret/in-app-purchase-key-configuration",
            }),
            Page({
              slug: "service-credentials/itunesconnect-app-specific-shared-secret/app-store-connect-api-key-configuration",
            }),
          ],
          index: {
            title: "App Store Service Credentials",
            link: "store-configuration/app-store/service-credentials",
            description:
              "How to configure your shared secret, in-app purchase key, and App Store Connect API key.",
          },
        }),
        Link({
          label: "Server Notifications",
          slug: "/platform-resources/server-notifications/apple-server-notifications",
        }),
        SubCategory({
          label: "Apple App Store FAQs",
          itemsPathPrefix: "platform-resources/apple-platform-resources/",
          items: [
            Page({ slug: "app-store-small-business-program" }),
            Page({ slug: "apple-app-privacy" }),
            Page({ slug: "apple-family-sharing" }),
            Page({ slug: "handling-refund-requests" }),
          ],
          index: {
            title: "Apple App Store FAQs",
            link: "store-configuration/app-store/faqs",
            description:
              "Additional guidance for the Apple App Store, including small business program, app privacy, family sharing, and handling refund requests.",
          },
        }),
      ],
    }),
    SubCategory({
      label: "Google Play Store",
      slug: "platform-resources/google-platform-resources",
      itemsPathPrefix: "",
      items: [
        SubCategory({
          label: "Service Credentials",
          slug: "service-credentials/creating-play-service-credentials",
          itemsPathPrefix:
            "service-credentials/creating-play-service-credentials/",
          items: [Page({ slug: "google-play-checklists" })],
        }),
        Link({
          label: "Server Notifications",
          slug: "/platform-resources/server-notifications/google-server-notifications",
        }),
        SubCategory({
          label: "Google Play Store FAQs",
          itemsPathPrefix: "platform-resources/google-platform-resources/",
          items: [
            Page({ slug: "google-play-pass" }),
            Page({ slug: "reduced-service-fee" }),
            Page({ slug: "google-plays-data-safety" }),
            Page({ slug: "google-play-quota-increase-request" }),
          ],
          index: {
            title: "Google Play Store FAQs",
            link: "store-configuration/google/faqs",
            description:
              "Additional guidance for the Google Play Store, including pass, reduced service fee, data safety, and quota increase request.",
          },
        }),
      ],
    }),
    SubCategory({
      label: "Amazon Appstore",
      slug: "platform-resources/amazon-platform-resources",
      itemsPathPrefix: "",
      items: [
        Page({ slug: "service-credentials/amazon-appstore-credentials" }),
        Link({
          label: "Server Notifications",
          slug: "/platform-resources/server-notifications/amazon-server-notifications",
        }),
        SubCategory({
          label: "Amazon Appstore FAQs",
          itemsPathPrefix: "platform-resources/amazon-platform-resources/",
          items: [Page({ slug: "amazon-small-business-accelerator-program" })],
          index: {
            title: "Amazon Appstore FAQs",
            link: "store-configuration/amazon/faqs",
            description:
              "Additional guidance for the Amazon Appstore, including small business accelerator program.",
          },
        }),
      ],
    }),
    Page({ slug: "service-credentials/roku-credentials" }),
    SubCategory({
      label: "Web",
      items: [Page({ slug: "web/connect-stripe-account" })],
      index: {
        title: "Web Configuration",
        link: "store-configuration/web",
        description: "How to configure RevenueCat for Web Billing or Stripe.",
      },
    }),
  ],
});

const accountCategory = Category({
  iconName: "key",
  label: "RevenueCat Account",
  itemsPathPrefix: "",
  items: [
    Page({ slug: "welcome/set-up-revenuecat/account-management" }),
    SubCategory({
      label: "Security",
      slug: "welcome/set-up-revenuecat/security",
      items: [Page({ slug: "dashboard-and-metrics/audit-logs" })],
    }),
    Page({ slug: "welcome/set-up-revenuecat/hackerone" }),
  ],
});

const supportCategory = Category({
  iconName: "help-prominent",
  label: "RevenueCat Support",
  itemsPathPrefix: "revenuecat-support/",
  items: [
    Page({ slug: "general-troubleshooting" }),
    Page({ slug: "support-first-steps" }),
  ],
});

const migrateToRevenueCatCategory = Category({
  iconName: "double-arrow-right",
  label: "Migrate to RevenueCat",
  itemsPathPrefix: "migrating-to-revenuecat/",
  items: [
    Page({ slug: "migration-paths" }),
    SubCategory({
      label: "Import Historical Purchases",
      slug: "migrating-existing-subscriptions",
      itemsPathPrefix: "migrating-existing-subscriptions/",
      items: [
        Page({ slug: "receipt-imports" }),
        Page({ slug: "google-historical-import" }),
      ],
    }),
    SubCategory({
      label: "Do I need the SDK?",
      slug: "sdk-or-not",
      itemsPathPrefix: "",
      items: [
        Page({ slug: "sdk-or-not/sdk-less-integration" }),
        Page({ slug: "sdk-or-not/finishing-transactions" }),
      ],
    }),
  ],
});

const sdkMigrationCategory = Category({
  iconName: "file-document",
  label: "SDK Reference",
  itemsPathPrefix: "",
  items: [
    Page({ slug: "platform-resources/sdk-reference" }),
    Page({ slug: "platform-resources/sample-apps" }),
    SubCategory({
      label: "Android Migration Guides",
      itemsPathPrefix: "sdk-guides/",
      items: [
        Page({ slug: "android-native-4x-to-5x-migration" }),
        Page({ slug: "android-native-5x-to-6x-migration" }),
        Page({ slug: "android-native-6x-to-7x-migration" }),
        Page({ slug: "android-native-7x-to-8x-migration" }),
      ],
      index: {
        title: "Android Migration Guides",
        link: "sdk-guides/android-migration-guides",
      },
    }),
    SubCategory({
      label: "iOS Migration Guides",
      itemsPathPrefix: "sdk-guides/",
      items: [
        Page({ slug: "ios-native-3x-to-4x-migration" }),
        Page({ slug: "ios-native-4x-to-5x-migration" }),
      ],
      index: {
        title: "iOS Migration Guides",
        link: "sdk-guides/ios-migration-guides",
      },
    }),
  ],
});

const metricsCategory = Category({
  iconName: "chart-pie",
  label: "Metrics",
  itemsPathPrefix: "dashboard-and-metrics/",
  items: [
    Page({ slug: "overview" }),
    Page({ slug: "taxes-and-commissions" }),
    Page({ slug: "performance-summaries" }),
    Page({ slug: "anomaly-detection-notifications" }),
    Page({ slug: "display-currency" }),
    Page({ slug: "reconciling-with-financial-reports" }),
  ],
});

const chartsCategory = Category({
  iconName: "chart-bar",
  label: "Charts",
  itemsPathPrefix: "dashboard-and-metrics/",
  items: [
    Page({ slug: "charts" }),
    SubCategory({
      label: "Actives Charts",
      items: [
        Page({ slug: "charts/active-subscriptions-chart" }),
        Page({ slug: "charts/active-subscriptions-movement-chart" }),
        Page({ slug: "charts/active-trials-chart" }),
        Page({ slug: "charts/active-trials-movement-chart" }),
      ],
      index: {
        title: "Active Charts",
        link: "dashboard-and-metrics/charts/active-charts",
      },
    }),
    SubCategory({
      label: "Conversion Charts",
      items: [
        Page({ slug: "charts/trial-conversion-chart" }),
        Page({ slug: "charts/initial-conversion-chart" }),

        Page({ slug: "charts/conversion-to-paying-chart" }),
      ],
      index: {
        title: "Conversion Charts",
        link: "dashboard-and-metrics/charts/conversion-charts",
      },
    }),
    SubCategory({
      label: "Customer Charts",
      items: [
        Page({ slug: "charts/subscription-status-chart" }),
        Page({ slug: "charts/new-customers-chart" }),
        Page({ slug: "charts/customer-center-survey-responses-chart" }),
        Page({ slug: "charts/app-store-refund-requests-chart" }),
        Page({ slug: "charts/play-store-cancel-reasons-chart" }),
      ],
      index: {
        title: "Customer Charts",
        link: "dashboard-and-metrics/charts/customer-charts",
      },
    }),
    SubCategory({
      label: "Explorer Charts",
      items: [
        Page({ slug: "charts/cohort-explorer" }),
        Page({ slug: "charts/prediction-explorer" }),
      ],
      index: {
        title: "Explorer Charts",
        link: "dashboard-and-metrics/charts/explorer-charts",
      },
    }),
    SubCategory({
      label: "LTV Charts",
      items: [
        Page({ slug: "charts/realized-ltv-per-customer-chart" }),
        Page({ slug: "charts/realized-ltv-per-paying-customer-chart" }),
        Page({ slug: "charts/churn-chart" }),
      ],
      index: {
        title: "LTV Charts",
        link: "dashboard-and-metrics/charts/ltv-charts",
      },
    }),
    SubCategory({
      label: "Purchase Charts",
      items: [
        Page({ slug: "charts/new-paid-subscriptions-chart" }),
        Page({ slug: "charts/new-trials-chart" }),
        Page({ slug: "charts/non-subscription-purchases-chart" }),
        Page({ slug: "charts/refund-rate-chart" }),
      ],
      index: {
        title: "Purchase Charts",
        link: "dashboard-and-metrics/charts/purchase-charts",
      },
    }),
    SubCategory({
      label: "Retention Charts",
      items: [Page({ slug: "charts/subscription-retention-chart" })],
      index: {
        title: "Retention Charts",
        link: "dashboard-and-metrics/charts/retention-charts",
      },
    }),
    SubCategory({
      label: "Revenue Charts",
      items: [
        Page({ slug: "charts/revenue-chart" }),
        Page({ slug: "charts/annual-recurring-revenue-arr-chart" }),
        Page({ slug: "charts/monthly-recurring-revenue-mrr-chart" }),
        Page({ slug: "charts/monthly-recurring-revenue-movement-chart" }),
      ],
      index: {
        title: "Revenue Charts",
        link: "dashboard-and-metrics/charts/revenue-charts",
      },
    }),
    Page({ slug: "charts/charts-feature-incomplete-periods" }),
  ],
});

const dataExportCategory = Category({
  iconName: "file-download",
  label: "Data Exports",
  itemsPathPrefix: "integrations/",
  items: [
    Page({ slug: "data-onboarding" }),
    Page({ slug: "scheduled-data-exports" }),
    SubCategory({
      label: "Configuration",
      itemsPathPrefix: "scheduled-data-exports/",
      items: [
        Page({ slug: "scheduled-data-exports-s3" }),
        Page({ slug: "scheduled-data-exports-azure" }),
        Page({ slug: "scheduled-data-exports-gcp" }),
      ],
      index: {
        title: "Configuration",
        link: "integrations/scheduled-data-exports/configuration",
      },
    }),
    SubCategory({
      label: "Data Export Versions",
      itemsPathPrefix: "scheduled-data-exports/",
      items: [
        Page({ slug: "data-export-version-5" }),
        Page({ slug: "data-export-version-4" }),
        Page({ slug: "data-export-version-3" }),
      ],
      index: {
        title: "Data Export Versions",
        link: "integrations/scheduled-data-exports/data-export-versions",
      },
    }),
  ],
});

const experimentsCategory = Category({
  iconName: "experiment",
  label: "Experiments",
  itemsPathPrefix: "tools/",
  items: [
    Page({ slug: "experiments-v1" }),
    Page({ slug: "experiments-v1/experiments-overview-v1" }),
    SubCategory({
      label: "Creating Experiments",
      slug: "experiments-v1/configuring-experiments-v1",
      items: [Page({ slug: "experiments-v1/creating-offerings-to-test" })],
    }),
    SubCategory({
      label: "Analyzing Results",
      slug: "experiments-v1/experiments-results-v1",
      items: [Page({ slug: "experiments-v1/experiment-results-summaries" })],
    }),
  ],
});

const guidesCategory = Category({
  iconName: "sparkle",
  label: "Guides",
  itemsPathPrefix: "",
  items: [
    Page({ slug: "platform-resources/implementation-responsibilities" }),
    Page({ slug: "platform-resources/developer-store-payments" }),
    Page({ slug: "migrating-to-revenuecat/swiftystorekit" }),
    SubCategory({
      label: "Testing Guide",
      slug: "guides/testing-guide",
      itemsPathPrefix: "guides/testing-guide/",
      items: [Page({ slug: "use-cases" }), Page({ slug: "export-examples" })],
    }),
    Page({ slug: "guides/environment-strategies" }),
    Page({ slug: "guides/common-architecture" }),
    Page({ slug: "tools/paywall-orchestration-with-offerings" }),
  ],
});

const knownStoreIssuesCategory = Category({
  iconName: "heart-broken",
  label: "Known Issues",
  itemsPathPrefix: "known-store-issues/",
  items: [
    SubCategory({
      label: "StoreKit",
      slug: "storekit",
      itemsPathPrefix: "storekit/",
      items: [
        Page({ slug: "ios-18-4-simulator-fails-to-load-products" }),
        Page({ slug: "ios-18-4-canceled-state-after-successful-purchase" }),
        Page({
          slug: "ios-18-purchase-fails-due-to-failed-storekitdaemon-connection",
        }),
        Page({ slug: "ios-18-2-purchase-sheet-may-fail-to-appear" }),
      ],
    }),
    SubCategory({
      label: "Xcode 26 beta",
      slug: "xcode-26",
      itemsPathPrefix: "xcode-26/",
      items: [Page({ slug: "app-crash-urlsessionconfiguration" })],
    }),
  ],
});

const aiToolsCategory = Category({
  iconName: "experiment",
  label: "AI Tools",
  itemsPathPrefix: "tools/",
  items: [
    SubCategory({
      label: "RevenueCat MCP Server",
      slug: "mcp",
      itemsPathPrefix: "mcp/",
      items: [
        Page({ slug: "overview" }),
        Page({ slug: "setup" }),
        Page({ slug: "tools-reference" }),
        Page({ slug: "usage-examples" }),
        Page({ slug: "best-practices-and-troubleshooting" }),
      ],
      index: {
        title: "RevenueCat MCP Server",
        link: "tools/mcp",
        description:
          "AI-powered subscription management through natural language interactions",
      },
    }),
  ],
});

const chartsDummyCategory = Category({
  iconName: "chart-bar",
  label: "Charts & Metrics",
  itemsPathPrefix: "",
  items: [
    Link({
      label: "Overview Metrics",
      slug: "/dashboard-and-metrics/overview",
    }),
    Link({ label: "Charts", slug: "/dashboard-and-metrics/charts" }),
  ],
});

const integrationsDummyCategory = Category({
  iconName: "integrations",
  label: "Events & Integrations Reference",
  itemsPathPrefix: "",
  items: [
    Link({ label: "Events", slug: "/integrations/integrations" }),
    Link({ label: "Attribution & MMPs", slug: "/integrations/attribution" }),
    Link({
      label: "Third-Party Integrations",
      slug: "/integrations/third-party-integrations",
    }),
    Link({ label: "Webhooks", slug: "/integrations/webhooks" }),
  ],
});

const eventsCategory = Category({
  iconName: "realtime",
  label: "Events",
  itemsPathPrefix: "",
  items: [Page({ slug: "integrations/integrations" })],
});

const webhooksCategory = Category({
  iconName: "notification",
  label: "Webhooks",
  itemsPathPrefix: "",
  items: [
    Page({ slug: "integrations/webhooks" }),
    SubCategory({
      label: "Resources",
      itemsPathPrefix: "integrations/webhooks/",
      items: [
        Page({ slug: "event-flows" }),
        Page({ slug: "event-types-and-fields" }),
        Page({ slug: "sample-events" }),
      ],
      index: { title: "Resources", link: "integrations/webhooks/resources" },
    }),
  ],
});

const attributionCategory = Category({
  iconName: "integrations",
  label: "Attribution & MMPs",
  itemsPathPrefix: "",
  items: [
    Page({ slug: "integrations/attribution" }),
    SubCategory({
      label: "Supported Providers",
      itemsPathPrefix: "integrations/attribution/",
      items: [
        Page({ slug: "adjust" }),
        Page({ slug: "apple-search-ads" }),
        Page({ slug: "appsflyer" }),
        Page({ slug: "branch" }),
        Page({ slug: "kochava" }),
        Page({ slug: "meta-ads" }),
        Page({ slug: "singular" }),
        Page({ slug: "splitmetrics-acquire" }),
        Page({ slug: "tenjin" }),
      ],
      index: {
        title: "Supported Providers",
        link: "integrations/attribution/supported-providers",
      },
    }),
  ],
});

const thirdPartyIntegrationsCategory = Category({
  iconName: "integrations",
  label: "Integrations",
  itemsPathPrefix: "",
  items: [
    Page({ slug: "integrations/third-party-integrations" }),
    SubCategory({
      label: "Supported Integrations",
      itemsPathPrefix: "integrations/third-party-integrations/",
      items: [
        Page({ slug: "airship" }),
        Page({ slug: "amplitude" }),
        Page({ slug: "braze" }),
        Page({ slug: "clevertap" }),
        Page({ slug: "customerio" }),
        Page({ slug: "discord" }),
        Page({ slug: "firebase-integration" }),
        Page({ slug: "intercom" }),
        Page({ slug: "iterable" }),
        Page({ slug: "mixpanel" }),
        Page({ slug: "mparticle" }),
        Page({ slug: "onesignal" }),
        Page({ slug: "posthog" }),
        Page({ slug: "segment" }),
        Page({ slug: "slack" }),
        Page({ slug: "statsig" }),
        Page({ slug: "superwall" }),
        Page({ slug: "telemetrydeck" }),
      ],
      index: {
        title: "Supported Integrations",
        link: "integrations/third-party-integrations/supported-integrations",
      },
    }),
  ],
});

const integrationsMoreCategory = Category({
  iconName: "sparkle",
  label: "More",
  itemsPathPrefix: "",
  items: [
    Link({
      label: "Scheduled Data Exports",
      slug: "/integrations/scheduled-data-exports",
    }),
    Page({ slug: "integrations/partner-built-integrations" }),
    Page({ slug: "integrations/stripe-app" }),
  ],
});

const playbooksOverviewCategory = Category({
  iconName: "sparkle",
  label: "Playbooks",
  itemsPathPrefix: "playbooks/",
  items: [Page({ slug: "overview" })],
});

const playbooksMonetizationCategory = Category({
  iconName: "currency-usd",
  iconColor: "var(--ifm-color-success)",
  label: "Monetization Models",
  itemsPathPrefix: "playbooks/guides/",
  items: [
    Page({ slug: "hard-paywall" }),
    Page({ slug: "freemium" }),
    SubCategory({
      label: "Other resources",
      items: [
        Link({
          label: "Implementing virtual currencies and credits",
          slug: "/offerings/virtual-currency",
        }),
        Link({
          label: "Converting a paid app to subscriptions",
          slug: "https://www.revenuecat.com/blog/engineering/converting-a-paid-ios-app-to-subscriptions/",
        }),
      ],
      index: {
        title: "Other resources",
        description:
          "Other resources for implementing different monetization models.",
        link: "playbooks/guides/other-monetization-resources",
      },
    }),
  ],
});

// Add the top level categories to the defaultSidebar object
// The defaultSidebar is referenced in docusaurus.config.js
const sidebars = {
  defaultSidebar: [
    welcomeCategory,
    projectsCategory,
    mobileSDKCategory,
    webSDKCategory,
    offeringsCategory,
    paywallsCategory,
    customersCategory,
    chartsDummyCategory,
    experimentsCategory,
    aiToolsCategory,
    testAndLaunchCategory,
    integrationsDummyCategory,
    platformResourcesCategory,
    accountCategory,
    supportCategory,
    migrateToRevenueCatCategory,
    guidesCategory,
    knownStoreIssuesCategory,
    sdkMigrationCategory,
  ],
  dataSidebar: [metricsCategory, chartsCategory, dataExportCategory],
  integrationsSidebar: [
    eventsCategory,
    webhooksCategory,
    thirdPartyIntegrationsCategory,
    attributionCategory,
    integrationsMoreCategory,
  ],
  playbookSidebar: [playbooksOverviewCategory, playbooksMonetizationCategory],
};

export default sidebars;
