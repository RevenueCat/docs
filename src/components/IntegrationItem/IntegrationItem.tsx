import React from 'react';
import styles from "./integration.styles.module.css";
import useBaseUrl from '@docusaurus/useBaseUrl';

interface IntegrationItemProps {
    title: string;
    subtitle: string;
    link: string;
    icon: string;
}

const IntegrationItem: React.FC<IntegrationItemProps> = ({ title, subtitle, link, icon }) => {
    let img = useBaseUrl(`/images/integrations/icons/${icon}.png`);

    return (
        <a href={link} className={styles["feature-container"]}>
            <div className={styles["content"]}>
                <h2 className={styles["title"]}>
                    {title}
                </h2>
                <p className={styles["subtitle"]}>{subtitle}</p>
                <p className={styles["learn-more"]}>Read the docs</p>
            </div>
            <div className={styles["icon-background"]}>
                <img src={img} alt={title} />
            </div>
        </a>
    );
};

export default IntegrationItem;
