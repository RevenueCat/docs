import React, { type ReactNode } from "react";
import DefaultNavbarItemMobile from "@theme/NavbarItem/DefaultNavbarItem/Mobile";
import DefaultNavbarItemDesktop from "@theme/NavbarItem/DefaultNavbarItem/Desktop";
import type { Props } from "@theme/NavbarItem/DefaultNavbarItem";
import { useActiveDocContext } from "@docusaurus/plugin-content-docs/client";

export default function DefaultNavbarItem({
  mobile = false,
  position, // Need to destructure position from props so that it doesn't get passed on.
  ...props
}: Props): ReactNode {
  const Comp = mobile ? DefaultNavbarItemMobile : DefaultNavbarItemDesktop;

  // Get current doc context which includes sidebar information
  const { activeDoc } = useActiveDocContext("default");

  // You can now use activeDoc to determine which sidebar is active
  // activeDoc?.sidebar gives you the sidebar ID (e.g., "defaultSidebar", "dataSidebar", etc.)
  const currentSidebar = activeDoc?.sidebar;

  return (
    <Comp
      {...props}
      activeClassName={
        props.activeClassName ??
        (mobile
          ? `menu__link--active ${currentSidebar ? `sidebar-${currentSidebar}` : ""}`
          : `navbar__link--active ${currentSidebar ? `sidebar-${currentSidebar}` : ""}`)
      }
    />
  );
}
