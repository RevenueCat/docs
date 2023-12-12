import styles from "./styles.module.css";

export default function ExternalButton(props) {
  return (
    <a href={props.href} class={styles.external_button} target="_blank">
      {props.title}
    </a>
  );
}
