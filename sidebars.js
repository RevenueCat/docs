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


const testAndLaunchCategory = new SidebarCategory(
  "🧰 Test & Launch",
  "test-and-launch",
  true,
  [
    new SidebarCategory(
      "Debugging",
      "debugging",
      true,
      [new SidebarPage("Caching", "caching"),
      new SidebarPage(
        "Troubleshooting the SDKs",
        "troubleshooting-the-sdks"
      )],
      new SidebarPage(
        "Debugging",
        "debugging"
      )
    ),
    new SidebarPage("Error Handling", "errors"),
    new SidebarCategory(
      "Sandbox Testing",
      "sandbox",
      true,
      [new SidebarPage(
        "Apple App Store & TestFlight", 
        "apple-app-store"),
        new SidebarPage(
          "Google Play Store", 
          "google-play-store"),
          new SidebarPage(
            "Amazon App Store", 
            "amazon-store-sandbox-testing")],
      new SidebarPage(
        "Sandbox Testing",
        "sandbox"
      )
    ),
    new SidebarPage("App Subscription Launch Checklist", "launch-checklist"),
    new SidebarPage("App Store Rejections", "app-store-rejections"),
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
    testAndLaunchCategory.render(),
    toolsCategory.render(),
    supportCategory.render(),
    sdkMigrationCategory.render(),
  ],
};

console.log(JSON.stringify(sidebars, null, 2));

export default sidebars;
