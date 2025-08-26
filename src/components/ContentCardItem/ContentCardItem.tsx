import React from "react";
import styles from "./item.styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

interface ContentCardLinkProps {
  link: string;
  title: string;
}
export interface ContentCardItemProps {
  title: string;
  subtitle: string;
  link: string;
  icon: string;
  links: ContentCardLinkProps[];
}

const ContentCardItem: React.FC<ContentCardItemProps> = ({
  title,
  subtitle,
  link,
  icon,
  links,
}) => {
  let img = useBaseUrl(`/docs_images/${icon}`);

  // Determine the href for the root <a> tag
  let rootHref = link || (links && links.length > 0 ? links[0].link : "");

  // if link starts with /docs/, remove it and change links to link using useBaseUrl
  if (rootHref.startsWith("/docs/")) {
    //remove the docs/ prefix
    rootHref = rootHref.replace("/docs/", "");
    rootHref = useBaseUrl(rootHref);
  }

  return (
    <a href={rootHref} className={styles["feature-container"]}>
      <div className={styles["content"]}>
        <h2 className={styles["title"]}>{title}</h2>
        <p className={styles["subtitle"]}>{subtitle}</p>

        <ul className={styles["links-list"]}>
          {links &&
            links.map((link, index) => (
              <li key={index}>
                <a href={link.link ? link.link : ""} className={styles["link"]}>
                  {link.title}
                </a>
              </li>
            ))}
        </ul>
      </div>
      <div className={styles["icon-background"]}>
        <img src={img} alt={title} />
      </div>
    </a>
  );
};

export default ContentCardItem;

export const ContentCardItemProvider: React.FC<ContentCardItemProps> = ({
  title,
  subtitle,
  link,
  icon,
  links,
}) => {
  return (
    <ContentCardItem
      title={title}
      subtitle={subtitle}
      link={link}
      icon={icon}
      links={links}
    />
  );
};
