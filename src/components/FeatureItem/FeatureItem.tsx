import styles from "./styles.module.css";

const FeatureItem = ({ title, subtitle, link, emoji }) => {
  return (
    <a href={link} className={styles["feature-container"]}>
      <div className={styles["emoji-background"]}>{emoji}</div>
      <div className={styles["content"]}>
        <h2 className={styles["title"]}>
          {emoji}&nbsp;&nbsp;{title}
        </h2>
        <p className={styles["subtitle"]}>{subtitle}</p>
      </div>
    </a>
  );
};

export default FeatureItem;
