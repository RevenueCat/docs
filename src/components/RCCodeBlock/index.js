import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";

export default function RCCodeBlock(props) {
  return (
    <Tabs
      groupId="language"
      values={props.tabs.map((tab) => {
        let title = tab.title || getTabTitle(tab.type);

        return { label: title, value: tab.title || tab.type };
      })}
    >
      {props.tabs.map((tab) => {
        return (
          <TabItem value={tab.title || tab.type}>
            <CodeBlock language={tab.type} children={tab.content} />
          </TabItem>
        );
      })}
    </Tabs>
  );
}

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
    case "dart":
      return "Flutter";
    case "csharp":
      return "Unity";
    case "cordova":
      return "Cordova";
    case "capacitor":
      return "Capacitor";
    default:
      return "Code";
  }
}
