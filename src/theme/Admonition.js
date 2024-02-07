import React from "react";
import Admonition from "@theme-original/Admonition";

export default function AdmonitionWrapper(props) {
  let icon = "📘";
  let title = props.title || "";

  if (props.type == "danger") {
    icon = "❗️";
  } else if (props.type == "info") {
    icon = "📘";
  } else if (props.type == "warning") {
    icon = "⚠️";
  } else if (props.type == "success") {
    icon = "👍";
  }

  return <Admonition title={title} icon={icon} {...props} />;
}
