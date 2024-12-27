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
  emoji: "👋",
  label: "New to RevenueCat?",
  itemsPathPrefix: "",
  items: [
    SubCategory({
      label: "Welcome",
      slug: "welcome/overview",
      items: [
        Page({ slug: "welcome/set-up-revenuecat/account-management" }),
        SubCategory({
          label: "Security",
          slug: "welcome/set-up-revenuecat/security",
          items: [Page({ slug: "dashboard-and-metrics/audit-logs" })],
        }),
      ],
    }),
    SubCategory({
      label: "Migrate to RevenueCat",
      slug: "migrating-to-revenuecat/migration-paths",
      itemsPathPrefix: "migrating-to-revenuecat/",
      items: [
        SubCategory({
          label: "Choose your Integration Path",
          slug: "sdk-or-not",
          itemsPathPrefix: "sdk-or-not/",
          items: [
            Page({ slug: "sdk-less-integration" }),
            Page({ slug: "finishing-transactions" }),
          ],
        }),
        SubCategory({
          label: "Import Historical Purchases",
          slug: "migrating-existing-subscriptions",
          itemsPathPrefix: "migrating-existing-subscriptions/",
          items: [
            Page({ slug: "receipt-imports" }),
            Page({ slug: "google-historical-import" }),
          ],
        }),
        Page({ slug: "swiftystorekit" }),
      ],
    }),
  ],
});

const projectsCategory = Category({
  emoji: "📱",
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
        Page({ slug: "amazon-server-notifications" }),
      ],
    }),
    Page({ slug: "projects/authentication" }),
    Page({ slug: "projects/collaborators" }),
  ],
});

const mobileSDKCategory = Category({
  emoji: "📲",
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
        Page({ slug: "flutter" }),
        Page({ slug: "kotlin-multiplatform" }),
        Page({ slug: "capacitor" }),
        Page({ slug: "cordova" }),
        Page({ slug: "unity" }),
        Page({ slug: "web-sdk" }),
        Page({ slug: "macos" }),
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
    Link({
      label: "Checking Subscription Status",
      slug: "/customers/customer-info",
    }),
  ],
});

const paywallsCategory = Category({
  emoji: "🧱",
  label: "Paywalls",
  itemsPathPrefix: "",
  items: [
    SubCategory({
      label: "Paywalls",
      slug: "tools/paywalls",
      itemsPathPrefix: "tools/paywalls/",
      items: [
        Page({ slug: "creating-paywalls" }),
        Page({ slug: "displaying-paywalls" }),
      ],
    }),
    SubCategory({
      label: "Custom Paywalls",
      itemsPathPrefix: "getting-started/",
      items: [
        Page({ slug: "displaying-products" }),
        SubCategory({
          label: "Making Purchases",
          slug: "making-purchases",
          items: [
            Page({
              slug: "making-purchases/android-with-jetpack-compose",
            }),
          ],
        }),
        Page({ slug: "restoring-purchases" }),
      ],
      // TODO: add a custom page for this, i.e. 'slug' instead of 'index'
      index: {
        title: "Custom Paywalls",
        link: "paywalls/custom-paywalls",
      },
    }),
  ],
});

const webSDKCategory = Category({
  emoji: "🌎",
  label: "Web Purchases",
  itemsPathPrefix: "web/",
  items: [
    Page({ slug: "connect-stripe-account" }),
    SubCategory({
      label: "RevenueCat Billing & Web SDK",
      slug: "revenuecat-billing",
      itemsPathPrefix: "revenuecat-billing/",
      items: [
        Page({ slug: "product-setup" }),
        Page({ slug: "customization" }),
        Page({ slug: "subscription-lifecycle" }),
        Page({ slug: "payment-methods" }),
        Page({ slug: "multi-currency-support" }),
        Page({ slug: "managing-customer-subscriptions" }),
        Page({ slug: "refunding-payments" }),
        Page({ slug: "customer-portal" }),
        Page({ slug: "web-paywall-links" }),
        Page({ slug: "localization" }),
        Page({ slug: "redemption-links" }),
      ],
    }),
    Page({ slug: "stripe" }),
  ],
});

