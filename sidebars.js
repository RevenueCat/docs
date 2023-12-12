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

const sidebars = {
  defaultSidebar: [
    new SidebarCategory("😺 Welcome", "categories/welcome", [
      new SidebarPage("Welcome", "welcome"),
      new SidebarPage("Adding subscriptions to your app", "building-new"),
      new SidebarPage("Using RevenueCat in existing apps", "existing-apps"),
      new SidebarCategory(
        "Setting up RevenueCat",
        "projects",
        [
          new SidebarPage("Invite your team", "collaborators"),
          new SidebarPage("Account security", "security"),
          new SidebarPage("Billing and account settings", "account-management"),
        ],
        new SidebarPage("Setting up RevenueCat", "projects")
      ),
      new SidebarPage("API Keys & Authentication", "authentication"),
    ]).render(), // call stripped() to remove unsupported convenience properties
  ],
};

console.log(JSON.stringify(sidebars, null, 2));

export default sidebars;
