import React from "react";
// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";
import RCCodeBlock from "@site/src/components/RCCodeBlock";
import YouTubeEmbed from "@site/src/components/YouTubeEmbed";
import SampleApp from "../components/SampleApp/SampleApp";
import Button from "@site/src/components/Button/Button";
import FeatureItem from "@site/src/components/FeatureItem/FeatureItem";
import ContentCardItem from "@site/src/components/ContentCardItem/ContentCardItem";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  RCCodeBlock,
  YouTubeEmbed,
  SampleApp,
  Button,
  FeatureItem,
  ContentCardItem,
};