const offeringsCategory = Category({
  emoji: "💰",
  label: "Offerings & Entitlements",
  itemsPathPrefix: "",
  items: [
    SubCategory({
      label: "Products Overview",
      slug: "getting-started/entitlements",
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
            Link({
              label: "RevenueCat Billing Product Setup",
              slug: "/web/revenuecat-billing/product-setup",
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
      label: "Entitlements",
      slug: "offerings/entitlements",
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
  ],
});

const customersCategory = Category({
  emoji: "👥",
  label: "Customers",
  itemsPathPrefix: "",
  items: [
    SubCategory({
      label: "What is a Customer?",
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
        Page({ slug: "customer-center-integration" }),
        Page({ slug: "customer-center-configuration" }),
      ],
    }),
    Page({ slug: "dashboard-and-metrics/customer-lists" }),
    Page({ slug: "dashboard-and-metrics/supporting-your-customers" }),
  ],
});

const testAndLaunchCategory = Category({
  emoji: "🧰",
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

const integrationsCategory = Category({
  emoji: "🔌",
  label: "Integrations",
  itemsPathPrefix: "integrations/",
  items: [
    Page({ slug: "integrations" }),
    SubCategory({
      label: "Attribution Integrations",
      slug: "attribution",
      itemsPathPrefix: "attribution/",
      items: [
        Page({ slug: "adjust" }),
        Page({ slug: "apple-search-ads" }),
        Page({ slug: "appsflyer" }),
        Page({ slug: "branch" }),
        Page({ slug: "facebook-ads" }),
        Page({ slug: "kochava" }),
        Page({ slug: "singular" }),
        Page({ slug: "splitmetrics-acquire" }),
        Page({ slug: "tenjin" }),
      ],
    }),
    SubCategory({
      label: "Third-Party Integrations",
      slug: "third-party-integrations",
      itemsPathPrefix: "third-party-integrations/",
      items: [
        Page({ slug: "airship" }),
        Page({ slug: "amplitude" }),
        Page({ slug: "braze" }),
        Page({ slug: "clevertap" }),
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
        Page({ slug: "telemetrydeck" }),
        Page({ slug: "statsig" }),
        Page({ slug: "superwall" }),
      ],
    }),
    SubCategory({
      label: "Webhooks",
      slug: "webhooks",
      itemsPathPrefix: "webhooks/",
      items: [
        Page({ slug: "event-flows" }),
        Page({ slug: "event-types-and-fields" }),
        Page({ slug: "sample-events" }),
      ],
    }),
    Link({
      label: "Scheduled Data Exports",
      slug: "/integrations/scheduled-data-exports",
    }),
    Page({ slug: "partner-built-integrations" }),
    Page({ slug: "stripe-app" }),
  ],
});

const platformResourcesCategory = Category({
  emoji: "📚",
  label: "Platform Resources",
  itemsPathPrefix: "platform-resources/",
  items: [
    SubCategory({
      label: "Apple Platform Resources",
      slug: "apple-platform-resources",
      itemsPathPrefix: "apple-platform-resources/",
      items: [
        Page({ slug: "app-store-small-business-program" }),
        Page({ slug: "apple-app-privacy" }),
        Page({ slug: "apple-family-sharing" }),
        Page({ slug: "legacy-mac-apps" }),
        Page({ slug: "swiftui-helpers" }),
        Page({ slug: "handling-refund-requests" }),
      ],
    }),
    SubCategory({
      label: "Google Platform Resources",
      slug: "google-platform-resources",
      itemsPathPrefix: "google-platform-resources/",
      items: [
        Page({ slug: "google-play-pass" }),
        Page({ slug: "reduced-service-fee" }),
        Page({ slug: "google-plays-data-safety" }),
        Page({ slug: "google-play-quota-increase-request" }),
      ],
    }),
    SubCategory({
      label: "Amazon Platform Resources",
      slug: "amazon-platform-resources",
      itemsPathPrefix: "amazon-platform-resources/",
      items: [Page({ slug: "amazon-small-business-accelerator-program" })],
    }),
  ],
});

const serviceCredentialsCategory = Category({
  emoji: "🔑",
  label: "Service Credentials",
  itemsPathPrefix: "service-credentials/",
  items: [
    SubCategory({
      label: "Apple App Store",
      slug: "itunesconnect-app-specific-shared-secret",
      itemsPathPrefix: "itunesconnect-app-specific-shared-secret/",
      items: [
        Page({ slug: "in-app-purchase-key-configuration" }),
        Page({ slug: "app-store-connect-api-key-configuration" }),
      ],
    }),
    SubCategory({
      label: "Google Play Store",
      slug: "creating-play-service-credentials",
      itemsPathPrefix: "creating-play-service-credentials/",
      items: [Page({ slug: "google-play-checklists" })],
    }),
    Page({ slug: "amazon-appstore-credentials" }),
    Page({ slug: "roku-credentials" }),
  ],
});

const supportCategory = Category({
  emoji: "🛟",
  label: "RevenueCat Support",
  itemsPathPrefix: "revenuecat-support/",
  items: [
    Page({ slug: "support-first-steps" }),
    Page({ slug: "general-troubleshooting" }),
  ],
});

const sdkMigrationCategory = Category({
  emoji: "📘",
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
  emoji: "📊",
  label: "Metrics",
  itemsPathPrefix: "dashboard-and-metrics/",
  items: [
    Page({ slug: "overview" }),
    Page({ slug: "taxes-and-commissions" }),
    Page({ slug: "performance-summaries" }),
    Page({ slug: "display-currency" }),
  ],
});

const chartsCategory = Category({
  emoji: "📈",
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
  emoji: "📦",
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
  emoji: "🧪",
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
  emoji: "📚",
  label: "Guides",
  itemsPathPrefix: "",
  items: [
    Page({ slug: "platform-resources/implementation-responsibilities" }),
    Page({ slug: "platform-resources/developer-store-payments" }),
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

const chartsDummyCategory = Category({
  emoji: "📈",
  label: "Charts & Metrics",
  itemsPathPrefix: "",
  items: [
    Link({
      label: "Overview Metrics",
      slug: "/dashboard-and-metrics/overview",
    }),
    Link({
      label: "Charts",
      slug: "/dashboard-and-metrics/charts",
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
    testAndLaunchCategory,
    integrationsCategory,
    platformResourcesCategory,
    serviceCredentialsCategory,
    supportCategory,
    guidesCategory,
    sdkMigrationCategory,
  ],
  dataSidebar: [metricsCategory, chartsCategory, dataExportCategory],
};

export default sidebars;
