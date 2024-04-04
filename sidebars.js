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
  slug: "welcome",
  items: [
    Page({ slug: "overview" }),
    Page({ slug: "building-new" }),
    Page({ slug: "existing-apps" }),
    SubCategory({
      label: "Setting up RevenueCat",
      slug: "projects",
      items: [
        Page({ slug: "collaborators" }),
        Page({ slug: "security" }),
        Page({ slug: "account-management" }),
      ],
    }),
    Page({ slug: "authentication" }),
  ],
});

const gettingStartedCategory = Category({
  emoji: "🚀",
  label: "Getting Started",
  slug: "getting-started",
  items: [
    Page({ slug: "quickstart" }),
    SubCategory({
      label: "Configuring Products",
      slug: "entitlements",
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
      ],
    }),
    SubCategory({
      label: "Installation",
      slug: "installation",
      items: [
        Page({ slug: "ios" }),
        Page({ slug: "android" }),
        Page({ slug: "reactnative" }),
        Page({ slug: "flutter" }),
        Page({ slug: "ionic" }),
        Page({ slug: "cordova" }),
        Page({ slug: "unity" }),
        Page({ slug: "web-sdk" }),
        Page({ slug: "macos" }),
        Page({ slug: "app-builders" }),
      ],
    }),
    SubCategory({
      label: "Configuring the SDK",
      slug: "configuring-sdk",
      items: [Page({ slug: "ios-app-extensions" })],
    }),
    Link({ label: "Identifying Users", slug: "/customers/user-ids" }),
    Page({ slug: "displaying-products" }),
    SubCategory({
      label: "Making Purchases",
      slug: "making-purchases",
      items: [Page({ slug: "android-with-jetpack-compose" })],
    }),
    Link({
      label: "Checking Subscription Status",
      slug: "/customers/customer-info",
    }),
    Page({ slug: "restoring-purchases" }),
    Link({
      label: "Configuring Server Notifications",
      slug: "/platform-resources/server-notifications",
    }),
  ],
});

const migratingCategory = Category({
  emoji: "➡️",
  label: "Migrating to RevenueCat",
  slug: "migrating-to-revenuecat",
  items: [
    SubCategory({
      label: "Migrating Subscriptions",
      slug: "migrating-existing-subscriptions",
      items: [
        Page({ slug: "receipt-imports" }),
        Page({ slug: "google-historical-import" }),
      ],
    }),
    Page({ slug: "observer-mode" }),
    Page({ slug: "swiftystorekit" }),
  ],
});

const webPurchasesCategory = Category({
  emoji: "🌎",
  label: "Web Purchases",
  slug: "web",
  items: [
    SubCategory({
      label: "RevenueCat Billing & Web SDK",
      slug: "revenuecat-billing",
      items: [
        Page({ slug: "product-setup" }),
        Page({ slug: "subscription-lifecycle" }),
        Page({ slug: "managing-customer-subscriptions" }),
        Page({ slug: "customer-portal" }),
      ],
    }),
    Page({ slug: "stripe" }),
  ],
});

