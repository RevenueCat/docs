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
  PageWithCustomLabel,
} from "./src/sidebars/sidebar-utils";

// The sidebar is a tree of categories and pages.
// Options:
//    Category - Top level categories with an emoji
//    Subcategory - Page with a collection of subpages
//    Page - An individual doc
//    Link - A link to a different doc
//
// Each page has a path. The path is relative to the path of its parent.
// i.e. Category -> Sub-category -> Page
// "categories/welcome" -> "projects" -> "collaborators"
// rendered path: "categories/welcome/projects/collaborators"

const welcomeCategory = Category({
  emoji: "😺",
  label: "Welcome to RevenueCat",
  items: [
    Page({ slug: "welcome/overview" }),
    Page({ slug: "welcome/building-new" }),
    Page({ slug: "welcome/existing-apps" }),
    SubCategory({
      label: "Setting up RevenueCat",
      slug: "welcome/projects",
      items: [
        Page({ slug: "welcome/projects/collaborators" }),
        Page({ slug: "welcome/projects/security" }),
        Page({ slug: "welcome/projects/account-management" }),
      ],
    }),
    Page({ slug: "welcome/authentication" }),
  ],
});

const gettingStartedCategory = Category({
  emoji: "🚀",
  label: "Getting Started",
  items: [
    Page({ slug: "getting-started/quickstart" }),
    SubCategory({
      label: "Configuring Products",
      slug: "getting-started/entitlements",
      items: [
        Page({ slug: "getting-started/entitlements/ios-products" }),
        Page({ slug: "getting-started/entitlements/android-products" }),
        Page({
          slug: "getting-started/entitlements/google-subscriptions-and-backwards-compatibility",
        }),
        Page({ slug: "getting-started/entitlements/amazon-product-setup" }),
        Page({ slug: "getting-started/entitlements/stripe-products" }),
        Link({
          label: "RevenueCat Billing Product Setup",
          slug: "/web/revenuecat-billing/product-setup",
        }),
      ],
    }),
    SubCategory({
      label: "Installation",
      slug: "getting-started/installation",
      items: [
        Page({ slug: "getting-started/installation/ios" }),
        Page({ slug: "getting-started/installation/android" }),
        Page({ slug: "getting-started/installation/reactnative" }),
        Page({ slug: "getting-started/installation/flutter" }),
        Page({ slug: "getting-started/installation/kotlin-multiplatform" }),
        Page({ slug: "getting-started/installation/capacitor" }),
        Page({ slug: "getting-started/installation/cordova" }),
        Page({ slug: "getting-started/installation/unity" }),
        Page({ slug: "getting-started/installation/web-sdk" }),
        Page({ slug: "getting-started/installation/macos" }),
        Page({ slug: "getting-started/installation/app-builders" }),
      ],
    }),
    SubCategory({
      label: "Configuring the SDK",
      slug: "getting-started/configuring-sdk",
      items: [
        Page({ slug: "getting-started/configuring-sdk/ios-app-extensions" }),
      ],
    }),
    Link({ label: "Identifying Users", slug: "/customers/user-ids" }),
    SubCategory({
      label: "Custom Paywalls",
      items: [
        Page({ slug: "getting-started/displaying-products" }),
        SubCategory({
          label: "Making Purchases",
          slug: "getting-started/making-purchases",
          items: [
            Page({
              slug: "getting-started/making-purchases/android-with-jetpack-compose",
            }),
          ],
        }),
        Page({ slug: "getting-started/restoring-purchases" }),
      ],
    }),
    Link({
      label: "Checking Subscription Status",
      slug: "/customers/customer-info",
    }),
    Link({
      label: "Configuring Server Notifications",
      slug: "/platform-resources/server-notifications",
    }),
    Page({ slug: "getting-started/data-onboarding" }),
  ],
});

