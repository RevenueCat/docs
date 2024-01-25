/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// custom sidebar objects to make it easier to read
import { Category, Link, Page } from "./src/sidebars/sidebar-utils";

// The sidebar is a tree of categories and pages.
// I've separated this top-level category into its own variable for readability.
// Each category can have sub-categories and pages.
// Each page has a path. The path is relative to the path of its parent.
// i.e. Category -> Sub-category -> Page
// "categories/welcome" -> "projects" -> "collaborators"
// combined path: "categories/welcome/projects/collaborators"
const welcomeCategory = new Category(
  "😺 Welcome to RevenueCat", // Category title
  "welcome", // Category path, i.e. docs/{path}
  false, // Should the category be collapsed by default? (defaults to true)
  [
    // Category pages / items
    new Page("overview"), // page file name. relative to parent category path
    new Page("building-new"),
    new Page("existing-apps"),
    new Category( // Sub-category
      "Setting up RevenueCat", // Sub-category title
      "projects", // Sub-category path relative to parent category
      false, // Sub-category collapsed by default?
      [
        new Page("collaborators"), // Sub-category pages / items
        new Page("security"),
        new Page("account-management"),
      ],
      new Page("projects")
    ),
    new Page("authentication"),
  ]
);

const migratingCategory = new Category(
  "➡️ Migrating to RevenueCat",
  "migrating-to-revenuecat",
  true,
  [
    new Category(
      "Migrating Subscriptions",
      "migrating-existing-subscriptions",
      true,
      [new Page("receipt-imports")],
      new Page("migrating-existing-subscriptions")
    ),
    new Page("observer-mode"),
    new Page("swiftystorekit"),
  ]
);

const customersCategory = new Category("👥 Customers", "customers", true, [
  new Page("user-ids"),
  new Page("customer-info"),
  new Page("subscriber-attributes"),
  new Page("trusted-entitlements"),
]);

const testAndLaunchCategory = new Category(
  "🧰 Test & Launch",
  "test-and-launch",
  true,
  [
    new Category(
      "Debugging",
      "debugging",
      true,
      [new Page("caching"), new Page("troubleshooting-the-sdks")],
      new Page("debugging")
    ),
    new Page("errors"),
    new Category(
      "Sandbox Testing",
      "sandbox",
      true,
      [
        new Page("apple-app-store"),
        new Page("google-play-store"),
        new Page("amazon-store-sandbox-testing"),
      ],
      new Page("sandbox")
    ),
    new Page("launch-checklist"),
    new Page("app-store-rejections"),
  ]
);

const subscriptionGuidanceCategory = new Category(
  "📝 Subscription Guidance",
  "subscription-guidance",
  true,
  [
    new Category(
      "Free Trials & Promo Offers",
      "subscription-offers",
      true,
      [
        new Page("ios-subscription-offers"),
        new Page("google-play-offers"),
        new Page("stripe-free-trials"),
      ],
      new Page("subscription-offers")
    ),
    new Page("how-grace-periods-work"),
    new Page("managing-subscriptions"),
    new Page("price-changes"),
    new Page("refunds"),
    new Page("google-prepaid-plans"),
  ]
);

const dashboardCategory = new Category(
  "📊 Dashboard & Metrics",
  "dashboard-and-metrics",
  true,
  [
    new Page("overview"),
    new Category(
      "Charts",
      "charts",
      true,
      [
        new Page("active-subscriptions-chart"),
        new Page("active-subscriptions-movement-chart"),
        new Page("active-trials-chart"),
        new Page("active-trials-movement-chart"),
        new Page("annual-recurring-revenue-arr-chart"),
        new Page("charts-feature-incomplete-periods"),
        new Page("churn-chart"),
        new Page("conversion-to-paying-chart"),
        new Page("initial-conversion-chart"),
        new Page("monthly-recurring-revenue-movement-chart"),
        new Page("monthly-recurring-revenue-mrr-chart"),
        new Page("realized-ltv-per-customer-chart"),
        new Page("realized-ltv-per-paying-customer-chart"),
        new Page("refund-rate-chart"),
        new Page("revenue-chart"),
        new Page("subscription-retention-chart"),
        new Page("trial-conversion-chart"),
      ],
      new Page("charts")
    ),
    new Category("Customer History", "customers-group", true, [
      new Page("active-entitlements"),
      new Page("aliases-card"),
      new Page("attributes"),
      new Page("attribution-card"),
      new Page("basic-information"),
      new Page("customer-history"),
      new Page("offering-override"),
      new Page("promotionals"),
      new Page("manage-users"),
    ]),
    new Page("customer-lists"),
    new Page("taxes-and-commissions"),
  ]
);

