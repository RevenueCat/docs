/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// custom sidebar objects to make it easier to read
import {
  SidebarCategory,
  SidebarLink,
  SidebarPage,
} from "./src/sidebars/sidebar-utils";

// The sidebar is a tree of categories and pages.
// I've separated this top-level category into its own variable for readability.
// Each category can have sub-categories and pages.
// Each page has a title and path. The path is relative to the path of its parent.
// i.e. Category -> Sub-category -> Page
// "categories/welcome" -> "projects" -> "collaborators"
// combined path: "categories/welcome/projects/collaborators"
const welcomeCategory = new SidebarCategory(
  "😺 Welcome to RevenueCat", // Category title
  "welcome", // Category path, i.e. docs/{path}
  false, // Should the category be collapsed by default? (defaults to true)
  [
    // Category pages / items
    new SidebarPage("Welcome", "welcome"), // page, title and file name. relative to category path
    new SidebarPage("Adding subscriptions to your app", "building-new"),
    new SidebarPage("Using RevenueCat in existing apps", "existing-apps"),
    new SidebarCategory( // Sub-category
      "Setting up RevenueCat", // Sub-category title
      "projects", // Sub-category path
      false, // Sub-category collapsed
      [
        new SidebarPage("Invite your team", "collaborators"), // Sub-category pages / items
        new SidebarPage("Account security", "security"),
        new SidebarPage("Billing and account settings", "account-management"),
      ],
      new SidebarPage("Setting up RevenueCat", "projects")
    ),
    new SidebarPage("API Keys & Authentication", "authentication"),
  ]
);

const migratingCategory = new SidebarCategory(
  "➡️ Migrating to RevenueCat",
  "migrating-to-revenuecat",
  true,
  [
    new SidebarCategory(
      "Migrating Subscriptions",
      "migrating-existing-subscriptions",
      true,
      [new SidebarPage("Receipt Imports", "receipt-imports")],
      new SidebarPage(
        "Migrating Subscriptions",
        "migrating-existing-subscriptions"
      )
    ),
    new SidebarPage("Observer Mode", "observer-mode"),
    new SidebarPage("SwiftyStoreKit", "swiftystorekit"),
  ]
);

const customersCategory = new SidebarCategory(
  "👥 Customers",
  "customers",
  true,
  [
    new SidebarPage("Identifying Customers", "user-ids"),
    new SidebarPage("Checking Subscription Status", "customer-info"),
    new SidebarPage("Subscriber Attributes", "subscriber-attributes"),
    new SidebarPage("Trusted Entitlements", "trusted-entitlements"),
  ]
);

const testAndLaunchCategory = new SidebarCategory(
  "🧰 Test & Launch",
  "test-and-launch",
  true,
  [
    new SidebarCategory(
      "Debugging",
      "debugging",
      true,
      [
        new SidebarPage("Caching", "caching"),
        new SidebarPage("Troubleshooting the SDKs", "troubleshooting-the-sdks"),
      ],
      new SidebarPage("Debugging", "debugging")
    ),
    new SidebarPage("Error Handling", "errors"),
    new SidebarCategory(
      "Sandbox Testing",
      "sandbox",
      true,
      [
        new SidebarPage("Apple App Store & TestFlight", "apple-app-store"),
        new SidebarPage("Google Play Store", "google-play-store"),
        new SidebarPage("Amazon App Store", "amazon-store-sandbox-testing"),
      ],
      new SidebarPage("Sandbox Testing", "sandbox")
    ),
    new SidebarPage("App Subscription Launch Checklist", "launch-checklist"),
    new SidebarPage("App Store Rejections", "app-store-rejections"),
  ]
);