const migratingCategory = Category({
  emoji: "➡️",
  label: "Migrating to RevenueCat",
  items: [
    Page({ slug: "migrating-to-revenuecat/migration-paths" }),
    SubCategory({
      label: "Choosing your Integration Path",
      slug: "migrating-to-revenuecat/sdk-or-not",
      items: [
        Page({
          slug: "migrating-to-revenuecat/sdk-or-not/sdk-less-integration",
        }),
        Page({
          slug: "migrating-to-revenuecat/sdk-or-not/finishing-transactions",
        }),
      ],
    }),
    SubCategory({
      label: "Importing Historical Purchases",
      slug: "migrating-to-revenuecat/migrating-existing-subscriptions",
      items: [
        Page({
          slug: "migrating-to-revenuecat/migrating-existing-subscriptions/receipt-imports",
        }),
        Page({
          slug: "migrating-to-revenuecat/migrating-existing-subscriptions/google-historical-import",
        }),
      ],
    }),
    Page({ slug: "migrating-to-revenuecat/swiftystorekit" }),
  ],
});

const webPurchasesCategory = Category({
  emoji: "🌎",
  label: "Web Purchases",
  items: [
    Page({ slug: "web/connect-stripe-account" }),
    SubCategory({
      label: "RevenueCat Billing & Web SDK",
      slug: "web/revenuecat-billing",
      items: [
        Page({ slug: "web/revenuecat-billing/product-setup" }),
        Page({ slug: "web/revenuecat-billing/subscription-lifecycle" }),
        Page({
          slug: "web/revenuecat-billing/managing-customer-subscriptions",
        }),
        Page({ slug: "web/revenuecat-billing/customer-portal" }),
        Page({ slug: "web/revenuecat-billing/web-paywall-links" }),
      ],
    }),
    Page({ slug: "web/stripe" }),
  ],
});

const customersCategory = Category({
  emoji: "👥",
  label: "Customers",
  items: [
    Page({ slug: "customers/user-ids" }),
    Page({ slug: "customers/customer-info" }),
    Page({ slug: "customers/customer-attributes" }),
    Page({ slug: "customers/trusted-entitlements" }),
  ],
});

const testAndLaunchCategory = Category({
  emoji: "🧰",
  label: "Test & Launch",
  items: [
    SubCategory({
      label: "Debugging",
      slug: "test-and-launch/debugging",
      items: [
        Page({ slug: "test-and-launch/debugging/caching" }),
        Page({ slug: "test-and-launch/debugging/troubleshooting-the-sdks" }),
      ],
    }),
    Page({ slug: "test-and-launch/errors" }),
    SubCategory({
      label: "Sandbox Testing",
      slug: "test-and-launch/sandbox",
      items: [
        Page({ slug: "test-and-launch/sandbox/apple-app-store" }),
        Page({ slug: "test-and-launch/sandbox/google-play-store" }),
        Page({ slug: "test-and-launch/sandbox/amazon-store-sandbox-testing" }),
      ],
    }),
    Page({ slug: "test-and-launch/launch-checklist" }),
    Page({ slug: "test-and-launch/app-store-rejections" }),
  ],
});

const subscriptionGuidanceCategory = Category({
  emoji: "📝",
  label: "Subscription Guidance",
  items: [
    SubCategory({
      label: "Free Trials & Promo Offers",
      slug: "subscription-guidance/subscription-offers",
      items: [
        Page({
          slug: "subscription-guidance/subscription-offers/ios-subscription-offers",
        }),
        Page({
          slug: "subscription-guidance/subscription-offers/google-play-offers",
        }),
        Page({
          slug: "subscription-guidance/subscription-offers/stripe-free-trials",
        }),
      ],
    }),
    Page({ slug: "subscription-guidance/how-grace-periods-work" }),
    Page({ slug: "subscription-guidance/managing-subscriptions" }),
    Page({ slug: "subscription-guidance/price-changes" }),
    Page({ slug: "subscription-guidance/refunds" }),
    Page({ slug: "subscription-guidance/google-prepaid-plans" }),
  ],
});

