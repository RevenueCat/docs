import React, { ReactNode } from "react";
import clsx from "clsx";
import { translate } from "@docusaurus/Translate";
import { useThemeConfig } from "@docusaurus/theme-common";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

interface HeadingProps {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  id?: string;
  className?: string;
  children: ReactNode;
  [key: string]: any; // For any other props
}

export default function Heading({
  as: As,
  id,
  ...props
}: HeadingProps): React.ReactElement {
  const {
    navbar: { hideOnScroll },
  } = useThemeConfig();

  // H1 headings do not need an id because they don't appear in the TOC.
  if (As === "h1" || !id) {
    if (As === "h1") {
      return <As {...props} id={undefined} className={props.className}>
        {props.children}
      </As>;
    }
    return <As {...props} id={undefined} />;
  }

  const anchorTitle = translate(
    {
      id: "theme.common.headingLinkTitle",
      message: "Direct link to {heading}",
      description: "Title for link to heading",
    },
    {
      heading: typeof props.children === "string" ? props.children : id,
    },
  );

  return (
    <As
      {...props}
      className={clsx(
        "anchor",
        hideOnScroll
          ? styles.anchorWithHideOnScrollNavbar
          : styles.anchorWithStickyNavbar,
        props.className,
        As === "h2" && "mt-16",
        As === "h3" && "mt-12",
      )}
      id={id}
    >
      {props.children}
      <Link
        className="hash-link"
        to={`#${id}`}
        aria-label={anchorTitle}
        title={anchorTitle}
      >
        &#8203;
      </Link>
    </As>
  );
}
