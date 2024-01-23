import React from "react";
// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";
import RCCodeBlock from "@site/src/components/RCCodeBlock";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  RCCodeBlock,
};