const integrationsCategory = new Category(
  "🔌 Integrations",
  "integrations",
  true,
  [
    new Page("integrations"),
    new Category(
      "Attribution",
      "attribution",
      true,
      [
        new Page("adjust"),
        new Page("apple-search-ads"),
        new Page("appsflyer"),
        new Page("branch"),
        new Page("facebook-ads"),
        new Page("singular"),
        new Page("splitmetrics-acquire"),
        new Page("tenjin"),
      ],
      new Page("attribution")
    ),
    new Category(
      "Scheduled Data Exports",
      "scheduled-data-exports",
      true,
      [
        new Page("data-export-version-3"),
        new Page("data-export-version-4"),
        new Page("data-export-version-5"),
        new Page("scheduled-data-exports-gcp"),
        new Page("scheduled-data-exports-s3"),
      ],
      new Page("scheduled-data-exports")
    ),
    new Category(
      "Third-Party Integrations",
      "third-party-integrations",
      true,
      [
        new Page("airship"),
        new Page("amplitude"),
        new Page("braze"),
        new Page("clevertap"),
        new Page("discord"),
        new Page("firebase-integration"),
        new Page("intercom"),
        new Page("iterable"),
        new Page("mixpanel"),
        new Page("mparticle"),
        new Page("onesignal"),
        new Page("segment"),
        new Page("slack"),
        new Page("statsig"),
        new Page("superwall"),
      ],
      new Page("third-party-integrations")
    ),
    new Category(
      "Webhooks",
      "webhooks",
      true,
      [
        new Page("event-flows"),
        new Page("event-types-and-fields"),
        new Page("sample-events"),
      ],
      new Page("webhooks")
    ),
    new Page("partner-built-integrations"),
    new Page("stripe-app"),
  ]
);

const toolsCategory = new Category("🛠 Tools", "tools", false, [
  new Category(
    "Paywalls",
    "paywalls",
    true,
    [new Page("creating-paywalls"), new Page("displaying-paywalls")],
    new Page("paywalls")
  ),
  new Category(
    "Offering Metadata",
    "offering-metadata",
    true,
    [new Page("offering-metadata-examples")],
    new Page("offering-metadata")
  ),
  new Category(
    "Experiments",
    "experiments-v1",
    true,
    [
      new Page("experiments-overview-v1"),
      new Page("creating-offerings-to-test"),
      new Page("configuring-experiments-v1"),
      new Page("experiments-results-v1"),
    ],
    new Page("experiments-v1")
  ),
  new Page("targeting"),
]);

const platformResourcesCategory = new Category(
  "📚 Platform Resources",
  "platform-resources",
  true,
  [
    new Page("implementation-responsibilities"),
    new Category(
      "Amazon Platform Resources",
      "amazon-platform-resources",
      true,
      [new Page("amazon-small-business-accelerator-program")],
      new Page("amazon-platform-resources")
    ),
    new Category(
      "Apple Platform Resources",
      "apple-platform-resources",
      true,
      [
        new Page("app-store-small-business-program"),
        new Page("apple-app-privacy"),
        new Page("apple-family-sharing"),
        new Page("legacy-mac-apps"),
        new Page("swiftui-helpers"),
      ],
      new Page("apple-platform-resources")
    ),
    new Category(
      "Google Platform Resources",
      "google-platform-resources",
      true,
      [
        new Page("google-play-pass"),
        new Page("reduced-service-fee"),
        new Page("google-plays-data-safety"),
        new Page("google-play-quota-increase-request"),
      ],
      new Page("google-platform-resources")
    ),
    new Page("non-subscriptions"),
    new Category(
      "Platform Server Notifications",
      "server-notifications",
      true,
      [
        new Page("apple-server-notifications"),
        new Page("google-server-notifications"),
        new Page("stripe-server-notifications"),
      ],
      new Page("server-notifications")
    ),
    new Page("sample-apps"),
  ]
);

const serviceCredentialsCategory = new Category(
  "🔑 Service Credentials",
  "service-credentials",
  true,
  [
    new Category(
      "Apple App Store",
      "itunesconnect-app-specific-shared-secret",
      true,
      [
        new Page("in-app-purchase-key-configuration"),
        new Page("app-store-connect-api-key-configuration"),
      ],
      new Page("itunesconnect-app-specific-shared-secret")
    ),
    new Category(
      "Google Play Store",
      "creating-play-service-credentials",
      true,
      [new Page("google-play-checklists")],
      new Page("creating-play-service-credentials")
    ),
    new Page("amazon-appstore-credentials"),
  ]
);

const supportCategory = new Category(
  "🛟 RevenueCat Support",
  "revenuecat-support",
  true,
  [new Page("support-first-steps")]
);

const sdkMigrationCategory = new Category(
  "📘 SDK Migration Guides",
  "sdk-guides",
  true,
  [
    new Page("android-native-4x-to-5x-migration"),
    new Page("android-native-5x-to-6x-migration"),
    new Page("android-native-6x-to-7x-migration"),
    new Page("ios-native-3x-to-4x-migration"),
    new Link(
      "Capacitor - 5.x to 6.x Migration",
      "https://github.com/RevenueCat/purchases-capacitor/blob/main/migrations/v6-MIGRATION"
    ),
  ]
);

// Add the top level categories to the defaultSidebar object
// The defaultSidebar is referenced in docusaurus.config.js
const sidebars = {
  defaultSidebar: [
    welcomeCategory.render(), // call render() to remove unsupported convenience properties and prepare for docusaurus
    migratingCategory.render(),
    customersCategory.render(),
    testAndLaunchCategory.render(),
    subscriptionGuidanceCategory.render(),
    dashboardCategory.render(),
    toolsCategory.render(),
    integrationsCategory.render(),
    platformResourcesCategory.render(),
    serviceCredentialsCategory.render(),
    supportCategory.render(),
    sdkMigrationCategory.render(),
  ],
};

export default sidebars;
