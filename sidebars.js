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
  emoji: "😺",
  label: "Welcome to RevenueCat",
  itemsPathPrefix: "welcome/",
  items: [
    Page({ slug: "overview" }),
    SubCategory({
      label: "Setting up RevenueCat",
      slug: "projects",
      itemsPathPrefix: "projects/",
      items: [
        Page({ slug: "collaborators" }),
        Page({ slug: "security" }),
        Page({ slug: "account-management" }),
      ],
    }),
    Page({ slug: "authentication" }),
  ],
});

const projectsCategory = Category({
  emoji: "🚀",
  label: "Projects",
  itemsPathPrefix: "projects/",
  items: [Page({ slug: "projects" })],
});

const gettingStartedCategory = Category({
  emoji: "🚀",
  label: "Getting Started",
  itemsPathPrefix: "getting-started/",
  items: [
    Page({ slug: "quickstart" }),
    SubCategory({
      label: "Configuring Products",
      slug: "entitlements",
      itemsPathPrefix: "entitlements/",
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
    }),
    SubCategory({
      label: "Installing the SDK",
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
      label: "Configuring the SDK",
      slug: "configuring-sdk",
      items: [Page({ slug: "configuring-sdk/ios-app-extensions" })],
    }),
    Link({ label: "Identifying Users", slug: "/customers/user-ids" }),
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
    Link({
      label: "Checking Subscription Status",
      slug: "/customers/customer-info",
    }),
    Link({
      label: "Configuring Server Notifications",
      slug: "/platform-resources/server-notifications",
    }),
    Page({ slug: "data-onboarding" }),
  ],
});

const migratingCategory = Category({
  emoji: "➡️",
  label: "Migrating to RevenueCat",
  itemsPathPrefix: "migrating-to-revenuecat/",
  items: [
    Page({ slug: "migration-paths" }),
    SubCategory({
      label: "Choosing your Integration Path",
      slug: "sdk-or-not",
      itemsPathPrefix: "sdk-or-not/",
      items: [
        Page({ slug: "sdk-less-integration" }),
        Page({ slug: "finishing-transactions" }),
      ],
    }),
    SubCategory({
      label: "Importing Historical Purchases",
      slug: "migrating-existing-subscriptions",
      itemsPathPrefix: "migrating-existing-subscriptions/",
      items: [
        Page({ slug: "receipt-imports" }),
        Page({ slug: "google-historical-import" }),
      ],
    }),
    Page({ slug: "swiftystorekit" }),
  ],
});