const dashboardCategory = Category({
  emoji: "📊",
  label: "Dashboard & Metrics",
  items: [
    Page({ slug: "dashboard-and-metrics/overview" }),
    SubCategory({
      label: "Charts",
      slug: "dashboard-and-metrics/charts",
      items: [
        Page({
          slug: "dashboard-and-metrics/charts/active-subscriptions-chart",
        }),
        Page({
          slug: "dashboard-and-metrics/charts/active-subscriptions-movement-chart",
        }),
        Page({ slug: "dashboard-and-metrics/charts/active-trials-chart" }),
        Page({
          slug: "dashboard-and-metrics/charts/active-trials-movement-chart",
        }),
        Page({
          slug: "dashboard-and-metrics/charts/annual-recurring-revenue-arr-chart",
        }),
        Page({
          slug: "dashboard-and-metrics/charts/charts-feature-incomplete-periods",
        }),
        Page({ slug: "dashboard-and-metrics/charts/churn-chart" }),
        Page({ slug: "dashboard-and-metrics/charts/cohort-explorer" }),
        Page({
          slug: "dashboard-and-metrics/charts/conversion-to-paying-chart",
        }),
        Page({ slug: "dashboard-and-metrics/charts/initial-conversion-chart" }),
        Page({
          slug: "dashboard-and-metrics/charts/monthly-recurring-revenue-movement-chart",
        }),
        Page({
          slug: "dashboard-and-metrics/charts/monthly-recurring-revenue-mrr-chart",
        }),
        Page({
          slug: "dashboard-and-metrics/charts/new-paid-subscriptions-chart",
        }),
        Page({ slug: "dashboard-and-metrics/charts/new-trials-chart" }),
        Page({
          slug: "dashboard-and-metrics/charts/non-subscription-purchases-chart",
        }),
        Page({ slug: "dashboard-and-metrics/charts/prediction-explorer" }),
        Page({
          slug: "dashboard-and-metrics/charts/realized-ltv-per-customer-chart",
        }),
        Page({
          slug: "dashboard-and-metrics/charts/realized-ltv-per-paying-customer-chart",
        }),
        Page({ slug: "dashboard-and-metrics/charts/refund-rate-chart" }),
        Page({ slug: "dashboard-and-metrics/charts/revenue-chart" }),
        Page({
          slug: "dashboard-and-metrics/charts/subscription-retention-chart",
        }),
        Page({
          slug: "dashboard-and-metrics/charts/subscription-status-chart",
        }),
        Page({ slug: "dashboard-and-metrics/charts/trial-conversion-chart" }),
      ],
    }),
    SubCategory({
      label: "Customer History",
      slug: "dashboard-and-metrics/customer-history",
      items: [
        Page({
          slug: "dashboard-and-metrics/customer-history/active-entitlements",
        }),
        Page({ slug: "dashboard-and-metrics/customer-history/aliases-card" }),
        Page({ slug: "dashboard-and-metrics/customer-history/attributes" }),
        Page({
          slug: "dashboard-and-metrics/customer-history/attribution-card",
        }),
        Page({
          slug: "dashboard-and-metrics/customer-history/basic-information",
        }),
        Page({
          slug: "dashboard-and-metrics/customer-history/offering-override",
        }),
        Page({ slug: "dashboard-and-metrics/customer-history/promotionals" }),
        Page({ slug: "dashboard-and-metrics/customer-history/manage-users" }),
      ],
    }),
    Page({ slug: "dashboard-and-metrics/customer-lists" }),
    Page({ slug: "dashboard-and-metrics/taxes-and-commissions" }),
    Page({ slug: "dashboard-and-metrics/performance-summaries" }),
    Page({ slug: "dashboard-and-metrics/supporting-your-customers" }),
    Page({ slug: "dashboard-and-metrics/audit-logs" }),
  ],
});

