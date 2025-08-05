import styles from "./styles.module.css";
import { CatIcon } from "../../theme/CatIcon/CatIcon";
import { IconName } from "@site/src/theme/CatIcon/types";

type FeatureItemProps = {
  title: string;
  subtitle?: string;
  link?: string;
  iconName?: IconName;
  iconColor?: string;
};

const FeatureItem = ({
  title,
  subtitle,
  link,
  iconName,
  iconColor,
}: FeatureItemProps) => {
  var color = iconColor || "var(--rc-blue-primary)";
  return (
    <a href={link} className={styles["feature-container"]}>
      <div className={styles["emoji-background"]}>
        <CatIcon name={iconName} customColor={iconColor} />
      </div>
      <div className={styles["content"]}>
        <div>
          <h2 className={styles["title"]}>
            <CatIcon
              className={styles["icon"]}
              name={iconName}
              customColor={color}
              size={24}
            />
            &nbsp;&nbsp;{title}
          </h2>
          <p className={styles["subtitle"]}>{subtitle}</p>
        </div>
      </div>
    </a>
  );
};

export default FeatureItem;