const customersCategory = Category({
  emoji: "👥",
  label: "Customers",
  slug: "customers",
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
  slug: "test-and-launch",
  items: [
    SubCategory({
      label: "Debugging",
      slug: "debugging",
      items: [
        Page({ slug: "caching" }),
        Page({ slug: "troubleshooting-the-sdks" }),
      ],
    }),
    Page({ slug: "errors" }),
    SubCategory({
      label: "Sandbox Testing",
      slug: "sandbox",
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

const subscriptionGuidanceCategory = Category({
  emoji: "📝",
  label: "Subscription Guidance",
  slug: "subscription-guidance",
  items: [
    SubCategory({
      label: "Free Trials & Promo Offers",
      slug: "subscription-offers",
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
});

const dashboardCategory = Category({
  emoji: "📊",
  label: "Dashboard & Metrics",
  slug: "dashboard-and-metrics",
  items: [
    Page({ slug: "overview" }),
    SubCategory({
      label: "Charts",
      slug: "charts",
      items: [
        Page({ slug: "active-subscriptions-chart" }),
        Page({ slug: "active-subscriptions-movement-chart" }),
        Page({ slug: "active-trials-chart" }),
        Page({ slug: "active-trials-movement-chart" }),
        Page({ slug: "annual-recurring-revenue-arr-chart" }),
        Page({ slug: "charts-feature-incomplete-periods" }),
        Page({ slug: "churn-chart" }),
        Page({ slug: "conversion-to-paying-chart" }),
        Page({ slug: "initial-conversion-chart" }),
        Page({ slug: "monthly-recurring-revenue-movement-chart" }),
        Page({ slug: "monthly-recurring-revenue-mrr-chart" }),
        Page({ slug: "realized-ltv-per-customer-chart" }),
        Page({ slug: "realized-ltv-per-paying-customer-chart" }),
        Page({ slug: "refund-rate-chart" }),
        Page({ slug: "revenue-chart" }),
        Page({ slug: "subscription-retention-chart" }),
        Page({ slug: "trial-conversion-chart" }),
      ],
    }),
    SubCategory({
      label: "Customer History",
      slug: "customer-history",
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
  ],
});

const toolsCategory = Category({
  emoji: "🛠",
  label: "Tools",
  slug: "tools",
  items: [
    SubCategory({
      label: "Paywalls",
      slug: "paywalls",
      items: [
        Page({ slug: "creating-paywalls" }),
        Page({ slug: "displaying-paywalls" }),
      ],
    }),
    SubCategory({
      label: "Offering Metadata",
      slug: "offering-metadata",
      items: [Page({ slug: "offering-metadata-examples" })],
    }),
    SubCategory({
      label: "Experiments",
      slug: "experiments-v1",
      items: [
        Page({ slug: "experiments-overview-v1" }),
        Page({ slug: "creating-offerings-to-test" }),
        Page({ slug: "configuring-experiments-v1" }),
        Page({ slug: "experiments-results-v1" }),
      ],
    }),
    SubCategory({
      label: "Targeting",
      slug: "targeting",
      items: [
        Page({ slug: "placements" }),
        Page({ slug: "custom-attributes" }),
      ],
    }),

    Page({ slug: "paywall-orchestration-with-offerings" }),
  ],
});

const integrationsCategory = Category({
  emoji: "🔌",
  label: "Integrations",
  slug: "integrations",
  items: [
    Page({ slug: "integrations" }),
    SubCategory({
      label: "Attribution",
      slug: "attribution",
      items: [
        Page({ slug: "adjust" }),
        Page({ slug: "apple-search-ads" }),
        Page({ slug: "appsflyer" }),
        Page({ slug: "branch" }),
        Page({ slug: "facebook-ads" }),
        Page({ slug: "singular" }),
        Page({ slug: "splitmetrics-acquire" }),
        Page({ slug: "tenjin" }),
      ],
    }),
    SubCategory({
      label: "Scheduled Data Exports",
      slug: "scheduled-data-exports",
      items: [
        Page({ slug: "data-export-version-3" }),
        Page({ slug: "data-export-version-4" }),
        Page({ slug: "data-export-version-5" }),
        Page({ slug: "scheduled-data-exports-gcp" }),
        Page({ slug: "scheduled-data-exports-s3" }),
      ],
    }),
    SubCategory({
      label: "Third-Party Integrations",
      slug: "third-party-integrations",
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
        Page({ slug: "segment" }),
        Page({ slug: "slack" }),
        Page({ slug: "statsig" }),
        Page({ slug: "superwall" }),
      ],
    }),
    SubCategory({
      label: "Webhooks",
      slug: "webhooks",
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
  slug: "platform-resources",
  items: [
    Page({ slug: "implementation-responsibilities" }),
    Page({ slug: "sdk-reference" }),
    SubCategory({
      label: "Amazon Platform Resources",
      slug: "amazon-platform-resources",
      items: [Page({ slug: "amazon-small-business-accelerator-program" })],
    }),
    SubCategory({
      label: "Apple Platform Resources",
      slug: "apple-platform-resources",
      items: [
        Page({ slug: "app-store-small-business-program" }),
        Page({ slug: "apple-app-privacy" }),
        Page({ slug: "apple-family-sharing" }),
        Page({ slug: "legacy-mac-apps" }),
        Page({ slug: "swiftui-helpers" }),
      ],
    }),
    SubCategory({
      label: "Google Platform Resources",
      slug: "google-platform-resources",
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
      items: [
        Page({ slug: "apple-server-notifications" }),
        Page({ slug: "google-server-notifications" }),
        Page({ slug: "stripe-server-notifications" }),
      ],
    }),
    Page({ slug: "sample-apps" }),
  ],
});

const serviceCredentialsCategory = Category({
  emoji: "🔑",
  label: "Service Credentials",
  slug: "service-credentials",
  items: [
    SubCategory({
      label: "Apple App Store",
      slug: "itunesconnect-app-specific-shared-secret",
      items: [
        Page({ slug: "in-app-purchase-key-configuration" }),
        Page({ slug: "app-store-connect-api-key-configuration" }),
      ],
    }),
    SubCategory({
      label: "Google Play Store",
      slug: "creating-play-service-credentials",
      items: [Page({ slug: "google-play-checklists" })],
    }),
    Page({ slug: "amazon-appstore-credentials" }),
  ],
});

const supportCategory = Category({
  emoji: "🛟",
  label: "RevenueCat Support",
  slug: "revenuecat-support",
  items: [Page({ slug: "support-first-steps" })],
});

const sdkMigrationCategory = Category({
  emoji: "📘",
  label: "SDK Migration Guides",
  slug: "sdk-guides",
  items: [
    Page({ slug: "android-native-4x-to-5x-migration" }),
    Page({ slug: "android-native-5x-to-6x-migration" }),
    Page({ slug: "android-native-6x-to-7x-migration" }),
    Page({ slug: "ios-native-3x-to-4x-migration" }),
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
