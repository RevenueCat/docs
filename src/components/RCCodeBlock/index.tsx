import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";

// Define types for the language enum
enum Languages {
  swift = "swift",
  objectiveC = "objc",
  java = "java",
  kotlin = "kotlin",
  javascript = "js",
  reactNative = "rn",
  flutter = "flutter",
  unity = "unity",
  cordova = "cordova",
  capacitor = "capacitor",
  typescript = "ts",
  tsx = "tsx",
  svelte = "svelte",
  brightscript = "brightscript",
  json = "json",
  kmp = "kmp",
}

// Define types for tab items
interface CodeTab {
  type: Languages;
  content: string;
  title?: string;
  name?: string;
  region?: string;
}

// Define props interface
interface RCCodeBlockProps {
  tabs: CodeTab[];
}

const RCCodeBlock: React.FC<RCCodeBlockProps> & {
  languages: typeof Languages;
} = (props) => {
  return (
    <Tabs
      groupId="language"
      values={props.tabs.map((tab) => {
        let title = tab.title || tab.name || getTabTitle(tab.type);

        return { label: title, value: tab.title || tab.name || tab.type };
      })}
    >
      {props.tabs.map((tab) => {
        let content = tab.content;

        // extract content from a region in this format:
        // `// MARK: regionName
        //  content
        // `// END
        // keep in mind, there may be multiple regions in a file, so only consider the end of the current region
        // exclude the first and last line of the region
        if (tab.region) {
          const region = tab.region;
          const start = content.indexOf(`// MARK: ${region}`);
          const end = content.indexOf("// END", start);
          content = content.substring(start, end);
          content = content.split("\n").slice(1, -1).join("\n");
        }

        return (
          <TabItem value={tab.title || tab.name || tab.type} key={tab.type}>
            <CodeBlock
              showLineNumbers={true}
              language={getLanguageType(tab.type)}
            >
              {content}
            </CodeBlock>
          </TabItem>
        );
      })}
    </Tabs>
  );
};

// Attach languages enum to component
RCCodeBlock.languages = Languages;

function getTabTitle(type: Languages): string {
  switch (type) {
    case Languages.swift:
      return "Swift";
    case Languages.objectiveC:
      return "Obj-C";
    case Languages.java:
      return "Java";
    case Languages.kotlin:
      return "Kotlin";
    case Languages.kmp:
      return "Kotlin MP";
    case Languages.javascript:
      return "JavaScript";
    case Languages.reactNative:
      return "React Native";
    case Languages.flutter:
      return "Flutter";
    case Languages.unity:
      return "Unity";
    case Languages.cordova:
      return "Cordova";
    case Languages.capacitor:
      return "Capacitor";
    case Languages.typescript:
      return "TypeScript";
    case Languages.brightscript:
      return "BrightScript";
    default:
      return "Code";
  }
}

function getLanguageType(type: Languages): string {
  switch (type) {
    case Languages.swift:
      return "swift";
    case Languages.objectiveC:
      return "objectivec";
    case Languages.java:
      return "java";
    case Languages.kotlin:
      return "kotlin";
    case Languages.kmp:
      return "kotlin";
    case Languages.javascript:
      return "jsx";
    case Languages.reactNative:
      return "jsx";
    case Languages.flutter:
      return "dart";
    case Languages.unity:
      return "cpp";
    case Languages.cordova:
      return "jsx";
    case Languages.capacitor:
      return "jsx";
    case Languages.json:
      return "json";
    case Languages.typescript:
      return "tsx";
    case Languages.tsx:
      return "tsx";
    case Languages.svelte:
      return "html";
    case Languages.brightscript:
      return "brightscript";
    default:
      return "Code";
  }
}

export default RCCodeBlock;
