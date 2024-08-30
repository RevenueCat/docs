import React from 'react';
import styles from "./item.styles.module.css";
import useBaseUrl from '@docusaurus/useBaseUrl';

interface ContentCardLinkProps {
    link: string;
    title: string;
}
interface ContentCardItemProps {
    title: string;
    subtitle: string;
    link: string;
    icon: string;
    links: ContentCardLinkProps[];
}

const ContentCardItem: React.FC<ContentCardItemProps> = ({ title, subtitle, link, icon, links }) => {
    let img = useBaseUrl(`/images/${icon}`);
    
    // Determine the href for the root <a> tag
    const rootHref = link || (links && links.length > 0 ? links[0].link : "");

    return (
        <a href={rootHref} className={styles["feature-container"]}>
            <div className={styles["content"]}>
                <h2 className={styles["title"]}>
                    {title}
                </h2>
                <p className={styles["subtitle"]}>{subtitle}</p>
                
                <ul className={styles["links-list"]}>
                    {links && links.map((link, index) => (
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
