import clsx from "clsx";
import Link from "@docusaurus/Link";
import isInternalUrl from "@docusaurus/isInternalUrl";
import IconExternalLink from "@theme/Icon/ExternalLink";
import { useActiveDocContext } from "@docusaurus/plugin-content-docs/client";

export default function DocSidebarItemLink({
  item,
  onItemClick,
  level,
  index,
  ...props
}) {
  const { href, label, className, autoAddBaseUrl } = item;
  const { activeDoc } = useActiveDocContext(); // Get the active document context
  const isActive = activeDoc?.path === href; // Determine if the current link matches the active doc
  const isInternalLink = isInternalUrl(href);

  return (
    <li className={clsx("w-full", className)} key={label}>
      <Link
        className={clsx(
          "text-[14px] rounded-md py-1 px-5 w-[90%] hover:no-underline block",
          isActive
            ? "text-primary bg-primary/15"
            : "text-base-700 hover:text-base-400 dark:text-base-300 dark:hover:text-base-600",
        )}
        autoAddBaseUrl={autoAddBaseUrl}
        aria-current={isActive ? "page" : undefined}
        to={href}
        {...(isInternalLink && {
          onClick: onItemClick ? () => onItemClick(item) : undefined,
        })}
        {...props}
      >
        {label}
        {!isInternalLink && <IconExternalLink />}
      </Link>
    </li>
  );
}
