import React from "react";
import Admonition from "@theme-original/Admonition";

interface AdmonitionProps {
  type?: "danger" | "info" | "warning" | "success" | string;
  title?: string;
  [key: string]: any; // for other props passed through
}

export default function AdmonitionWrapper(
  props: AdmonitionProps,
): React.ReactNode {
  let icon: string | null = null;
  let title: string | null = null;

  if (props.type === "danger") {
    icon = "❗️";
    title = "Danger";
  } else if (props.type === "info") {
    icon = "📘";
    title = "Information";
  } else if (props.type === "warning") {
    icon = "⚠️";
    title = "Keep in mind";
  } else if (props.type === "success") {
    icon = "👍";
    title = "";
  }

  if (props.title) {
    title = props.title;
  } else {
    title = "";
    icon = null;
  }

  return (
    <div style={{ marginTop: "2rem" }}>
      <Admonition title={title} icon={icon} {...props} />
    </div>
  );
}
