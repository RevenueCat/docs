import React from "react";
// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";
import RCCodeBlock from "@site/src/components/RCCodeBlock";
import YouTubeEmbed from "@site/src/components/YouTubeEmbed";
import SampleApp from "../components/SampleApp/SampleApp";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  RCCodeBlock,
  YouTubeEmbed,
  SampleApp,
};
