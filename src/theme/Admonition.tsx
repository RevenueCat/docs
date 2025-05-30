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
  let icon: string = "📘";
  let title: string = props.title || "";

  if (props.type === "danger") {
    icon = "❗️";
  } else if (props.type === "info") {
    icon = "📘";
  } else if (props.type === "warning") {
    icon = "⚠️";
  } else if (props.type === "success") {
    icon = "👍";
  }

  return <Admonition title={title} icon={icon} {...props} />;
}
