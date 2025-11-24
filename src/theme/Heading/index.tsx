import React, { ReactNode, useState } from "react";
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

  const [copied, setCopied] = useState(false);

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
        "flex items-center",
      )}
      id={id}
    >
      {props.children}
      <Link
        className="hash-link"
        to={`#${id}`}
        aria-label={anchorTitle}
        title={anchorTitle}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          navigator.clipboard.writeText(
            `${window.location.href.split("#")[0]}#${id}`,
          );
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 1500);
        }}
      >
        &#8203;
      </Link>
      {copied && (
        <span
          style={{
            color: "#166534",
            backgroundColor: "#bbf7d0",
            height: "fit-content",
            padding: "4px 8px",
            fontSize: "12px",
            borderRadius: "99px",
            fontWeight: "400",
            marginLeft: "8px",
          }}
        >
          Copied
        </span>
      )}
    </As>
  );
}
