import React from "react";
import styles from "./styles.module.css";

interface ExternalButtonProps {
  href: string;
  title: string;
}

export default function ExternalButton({
  href,
  title,
}: ExternalButtonProps): React.ReactElement {
  return (
    <a
      href={href}
      className={styles.external_button}
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  );
}
