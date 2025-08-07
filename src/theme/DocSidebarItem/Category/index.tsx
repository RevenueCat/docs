import React, { FC, useState, useEffect, useMemo } from "react";
import clsx from "clsx";
import RightIcon from "@site/static/img/right.svg";
import {
  useThemeConfig,
  usePrevious,
  Collapsible,
  useCollapsible,
} from "@docusaurus/theme-common";
import Link from "@docusaurus/Link";
import { translate } from "@docusaurus/Translate";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { useActiveDocContext } from "@docusaurus/plugin-content-docs/client";
import DocSidebarItems from "@theme/DocSidebarItems";
import { IconName } from "../../CatIcon/types";
import { CatIcon } from "../../CatIcon/CatIcon";
interface AutoExpandActiveProps {
  isActive: boolean;
  collapsed: boolean;
  updateCollapsed: (toCollapsed: boolean) => void;
}

function useAutoExpandActiveCategory({
  isActive,
  collapsed,
  updateCollapsed,
}: AutoExpandActiveProps): void {
  const wasActive = usePrevious(isActive);
  useEffect(() => {
    const justBecameActive = isActive && !wasActive;
    if (justBecameActive && collapsed) {
      updateCollapsed(false);
    }
  }, [isActive, wasActive, collapsed, updateCollapsed]);
}

interface CategoryItem {
  href?: string;
  linkUnlisted?: boolean;
  collapsible?: boolean;
  items: any[];
}

// A simplified version that doesn't rely on the findFirstSidebarItemLink function
function useCategoryHrefWithSSRFallback(
  item: CategoryItem,
): string | undefined {
  const isBrowser = useIsBrowser();
  return useMemo(() => {
    if (item.href && !item.linkUnlisted) {
      return item.href;
    }
    // When on browser or not collapsible, no SSR fallback needed
    if (isBrowser || !item.collapsible) {
      return undefined;
    }
    // In SSR, try to find the first link in items recursively
    // This is a simplified version that doesn't do the recursive search
    const firstItem = item.items[0];
    return firstItem?.href;
  }, [item, isBrowser]);
}

interface CollapseButtonProps {
  collapsed: boolean;
  categoryLabel: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  isCurrentPage?: boolean;
}

function CollapseButton({
  collapsed,
  categoryLabel,
  onClick,
  className: additionalClasses,
}: CollapseButtonProps): React.ReactElement {
  return (
    <button
      aria-label={
        collapsed
          ? translate(
              {
                id: "theme.DocSidebarItem.expandCategoryAriaLabel",
                message: "Expand sidebar category '{label}'",
                description: "The ARIA label to expand the sidebar category",
              },
              { label: categoryLabel },
            )
          : translate(
              {
                id: "theme.DocSidebarItem.collapseCategoryAriaLabel",
                message: "Collapse sidebar category '{label}'",
                description: "The ARIA label to collapse the sidebar category",
              },
              { label: categoryLabel },
            )
      }
      type="button"
      className={additionalClasses}
      onClick={onClick}
    >
      <RightIcon height="12px" width="12px" className="fill-red-500" />
    </button>
  );
}

interface DocSidebarItemCategoryProps {
  item: {
    items: any[];
    label: string;
    collapsible?: boolean;
    className?: string;
    href?: string;
    customProps?: {
      iconName?: string;
      iconColor?: string;
      [key: string]: any;
    };
    collapsed?: boolean;
  };
  onItemClick?: (item: any) => void;
  level: number;
  index: number;
  activePath?: string;
  [key: string]: any;
}

export default function DocSidebarItemCategory({
  item,
  onItemClick,
  level,
  index,
  ...props
}: DocSidebarItemCategoryProps): React.ReactElement {
  const { items, label, collapsible, className, href, customProps } = item;
  const isTopLevelCategory = customProps && "iconName" in customProps;

  const {
    docs: {
      sidebar: { autoCollapseCategories },
    },
  } = useThemeConfig();

  const { activeDoc } = useActiveDocContext(props.docsPluginId);
  const hrefWithSSRFallback = useCategoryHrefWithSSRFallback(item);

  const isActive =
    activeDoc && items.some((subItem) => activeDoc.path === subItem.href);
  const isCurrentPage = activeDoc?.path === href;

  const [collapsed, setCollapsed] = useState(() => {
    if (!collapsible) {
      return false;
    }
    return isActive ? false : !!item.collapsed;
  });

  const updateCollapsed = (toCollapsed = !collapsed) => {
    setCollapsed(toCollapsed);
  };

  useAutoExpandActiveCategory({ isActive, collapsed, updateCollapsed });

  return (
    <li className={clsx("w-full", isTopLevelCategory && "mb-2", className)}>
      <div
        className={clsx(
          "flex items-center gap-2 px-3 py-1 rounded-md group/category relative w-[90%] ",
          isCurrentPage && `sidebar-${activeDoc?.sidebar} background`,
          // { "hover:!bg-transparent": isTopLevelCategory }
        )}
      >
        {collapsible && (
          <CollapseButton
            isCurrentPage={isCurrentPage}
            collapsed={collapsed}
            categoryLabel={label}
            onClick={(e) => {
              e.preventDefault();
              updateCollapsed();
            }}
            className={clsx(
              "w-fit p-0 bg-transparent border-none pt-1 transition-transform duration-300 absolute left-0",
              { "rotate-90": !collapsed },
              isCurrentPage
                ? ` sidebar-${activeDoc?.sidebar}`
                : "text-base-700 group-hover/category:text-base-400 dark:text-base-300 dark:group-hover/category:text-base-600",
            )}
          />
        )}
        <Link
          className={clsx(
            "text-[14px] hover:no-underline relative w-full pl-2",
            isTopLevelCategory &&
              "font-bold text-[14px] text-base-900 dark:text-base-300",
            isCurrentPage
              ? `sidebar-${activeDoc?.sidebar}`
              : !isTopLevelCategory &&
                  "text-base-700 hover:text-base-400 dark:text-base-300 dark:group-hover/category:text-base-600",
          )}
          onClick={
            collapsible
              ? (e) => {
                  onItemClick?.(item);
                  if (href) {
                    updateCollapsed(false);
                  } else {
                    e.preventDefault();
                    updateCollapsed();
                  }
                }
              : () => {
                  onItemClick?.(item);
                }
          }
          aria-current={isCurrentPage ? "page" : undefined}
          aria-expanded={collapsible ? !collapsed : undefined}
          href={
            collapsible ? (hrefWithSSRFallback ?? "#") : hrefWithSSRFallback
          }
          {...props}
        >
          {isTopLevelCategory && customProps?.iconName && (
            <span className="absolute mt-1 -ml-1">
              <CatIcon
                name={customProps.iconName as IconName}
                size={16}
                customColor={customProps.iconColor}
              />
            </span>
          )}
          <span className={isTopLevelCategory ? "pl-5" : ""}>{label}</span>
        </Link>
      </div>

      <Collapsible lazy as="ul" className="menu__list" collapsed={collapsed}>
        <DocSidebarItems
          items={items}
          tabIndex={collapsed ? -1 : 0}
          onItemClick={onItemClick}
          activePath={activeDoc?.path}
          level={level + 1}
        />
      </Collapsible>
      {isTopLevelCategory && (
        <div className="w-full h-px bg-base-200 dark:bg-base-800 mt-2" />
      )}
    </li>
  );
}
