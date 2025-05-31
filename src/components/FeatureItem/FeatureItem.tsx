import styles from "./styles.module.css";
import { CatIcon } from "../../theme/CatIcon/CatIcon";

const FeatureItem = ({ title, subtitle, link, iconName, iconColor }) => {
  var color = iconColor || "var(--rc-blue-primary)";
  return (
    <a href={link} className={styles["feature-container"]}>
      <div className={styles["emoji-background"]}>
        <CatIcon name={iconName} customColor={iconColor} />
      </div>
      <div className={styles["content"]}>
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
    </a>
  );
};

export default FeatureItem;
