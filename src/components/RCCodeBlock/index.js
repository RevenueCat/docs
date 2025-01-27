import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";
import PropTypes from "prop-types";

const RCCodeBlock = (props) => {
  return (
    <Tabs
      groupId="language"
      values={props.tabs.map((tab) => {
        let title = tab.title || tab.name || getTabTitle(tab.type);

        return { label: title, value: tab.title || tab.name || tab.type };
      })}
    >
      {props.tabs.map((tab) => {
        var content = tab.content;

        // extract content from a region in this format:
        // `// MARK: regionName
        //  content
        // `// END
        // keep in mind, there may be multiple regions in a file, so only consider the end of the current region
        // exclude the first and last line of the region
        if (tab.region) {
          var region = tab.region;
          var start = content.indexOf(`// MARK: ${region}`);
          var end = content.indexOf("// END", start);
          content = content.substring(start, end);
          content = content.split("\n").slice(1, -1).join("\n");
        }

        return (
          <TabItem value={tab.title || tab.name || tab.type}>
            <CodeBlock
              showLineNumbers={true}
              language={getLanguageType(tab.type)}
              children={content}
            />
          </TabItem>
        );
      })}
    </Tabs>
  );
};

const Languages = {
  swift: "swift",
  objectiveC: "objc",
  java: "java",
  kotlin: "kotlin",
  javascript: "js",
  reactNative: "rn",
  flutter: "flutter",
  unity: "unity",
  cordova: "cordova",
  capacitor: "capacitor",
  typescript: "ts",
  svelte: "svelte",
  brightscript: "brightscript",
};

RCCodeBlock.languages = Languages;

RCCodeBlock.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(Object.values(Languages)).isRequired,
      content: PropTypes.string.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
      region: PropTypes.string,
    }),
  ).isRequired,
};

function getTabTitle(type) {
  switch (type) {
    case "swift":
      return "Swift";
    case "objc":
      return "Obj-C";
    case "java":
      return "Java";
    case "kotlin":
      return "Kotlin";
    case "js":
      return "JavaScript";
    case "rn":
      return "React Native";
    case "flutter":
      return "Flutter";
    case "unity":
      return "Unity";
    case "cordova":
      return "Cordova";
    case "capacitor":
      return "Capacitor";
    case "typescript":
      return "TypeScript";
    case "brightscript":
      return "BrightScript";
    default:
      return "Code";
  }
}

function getLanguageType(type) {
  switch (type) {
    case "swift":
      return "swift";
    case "objc":
      return "objectivec";
    case "java":
      return "java";
    case "kotlin":
      return "kotlin";
    case "js":
      return "jsx";
    case "rn":
      return "jsx";
    case "flutter":
      return "dart";
    case "unity":
      return "cpp";
    case "cordova":
      return "jsx";
    case "capacitor":
      return "jsx";
    case "json":
      return "jsx";
    case "ts":
      return "tsx";
    case "tsx":
      return "tsx";
    case "svelte":
      return "html";
    case "brightscript":
      return "brightscript";
    default:
      return "Code";
  }
}

export default RCCodeBlock;