const dashboardCategory = new SidebarCategory(
  "📊 Dashboard & Metrics",
  "dashboard-and-metrics",
  true,
  [
    new SidebarPage("Overview", "overview"),
    new SidebarCategory(
      "Charts",
      "charts",
      true,
      [
        new SidebarPage(
          "Active Subscriptions Chart",
          "active-subscriptions-chart"
        ),
        new SidebarPage(
          "Active Subscriptions Movement Chart",
          "active-subscriptions-movement-chart"
        ),
        new SidebarPage("Active Trials Chart", "active-trials-chart"),
        new SidebarPage(
          "Active Trials Movement Chart",
          "active-trials-movement-chart"
        ),
        new SidebarPage(
          "Annual Recurring Revenue ARR Chart",
          "annual-recurring-revenue-arr-chart"
        ),
        new SidebarPage(
          "Charts Feature: Incomplete Periods",
          "charts-feature-incomplete-periods"
        ),
        new SidebarPage("Churn Chart", "churn-chart"),
        new SidebarPage(
          "Conversion to Paying Chart",
          "conversion-to-paying-chart"
        ),
        new SidebarPage("Initial Conversion Chart", "initial-conversion-chart"),
        new SidebarPage(
          "Monthly Recurring Revenue Movement Chart",
          "monthly-recurring-revenue-movement-chart"
        ),
        new SidebarPage(
          "Monthy Recurring Revenue MRR Chart",
          "monthly-recurring-revenue-mrr-chart"
        ),
        new SidebarPage(
          "Realized LTV per Customer Chart",
          "realized-ltv-per-customer-chart"
        ),
        new SidebarPage(
          "Realized LTW per Paying Customer Chart",
          "realized-ltv-per-paying-customer-chart"
        ),
        new SidebarPage("Refund Rate Chart", "refund-rate-chart"),
        new SidebarPage("Revenue Chart", "revenue-chart"),
        new SidebarPage(
          "Subscription Retention Chart",
          "subscription-retention-chart"
        ),
        new SidebarPage("Trial Conversion Chart", "trial-conversion-chart"),
      ],
      new SidebarPage("Charts", "charts")
    ),
    new SidebarCategory("Customer History", "customers-group", true, [
      new SidebarPage("Active Entitlements", "active-entitlements"),
      new SidebarPage("Aliases", "aliases-card"),
      new SidebarPage("Subscriber Attributes", "attributes"),
      new SidebarPage("Attribution", "attribution-card"),
      new SidebarPage("Customer Details", "basic-information"),
      new SidebarPage("Customer History", "customer-history"),
      new SidebarPage("Offering Override", "offering-override"),
      new SidebarPage("Promotionals", "promotionals"),
      new SidebarPage("Deleting Users", "manage-users"),
    ]),
    new SidebarPage("Customer Lists", "customer-lists"),
    new SidebarPage("Taxes & Commissions", "taxes-and-commissions"),
  ]
);

const toolsCategory = new SidebarCategory("🛠 Tools", "tools", false, [
  new SidebarCategory(
    "Paywalls",
    "paywalls",
    true,
    [
      new SidebarPage("Creating Paywalls", "creating-paywalls"),
      new SidebarPage("Displaying Paywalls", "displaying-paywalls"),
    ],
    new SidebarPage("Paywalls", "paywalls")
  ),
  new SidebarCategory(
    "Offering Metadata",
    "offering-metadata",
    true,
    [
      new SidebarPage(
        "Offering Metadata Examples",
        "offering-metadata-examples"
      ),
    ],
    new SidebarPage("Offering Metadata", "offering-metadata")
  ),
  new SidebarCategory(
    "Experiments",
    "experiments-v1",
    true,
    [
      new SidebarPage("Experiments Overview", "experiments-overview-v1"),
      new SidebarPage(
        "Creating Offerings to Test",
        "creating-offerings-to-test"
      ),
      new SidebarPage("Configuring Experiments", "configuring-experiments-v1"),
      new SidebarPage("Interpreting Results", "experiments-results-v1"),
    ],
    new SidebarPage("Experiments", "experiments-v1")
  ),
  new SidebarPage("Targeting", "targeting"),
]);

