/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// custom sidebar objects to make it easier to read
import { SidebarCategory, SidebarPage } from "./src/sidebars/sidebar-utils";

// The sidebar is a tree of categories and pages.
// I've separated this top-level category into its own variable for readability.
// Each category can have sub-categories and pages.
// Each page has a title and path. The path is relative to the path of its parent.
// i.e. Category -> Sub-category -> Page
// "categories/welcome" -> "projects" -> "collaborators"
// combined path: "categories/welcome/projects/collaborators"
const welcomeCategory = new SidebarCategory(
  "😺 Welcome", // Category title
  "welcome", // Category path
  false, // Should the category be collapsed? (defaults to true)
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
).render(); // call render() to remove unsupported convenience properties and prepare for docusaurus

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
).render();

// Add the top level categories to the defaultSidebar object
// The defaultSidebar is referenced in docusaurus.config.js
const sidebars = {
  defaultSidebar: [
    welcomeCategory,
    migratingCategory,
    new SidebarCategory("🛟 RevenueCat Support", "revenuecat-support", false, [
      new SidebarPage("Support First Steps", "support-first-steps"),
    ]).render(),
  ],
};

console.log(JSON.stringify(sidebars, null, 2));

export default sidebars;
