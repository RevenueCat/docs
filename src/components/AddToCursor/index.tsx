import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import "./styles.css";

interface AddToCursorProps {
  name: string;
  config: object;
  alt?: string;
  height?: number;
}

const AddToCursor: React.FC<AddToCursorProps> = ({
  name,
  config,
  alt = `Add ${name} MCP server to Cursor`,
  height = 32,
}) => {
  const { colorMode } = useColorMode();

  // Encode the config object to base64
  const encodedConfig = btoa(JSON.stringify(config));

  // Construct the Cursor install URL
  const installUrl = `https://cursor.com/en/install-mcp?name=${encodeURIComponent(name)}&config=${encodedConfig}`;

  // Use dark button for light mode, light button for dark mode
  const buttonImage =
    colorMode === "dark"
      ? "https://cursor.com/deeplink/mcp-install-light.svg"
      : "https://cursor.com/deeplink/mcp-install-dark.svg";

  return (
    <div className="add-to-cursor">
      <a href={installUrl} target="_blank" rel="noopener noreferrer">
        <img src={buttonImage} alt={alt} height={height} />
      </a>
    </div>
  );
};

export default AddToCursor;
