import React, { useState, useRef, useEffect } from "react";
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
  bash = "bash",
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
  collapsible?: boolean; // Enable/disable collapse (default: true)
  maxHeight?: number; // Height threshold in pixels (default: 300)
  maxLines?: number; // Line count threshold (default: 10)
  defaultCollapsed?: boolean; // Force initial state
}

// Props for the CollapsibleCodeBlock component
interface CollapsibleCodeBlockProps {
  children: React.ReactNode;
  content: string;
  collapsible: boolean;
  maxHeight: number;
  maxLines: number;
  defaultCollapsed?: boolean;
}

// CollapsibleCodeBlock component that wraps individual code blocks
const CollapsibleCodeBlock: React.FC<CollapsibleCodeBlockProps> = ({
  children,
  content,
  collapsible,
  maxHeight,
  maxLines,
  defaultCollapsed,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [shouldShowCollapse, setShouldShowCollapse] = useState(false);

  useEffect(() => {
    if (!collapsible) return;

    // Check if content should be collapsible based on line count
    const lineCount = content.split("\n").length;
    const shouldCollapse = lineCount > maxLines;

    setShouldShowCollapse(shouldCollapse);

    // Set initial state
    if (shouldCollapse) {
      setIsCollapsed(defaultCollapsed ?? true);
    }
  }, [content, collapsible, maxLines, defaultCollapsed]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  if (!collapsible || !shouldShowCollapse) {
    return <>{children}</>;
  }

  return (
    <div className="rc-collapsible-codeblock">
      <div
        ref={containerRef}
        className={`rc-codeblock-container ${isCollapsed ? "collapsed" : "expanded"}`}
        style={{
          maxHeight: isCollapsed ? `${maxHeight}px` : "none",
          overflow: "hidden",
          position: "relative",
          transition: "max-height 0.3s ease-in-out",
        }}
      >
        <style>{`
          .rc-codeblock-container .prism-code,
          .rc-codeblock-container pre,
          .rc-codeblock-container > div {
            margin-bottom: 0 !important;
            padding-bottom: 0 !important;
          }
        `}</style>
        {children}
        {isCollapsed && (
          <div
            className="rc-codeblock-fade"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "60px",
              background:
                "linear-gradient(transparent, var(--ifm-background-color))",
              pointerEvents: "none",
            }}
          />
        )}
      </div>
      <button
        onClick={toggleCollapse}
        className="rc-codeblock-toggle"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          width: "100%",
          padding: "8px",
          margin: 0,
          backgroundColor: "var(--ifm-color-emphasis-200)",
          border: "1px solid var(--ifm-color-emphasis-300)",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "14px",
          color: "var(--ifm-color-content)",
          transition: "background-color 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor =
            "var(--ifm-color-emphasis-300)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor =
            "var(--ifm-color-emphasis-200)";
        }}
        aria-expanded={!isCollapsed}
        aria-label={isCollapsed ? "Expand code block" : "Collapse code block"}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          style={{
            transform: isCollapsed ? "rotate(0deg)" : "rotate(180deg)",
            transition: "transform 0.2s ease",
          }}
        >
          <path fill="currentColor" d="M8 12l-4-4h8l-4 4z" />
        </svg>
        {isCollapsed ? "Show more" : "Show less"}
      </button>
    </div>
  );
};

const RCCodeBlock: React.FC<RCCodeBlockProps> & {
  languages: typeof Languages;
} = (props) => {
  // Set default values for collapsible props
  const {
    collapsible = true,
    maxHeight = 300,
    maxLines = 10,
    defaultCollapsed,
  } = props;

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
            <CollapsibleCodeBlock
              content={content}
              collapsible={collapsible}
              maxHeight={maxHeight}
              maxLines={maxLines}
              defaultCollapsed={defaultCollapsed}
            >
              <CodeBlock
                showLineNumbers={true}
                language={getLanguageType(tab.type)}
              >
                {content}
              </CodeBlock>
            </CollapsibleCodeBlock>
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
    case Languages.bash:
      return "Bash";
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
    case Languages.bash:
      return "bash";
    default:
      return "Code";
  }
}

export default RCCodeBlock;
