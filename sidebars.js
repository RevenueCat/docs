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
  "categories/welcome", // Category path
  false, // Should the category be collapsed?
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

// Add the top level categories to the defaultSidebar object
// The defaultSidebar is referenced in docusaurus.config.js
const sidebars = {
  defaultSidebar: [welcomeCategory],
};

console.log(JSON.stringify(sidebars, null, 2));

export default sidebars;
