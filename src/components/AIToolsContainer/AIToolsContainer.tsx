import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { useState, useEffect } from "react";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import clsx from "clsx";

type AIToolsContainerProps = {};

const AIToolsContainer = ({}: AIToolsContainerProps) => {
  const isBrowser = useIsBrowser();
  const { metadata } = useDoc();
  const [currentUrl, setCurrentUrl] = useState(
    "https://www.revenuecat.com/docs",
  );
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isBrowser) {
      setCurrentUrl(window.location.href);
    }
  }, [isBrowser]);

  const createAIProviderUrl = (baseUrl: string, prompt: string) => {
    const message = currentUrl ? `Use ${currentUrl} as context.\n\n` : "";
    return `${baseUrl}${encodeURIComponent(message + prompt)}`;
  };

  const handleCopyMarkdown = async () => {
    const markdown = await fetch(copyAsMarkdownProvider.baseUrl).then(
      (response) => response.text(),
    );
    void navigator.clipboard.writeText(markdown);

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const aiProviders = [
    {
      name: "AI",
      baseUrl: "https://app.revenuecat.com/settings/support?tab=help&q=",
      image: "/docs_images/integrations/icons/rc.png",
      displayTitle: true,
    },
    {
      name: "ChatGPT",
      baseUrl: "https://chat.openai.com/?q=",
      image: "/docs_images/integrations/icons/chatgpt.png",
      displayTitle: false,
    },
    {
      name: "Claude",
      baseUrl: "https://claude.ai/new?q=",
      image: "/docs_images/integrations/icons/claude.png",
      displayTitle: false,
    },
  ];

  const copyAsMarkdownProvider = {
    name: "Copy as markdown",
    baseUrl: `https://raw.githubusercontent.com/RevenueCat/docs/refs/heads/main/${metadata.source.replace("@site/", "")}`,
    image: "/docs_images/integrations/icons/markdown-logo.jpg",
  };

  return (
    <div className={styles["ai-tools-container"]}>
      <div className={styles["content"]}>
        <div className={styles["ai-providers"]}>
          {aiProviders.map((provider) => (
            <a
              key={provider.name}
              href={createAIProviderUrl(provider.baseUrl, "")}
              target="_blank"
              rel="noopener noreferrer"
              className={styles["ai-provider-button"]}
              title={`Ask ${provider.name} about this page`}
            >
              <img
                src={useBaseUrl(provider.image)}
                alt={provider.name}
                className={styles["ai-provider-image"]}
              />
              {provider.displayTitle && (
                <span className={styles["ai-provider-name"]}>
                  Ask {provider.name}
                </span>
              )}
            </a>
          ))}

          {/* Copy as markdown */}
          <div className="flex items-center gap-2">
            <button
              className={styles["ai-provider-button"]}
              onClick={handleCopyMarkdown}
            >
              <img
                src={useBaseUrl(copyAsMarkdownProvider.image)}
                alt="Copy as markdown"
                className={styles["ai-provider-image"]}
              />
            </button>
            <span className={clsx("text-xs", copied ? "visible" : "hidden")}>
              Copied as markdown!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIToolsContainer;