const toolsCategory = Category({
  emoji: "🛠",
  label: "Tools",
  items: [
    SubCategory({
      label: "Paywalls",
      slug: "tools/paywalls",
      items: [
        Page({ slug: "tools/paywalls/creating-paywalls" }),
        Page({ slug: "tools/paywalls/displaying-paywalls" }),
      ],
    }),
    SubCategory({
      label: "Offering Metadata",
      slug: "tools/offering-metadata",
      items: [
        Page({ slug: "tools/offering-metadata/offering-metadata-examples" }),
      ],
    }),
    SubCategory({
      label: "Experiments",
      slug: "tools/experiments-v1",
      items: [
        Page({ slug: "tools/experiments-v1/experiments-overview-v1" }),
        Page({ slug: "tools/experiments-v1/creating-offerings-to-test" }),
        Page({ slug: "tools/experiments-v1/configuring-experiments-v1" }),
        Page({ slug: "tools/experiments-v1/experiments-results-v1" }),
      ],
    }),
    SubCategory({
      label: "Targeting",
      slug: "tools/targeting",
      items: [
        Page({ slug: "tools/targeting/placements" }),
        Page({ slug: "tools/targeting/custom-attributes" }),
      ],
    }),
    Page({ slug: "tools/paywall-orchestration-with-offerings" }),
  ],
});

const integrationsCategory = Category({
  emoji: "🔌",
  label: "Integrations",
  items: [
    Page({ slug: "integrations/integrations" }),
    SubCategory({
      label: "Attribution",
      slug: "integrations/attribution",
      items: [
        Page({ slug: "integrations/attribution/adjust" }),
        Page({ slug: "integrations/attribution/apple-search-ads" }),
        Page({ slug: "integrations/attribution/appsflyer" }),
        Page({ slug: "integrations/attribution/branch" }),
        Page({ slug: "integrations/attribution/facebook-ads" }),
        Page({ slug: "integrations/attribution/singular" }),
        Page({ slug: "integrations/attribution/splitmetrics-acquire" }),
        Page({ slug: "integrations/attribution/tenjin" }),
      ],
    }),
    SubCategory({
      label: "Scheduled Data Exports",
      slug: "integrations/scheduled-data-exports",
      items: [
        Page({
          slug: "integrations/scheduled-data-exports/data-export-version-3",
        }),
        Page({
          slug: "integrations/scheduled-data-exports/data-export-version-4",
        }),
        Page({
          slug: "integrations/scheduled-data-exports/data-export-version-5",
        }),
        Page({
          slug: "integrations/scheduled-data-exports/scheduled-data-exports-azure",
        }),
        Page({
          slug: "integrations/scheduled-data-exports/scheduled-data-exports-gcp",
        }),
        Page({
          slug: "integrations/scheduled-data-exports/scheduled-data-exports-s3",
        }),
      ],
    }),
    SubCategory({
      label: "Third-Party Integrations",
      slug: "integrations/third-party-integrations",
      items: [
        Page({ slug: "integrations/third-party-integrations/airship" }),
        Page({ slug: "integrations/third-party-integrations/amplitude" }),
        Page({ slug: "integrations/third-party-integrations/braze" }),
        Page({ slug: "integrations/third-party-integrations/clevertap" }),
        Page({ slug: "integrations/third-party-integrations/discord" }),
        Page({
          slug: "integrations/third-party-integrations/firebase-integration",
        }),
        Page({ slug: "integrations/third-party-integrations/intercom" }),
        Page({ slug: "integrations/third-party-integrations/iterable" }),
        Page({ slug: "integrations/third-party-integrations/mixpanel" }),
        Page({ slug: "integrations/third-party-integrations/mparticle" }),
        Page({ slug: "integrations/third-party-integrations/onesignal" }),
        Page({ slug: "integrations/third-party-integrations/segment" }),
        Page({ slug: "integrations/third-party-integrations/slack" }),
        Page({ slug: "integrations/third-party-integrations/statsig" }),
        Page({ slug: "integrations/third-party-integrations/superwall" }),
      ],
    }),
    SubCategory({
      label: "Webhooks",
      slug: "integrations/webhooks",
      items: [
        Page({ slug: "integrations/webhooks/event-flows" }),
        Page({ slug: "integrations/webhooks/event-types-and-fields" }),
        Page({ slug: "integrations/webhooks/sample-events" }),
      ],
    }),
    Page({ slug: "integrations/partner-built-integrations" }),
    Page({ slug: "integrations/stripe-app" }),
  ],
});

