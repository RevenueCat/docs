import { useEffect, useMemo } from "react";
import clsx from "clsx";
import RightIcon from "@site/static/img/right.svg";
import { useThemeConfig, usePrevious, Collapsible, useCollapsible } from "@docusaurus/theme-common";
import {
	isActiveSidebarItem,
	findFirstSidebarItemLink,
	useDocSidebarItemsExpandedState,
	isSamePath,
} from "@docusaurus/theme-common";
import Link from "@docusaurus/Link";
import { translate } from "@docusaurus/Translate";
import useIsBrowser from "@docusaurus/useIsBrowser";
import DocSidebarItems from "@theme/DocSidebarItems";

// If we navigate to a category and it becomes active, it should automatically
// expand itself
function useAutoExpandActiveCategory({ isActive, collapsed, updateCollapsed }) {
	const wasActive = usePrevious(isActive);
	useEffect(() => {
		const justBecameActive = isActive && !wasActive;
		if (justBecameActive && collapsed) {
			updateCollapsed(false);
		}
	}, [isActive, wasActive, collapsed, updateCollapsed]);
}

/**
 * When a collapsible category has no link, we still link it to its first child
 * during SSR as a temporary fallback. This allows to be able to navigate inside
 * the category even when JS fails to load, is delayed or simply disabled
 * React hydration becomes an optional progressive enhancement
 * see https://github.com/facebookincubator/infima/issues/36#issuecomment-772543188
 * see https://github.com/facebook/docusaurus/issues/3030
 */
function useCategoryHrefWithSSRFallback(item) {
	const isBrowser = useIsBrowser();
	return useMemo(() => {
		if (item.href && !item.linkUnlisted) {
			return item.href;
		}
		// In these cases, it's not necessary to render a fallback
		// We skip the "findFirstCategoryLink" computation
		if (isBrowser || !item.collapsible) {
			return undefined;
		}
		return findFirstSidebarItemLink(item);
	}, [item, isBrowser]);
}

function CollapseButton({ collapsed, categoryLabel, onClick, className: additionalClasses }) {
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

export default function DocSidebarItemCategory({ item, onItemClick, activePath, level, index, ...props }) {
	const { items, label, collapsible, className, href, customProps } = item;
	const isTopLevelCategory = customProps && "emoji" in customProps;

	const {
		docs: {
			sidebar: { autoCollapseCategories },
		},
	} = useThemeConfig();
	const hrefWithSSRFallback = useCategoryHrefWithSSRFallback(item);
	const isActive = isActiveSidebarItem(item, activePath);
	const isCurrentPage = isSamePath(href, activePath);
	const { collapsed, setCollapsed } = useCollapsible({
		// Active categories are always initialized as expanded. The default
		// (`item.collapsed`) is only used for non-active categories.
		initialState: () => {
			if (!collapsible) {
				return false;
			}
			return isActive ? false : item.collapsed;
		},
	});
	const { expandedItem, setExpandedItem } = useDocSidebarItemsExpandedState();

	// Use this instead of `setCollapsed`, because it is also reactive
	const updateCollapsed = (toCollapsed = !collapsed) => {
		setExpandedItem(toCollapsed ? null : index);
		setCollapsed(toCollapsed);
	};
	useAutoExpandActiveCategory({ isActive, collapsed, updateCollapsed });

	useEffect(() => {
		if (collapsible && expandedItem != null && expandedItem !== index && autoCollapseCategories) {
			setCollapsed(true);
		}
	}, [collapsible, expandedItem, index, setCollapsed, autoCollapseCategories]);

	return (
		<li
			className={clsx(
				"w-full",
				{
					"mb-4": isTopLevelCategory,
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
							"font-semibold text-[16px] pl-4 text-base-700 dark:text-base-300": isTopLevelCategory,
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
					{isTopLevelCategory && <span className="absolute -left-2">{customProps.emoji}</span>}
					{label}
				</Link>
			</div>

			<Collapsible lazy as="ul" className="menu__list" collapsed={collapsed}>
				<DocSidebarItems
					items={items}
					tabIndex={collapsed ? -1 : 0}
					onItemClick={onItemClick}
					activePath={activePath}
					level={level + 1}
				/>
			</Collapsible>
		</li>
	);
}
