import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

type AIToolsContainerProps = {};

const AIToolsContainer = ({}: AIToolsContainerProps) => {
  const getCurrentUrl = () => {
    if (typeof window !== "undefined") {
      return window.location.href;
    }
    return "";
  };

  const createAIProviderUrl = (baseUrl: string, prompt: string) => {
    const currentUrl = getCurrentUrl();
    const message = `Use ${currentUrl} as context.\n\n`;
    return `${baseUrl}${encodeURIComponent(message + prompt)}`;
  };

  const aiProviders = [
    {
      name: "AI",
      baseUrl: "https://app.revenuecat.com/support?q=",
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
      baseUrl: "https://claude.ai/chat?q=",
      image: "/docs_images/integrations/icons/claude.png",
      displayTitle: false,
    },
  ];

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
        </div>
      </div>
    </div>
  );
};

export default AIToolsContainer;