const platformResourcesCategory = Category({
  emoji: "📚",
  label: "Platform Resources",
  items: [
    Page({ slug: "platform-resources/implementation-responsibilities" }),
    Page({ slug: "platform-resources/developer-store-payments" }),
    Page({ slug: "platform-resources/sdk-reference" }),
    SubCategory({
      label: "Amazon Platform Resources",
      slug: "platform-resources/amazon-platform-resources",
      items: [
        Page({
          slug: "platform-resources/amazon-platform-resources/amazon-small-business-accelerator-program",
        }),
      ],
    }),
    SubCategory({
      label: "Apple Platform Resources",
      slug: "platform-resources/apple-platform-resources",
      items: [
        Page({
          slug: "platform-resources/apple-platform-resources/app-store-small-business-program",
        }),
        Page({
          slug: "platform-resources/apple-platform-resources/apple-app-privacy",
        }),
        Page({
          slug: "platform-resources/apple-platform-resources/apple-family-sharing",
        }),
        Page({
          slug: "platform-resources/apple-platform-resources/legacy-mac-apps",
        }),
        Page({
          slug: "platform-resources/apple-platform-resources/swiftui-helpers",
        }),
      ],
    }),
    SubCategory({
      label: "Google Platform Resources",
      slug: "platform-resources/google-platform-resources",
      items: [
        Page({
          slug: "platform-resources/google-platform-resources/google-play-pass",
        }),
        Page({
          slug: "platform-resources/google-platform-resources/reduced-service-fee",
        }),
        Page({
          slug: "platform-resources/google-platform-resources/google-plays-data-safety",
        }),
        Page({
          slug: "platform-resources/google-platform-resources/google-play-quota-increase-request",
        }),
      ],
    }),
    Page({ slug: "platform-resources/non-subscriptions" }),
    SubCategory({
      label: "Platform Server Notifications",
      slug: "platform-resources/server-notifications",
      items: [
        Page({
          slug: "platform-resources/server-notifications/apple-server-notifications",
        }),
        Page({
          slug: "platform-resources/server-notifications/google-server-notifications",
        }),
        Page({
          slug: "platform-resources/server-notifications/stripe-server-notifications",
        }),
      ],
    }),
    Page({ slug: "platform-resources/sample-apps" }),
  ],
});

const serviceCredentialsCategory = Category({
  emoji: "🔑",
  label: "Service Credentials",
  items: [
    SubCategory({
      label: "Apple App Store",
      slug: "service-credentials/itunesconnect-app-specific-shared-secret",
      items: [
        Page({
          slug: "service-credentials/itunesconnect-app-specific-shared-secret/in-app-purchase-key-configuration",
        }),
        Page({
          slug: "service-credentials/itunesconnect-app-specific-shared-secret/app-store-connect-api-key-configuration",
        }),
      ],
    }),
    SubCategory({
      label: "Google Play Store",
      slug: "service-credentials/creating-play-service-credentials",
      items: [
        Page({
          slug: "service-credentials/creating-play-service-credentials/google-play-checklists",
        }),
      ],
    }),
    Page({ slug: "service-credentials/amazon-appstore-credentials" }),
  ],
});

const supportCategory = Category({
  emoji: "🛟",
  label: "RevenueCat Support",
  items: [
    Page({ slug: "revenuecat-support/support-first-steps" }),
    Page({ slug: "revenuecat-support/general-troubleshooting" }),
  ],
});

const sdkMigrationCategory = Category({
  emoji: "📘",
  label: "SDK Migration Guides",
  items: [
    Page({ slug: "sdk-guides/android-native-4x-to-5x-migration" }),
    Page({ slug: "sdk-guides/android-native-5x-to-6x-migration" }),
    Page({ slug: "sdk-guides/android-native-6x-to-7x-migration" }),
    Page({ slug: "sdk-guides/android-native-7x-to-8x-migration" }),
    Page({ slug: "sdk-guides/ios-native-3x-to-4x-migration" }),
    Page({ slug: "sdk-guides/ios-native-4x-to-5x-migration" }),
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
};

export default sidebars;
