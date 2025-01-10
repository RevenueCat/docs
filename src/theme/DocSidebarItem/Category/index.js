import React, { useState, useEffect, useMemo } from "react";
import clsx from "clsx";
import RightIcon from "@site/static/img/right.svg";
import {
  useThemeConfig,
  usePrevious,
  Collapsible,
  useCollapsible,
} from "@docusaurus/theme-common";
import { findFirstSidebarItemLink } from "@docusaurus/theme-common";
import Link from "@docusaurus/Link";
import { translate } from "@docusaurus/Translate";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { useActiveDocContext } from "@docusaurus/plugin-content-docs/client";
import DocSidebarItems from "@theme/DocSidebarItems";

function useAutoExpandActiveCategory({ isActive, collapsed, updateCollapsed }) {
  const wasActive = usePrevious(isActive);
  useEffect(() => {
    const justBecameActive = isActive && !wasActive;
    if (justBecameActive && collapsed) {
      updateCollapsed(false);
    }
  }, [isActive, wasActive, collapsed, updateCollapsed]);
}

function useCategoryHrefWithSSRFallback(item) {
  const isBrowser = useIsBrowser();
  return useMemo(() => {
    if (item.href && !item.linkUnlisted) {
      return item.href;
    }
    if (isBrowser || !item.collapsible) {
      return undefined;
    }
    return findFirstSidebarItemLink(item);
  }, [item, isBrowser]);
}

function CollapseButton({
  collapsed,
  categoryLabel,
  onClick,
  className: additionalClasses,
}) {
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
              { label: categoryLabel }
            )
          : translate(
              {
                id: "theme.DocSidebarItem.collapseCategoryAriaLabel",
                message: "Collapse sidebar category '{label}'",
                description: "The ARIA label to collapse the sidebar category",
              },
              { label: categoryLabel }
            )
      }
      type="button"
      className={additionalClasses}
      onClick={onClick}
    >
      <RightIcon height="12px" width="12px" />
    </button>
  );
}

export default function DocSidebarItemCategory({
  item,
  onItemClick,
  level,
  index,
  ...props
}) {
  const { items, label, collapsible, className, href, customProps } = item;
  const isTopLevelCategory = customProps && "emoji" in customProps;

  const {
    docs: {
      sidebar: { autoCollapseCategories },
    },
  } = useThemeConfig();

  const { activeDoc } = useActiveDocContext();
  const hrefWithSSRFallback = useCategoryHrefWithSSRFallback(item);

  const isActive =
    activeDoc && items.some((subItem) => activeDoc.path === subItem.href);
  const isCurrentPage = activeDoc?.path === href;

  const [collapsed, setCollapsed] = useState(() => {
    if (!collapsible) {
      return false;
    }
    return isActive ? false : item.collapsed;
  });

  const updateCollapsed = (toCollapsed = !collapsed) => {
    setCollapsed(toCollapsed);
  };

  useAutoExpandActiveCategory({ isActive, collapsed, updateCollapsed });

  useEffect(() => {
    if (collapsible && autoCollapseCategories) {
      setCollapsed(true);
    }
  }, [collapsible, autoCollapseCategories]);

  return (
    <li
      className={clsx(
        "w-full",
        {
          "mb-2": isTopLevelCategory,
        },
        className
      )}
    >
      <div
        className={clsx(
          "flex items-center gap-2 px-3 py-1 rounded-md group/category relative w-[90%]",
          {
            "bg-primary/15": isCurrentPage,
          },
          { "hover:!bg-transparent": isTopLevelCategory }
        )}
      >
        {href && collapsible && (
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
                ? "text-primary"
                : "text-base-700 group-hover/category:text-base-400 dark:text-base-300 dark:group-hover/category:text-base-600"
            )}
          />
        )}
        <Link
          className={clsx(
            "text-[14px] hover:no-underline relative w-full pl-2",
            {
              "font-semibold text-[14px] pl-4 text-base-900 dark:text-base-300 mt-2":
                isTopLevelCategory,
            },
            isCurrentPage
              ? "text-primary"
              : !isTopLevelCategory &&
                  "text-base-700 hover:text-base-400 dark:text-base-300 dark:group-hover/category:text-base-600"
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
          href={collapsible ? hrefWithSSRFallback ?? "#" : hrefWithSSRFallback}
          {...props}
        >
          {isTopLevelCategory && (
            <span className="absolute -left-2">{customProps.emoji}</span>
          )}
          {label}
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
    </li>
  );
}