const platformResourcesCategory = new SidebarCategory(
  "📚 Platform Resources",
  "platform-resources",
  true,
  [
    new SidebarPage(
      "Implementation Responsibilities",
      "implementation-responsibilities"
    ),
    new SidebarCategory(
      "Amazon Platform Resources",
      "amazon-platform-resources",
      true,
      [
        new SidebarPage(
          "Amazon Small Business Accelerator",
          "amazon-small-business-accelerator-program"
        ),
      ],
      new SidebarPage("Amazon Platform Resources", "amazon-platform-resources")
    ),
    new SidebarCategory(
      "Apple Platform Resources",
      "apple-platform-resources",
      true,
      [
        new SidebarPage(
          "App Store SMall Business Program",
          "app-store-small-business-program"
        ),
        new SidebarPage("Apple App Privacy", "apple-app-privacy"),
        new SidebarPage("Family Sharing", "apple-family-sharing"),
        new SidebarPage("Legacy Mac Apps", "legacy-mac-apps"),
        new SidebarPage("SwiftUI Helpers", "swiftui-helpers"),
      ],
      new SidebarPage("Apple Platform Resources", "apple-platform-resources")
    ),
    new SidebarCategory(
      "Google Platform Resources",
      "google-platform-resources",
      true,
      [
        new SidebarPage("Google Play Pass", "google-play-pass"),
        new SidebarPage("Reduced Service Fees", "reduced-service-fee"),
        new SidebarPage(
          "Google Play's Data Safety",
          "google-plays-data-safety"
        ),
        new SidebarPage(
          "Google Play Quota Increase Request",
          "google-play-quota-increase-request"
        ),
      ],
      new SidebarPage("Google Platform Resources", "google-platform-resources")
    ),
    new SidebarPage("Non-subscriptions", "non-subscriptions"),
    new SidebarCategory(
      "Platform Server Notifications",
      "server-notifications",
      true,
      [
        new SidebarPage(
          "Apple Server Notifications",
          "apple-server-notifications"
        ),
        new SidebarPage(
          "Google Server Notifications",
          "google-server-notifications"
        ),
        new SidebarPage(
          "Stripe Server Notifications",
          "stripe-server-notifications"
        ),
      ],
      new SidebarPage("Platform Server Notifications", "server-notifications")
    ),
    new SidebarPage("Sample Apps", "sample-apps"),
  ]
);

const serviceCredentialsCategory = new SidebarCategory(
  "🔑 Service Credentials",
  "service-credentials",
  true,
  [
    new SidebarCategory(
      "Apple App Store",
      "itunesconnect-app-specific-shared-secret",
      true,
      [
        new SidebarPage(
          "In-App Purchase Key Configuration",
          "in-app-purchase-key-configuration"
        ),
        new SidebarPage(
          "App Store Connect API Key Configuration",
          "app-store-connect-api-key-configuration"
        ),
      ],
      new SidebarPage(
        "Apple App Store",
        "itunesconnect-app-specific-shared-secret"
      )
    ),
    new SidebarCategory(
      "Google Play Store",
      "creating-play-service-credentials",
      true,
      [new SidebarPage("Google Play Checklists", "google-play-checklists")],
      new SidebarPage("Google Play Store", "creating-play-service-credentials")
    ),
    new SidebarPage("Amazon Appstore", "amazon-appstore-credentials"),
  ]
);

const supportCategory = new SidebarCategory(
  "🛟 RevenueCat Support",
  "revenuecat-support",
  true,
  [new SidebarPage("Support First Steps", "support-first-steps")]
);

const sdkMigrationCategory = new SidebarCategory(
  "📘 SDK Migration Guides",
  "sdk-guides",
  true,
  [
    new SidebarPage(
      "Android Native 4x to 5x Migration",
      "android-native-4x-to-5x-migration"
    ),
    new SidebarPage(
      "Android Native 5x to 6x Migration",
      "android-native-5x-to-6x-migration"
    ),
    new SidebarPage(
      "Android Native 6x to 7x Migration",
      "android-native-6x-to-7x-migration"
    ),
    new SidebarPage(
      "iOS Native 3x to 4x Migration",
      "ios-native-3x-to-4x-migration"
    ),
    new SidebarLink(
      "Capacitor - 5.x to 6.x Migration",
      "https://github.com/RevenueCat/purchases-capacitor/blob/main/migrations/v6-MIGRATION.md"
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
    dashboardCategory.render(),
    toolsCategory.render(),
    platformResourcesCategory.render(),
    serviceCredentialsCategory.render(),
    supportCategory.render(),
    sdkMigrationCategory.render(),
  ],
};

console.log(JSON.stringify(sidebars, null, 2));

export default sidebars;