const webPurchasesCategory = Category({
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

const customersCategory = Category({
  emoji: "👥",
  label: "Customers",
  itemsPathPrefix: "customers/",
  items: [
    Page({ slug: "user-ids" }),
    Page({ slug: "customer-info" }),
    Page({ slug: "customer-attributes" }),
    Page({ slug: "trusted-entitlements" }),
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
    SubCategory({
      label: "Testing Guide",
      slug: "testing-guide",
      itemsPathPrefix: "testing-guide/",
      items: [Page({ slug: "use-cases" }), Page({ slug: "export-examples" })],
    }),
    Page({ slug: "environment-strategies" }),
    Page({ slug: "launch-checklist" }),
    Page({ slug: "app-store-rejections" }),
  ],
});

const subscriptionGuidanceCategory = Category({
  emoji: "📝",
  label: "Subscription Guidance",
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
    Page({ slug: "common-architecture" }),
  ],
});

const dashboardCategory = Category({
  emoji: "📊",
  label: "Dashboard & Metrics",
  itemsPathPrefix: "dashboard-and-metrics/",
  items: [
    Page({ slug: "overview" }),
    Link({
      label: "Charts",
      slug: "/dashboard-and-metrics/charts",
    }),
    SubCategory({
      label: "Customer History",
      slug: "customer-history",
      itemsPathPrefix: "customer-history/",
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
    Page({ slug: "customer-lists" }),
    Page({ slug: "taxes-and-commissions" }),
    Page({ slug: "performance-summaries" }),
    Page({ slug: "display-currency" }),
    Page({ slug: "supporting-your-customers" }),
    Page({ slug: "audit-logs" }),
  ],
});

const toolsCategory = Category({
  emoji: "🛠",
  label: "Tools",
  itemsPathPrefix: "tools/",
  items: [
    SubCategory({
      label: "Paywalls",
      slug: "paywalls",
      itemsPathPrefix: "paywalls/",
      items: [
        Page({ slug: "creating-paywalls" }),
        Page({ slug: "displaying-paywalls" }),
      ],
    }),
    SubCategory({
      label: "Offering Metadata",
      slug: "offering-metadata",
      itemsPathPrefix: "offering-metadata/",
      items: [Page({ slug: "offering-metadata-examples" })],
    }),
    Link({
      label: "Experiments",
      slug: "/tools/experiments-v1",
    }),
    SubCategory({
      label: "Targeting",
      slug: "targeting",
      itemsPathPrefix: "targeting/",
      items: [
        Page({ slug: "placements" }),
        Page({ slug: "custom-attributes" }),
      ],
    }),
    SubCategory({
      label: "Customer Center",
      slug: "customer-center",
      itemsPathPrefix: "customer-center/",
      items: [
        Page({ slug: "customer-center-integration" }),
        Page({ slug: "customer-center-configuration" }),
      ],
    }),
    Page({ slug: "paywall-orchestration-with-offerings" }),
  ],
});

const integrationsCategory = Category({
  emoji: "🔌",
  label: "Integrations",
  itemsPathPrefix: "integrations/",
  items: [
    Page({ slug: "integrations" }),
    SubCategory({
      label: "Attribution",
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
      label: "Scheduled Data Exports",
      slug: "scheduled-data-exports",
      itemsPathPrefix: "scheduled-data-exports/",
      items: [
        Page({ slug: "data-export-version-3" }),
        Page({ slug: "data-export-version-4" }),
        Page({ slug: "data-export-version-5" }),
        Page({ slug: "scheduled-data-exports-azure" }),
        Page({ slug: "scheduled-data-exports-gcp" }),
        Page({ slug: "scheduled-data-exports-s3" }),
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
    Page({ slug: "partner-built-integrations" }),
    Page({ slug: "stripe-app" }),
  ],
});

const platformResourcesCategory = Category({
  emoji: "📚",
  label: "Platform Resources",
  itemsPathPrefix: "platform-resources/",
  items: [
    Page({ slug: "implementation-responsibilities" }),
    Page({ slug: "developer-store-payments" }),
    Page({ slug: "sdk-reference" }),
    SubCategory({
      label: "Amazon Platform Resources",
      slug: "amazon-platform-resources",
      itemsPathPrefix: "amazon-platform-resources/",
      items: [Page({ slug: "amazon-small-business-accelerator-program" })],
    }),
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
    Page({ slug: "non-subscriptions" }),
    SubCategory({
      label: "Platform Server Notifications",
      slug: "server-notifications",
      itemsPathPrefix: "server-notifications/",
      items: [
        Page({ slug: "apple-server-notifications" }),
        Page({ slug: "google-server-notifications" }),
        Page({ slug: "stripe-server-notifications" }),
        Page({ slug: "amazon-server-notifications" }),
      ],
    }),
    Page({ slug: "sample-apps" }),
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
  label: "SDK Migration Guides",
  itemsPathPrefix: "sdk-guides/",
  items: [
    Page({ slug: "android-native-4x-to-5x-migration" }),
    Page({ slug: "android-native-5x-to-6x-migration" }),
    Page({ slug: "android-native-6x-to-7x-migration" }),
    Page({ slug: "android-native-7x-to-8x-migration" }),
    Page({ slug: "ios-native-3x-to-4x-migration" }),
    Page({ slug: "ios-native-4x-to-5x-migration" }),
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
  itemsPathPrefix: "tools/experiments-v1/",
  items: [
    Page({ slug: "experiments-overview-v1" }),
    SubCategory({
      label: "Creating Experiments",
      slug: "configuring-experiments-v1",
      items: [Page({ slug: "creating-offerings-to-test" })],
    }),
    SubCategory({
      label: "Analyzing Results",
      slug: "experiments-results-v1",
      items: [Page({ slug: "experiment-results-summaries" })],
    }),
  ],
});

// Add the top level categories to the defaultSidebar object
// The defaultSidebar is referenced in docusaurus.config.js
const sidebars = {
  defaultSidebar: [
    welcomeCategory,
    gettingStartedCategory,
    migratingCategory,
    webPurchasesCategory,
    customersCategory,
    testAndLaunchCategory,
    subscriptionGuidanceCategory,
    dashboardCategory,
    toolsCategory,
    integrationsCategory,
    platformResourcesCategory,
    serviceCredentialsCategory,
    supportCategory,
    sdkMigrationCategory,
  ],
  growthSidebar: [chartsCategory, experimentsCategory, dataExportCategory],
};

export default sidebars;
