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
};

RCCodeBlock.languages = Languages;

RCCodeBlock.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(Object.values(Languages)).isRequired,
      content: PropTypes.string.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};

function getTabTitle(type) {
  switch (type) {
    case "swift":
      return "Swift";
    case "objc":
      return "Objective-C";
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
    default:
      return "Code";
  }
}

export default RCCodeBlock;
