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
      new SidebarPage("Welcome", "welcome"), // if you want to specify a title
    ]).stripped(), // call stripped() to remove unsupported convenience properties
  ],
};

console.log(sidebars);

export default sidebars;
