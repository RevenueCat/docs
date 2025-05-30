import React from "react";
import clsx from "clsx";
import { ThemeClassNames } from "@docusaurus/theme-common";
import styles from "./styles.module.css";

interface DocSidebarItemHtmlProps {
  item: {
    value: string;
    defaultStyle?: boolean;
    className?: string;
  };
  level: number;
  index: number;
}

export default function DocSidebarItemHtml({
  item,
  level,
  index,
}: DocSidebarItemHtmlProps): React.ReactElement {
  const { value, defaultStyle, className } = item;

  return (
    <li
      className={clsx(
        ThemeClassNames.docs.docSidebarItemLink,
        ThemeClassNames.docs.docSidebarItemLinkLevel(level),
        defaultStyle && [styles.menuHtmlItem, "menu__list-item"],
        className,
      )}
      key={index}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: value }}
    />
  );
}
