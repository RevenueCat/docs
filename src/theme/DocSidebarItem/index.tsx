import React from "react";
import DocSidebarItemCategory from "@theme/DocSidebarItem/Category";
import DocSidebarItemLink from "@theme/DocSidebarItem/Link";
import DocSidebarItemHtml from "@theme/DocSidebarItem/Html";

type DocSidebarItemType = {
  type: string;
  [key: string]: any;
};

type DocSidebarItemProps = {
  item: DocSidebarItemType;
  [key: string]: any;
};

export default function DocSidebarItem({
  item,
  ...props
}: DocSidebarItemProps): React.ReactElement {
  switch (item.type) {
    case "category":
      // @ts-ignore - Docusaurus internal types might be more specific
      return <DocSidebarItemCategory item={item} {...props} />;
    case "html":
      // @ts-ignore - Docusaurus internal types might be more specific
      return <DocSidebarItemHtml item={item} {...props} />;
    case "link":
    default:
      // @ts-ignore - Docusaurus internal types might be more specific
      return <DocSidebarItemLink item={item} {...props} />;
  }
}
