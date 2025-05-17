import React, { useEffect, useState } from "react";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

// Custom link component to open all links in a new tab
const Link = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a {...props} target="_blank" rel="noopener noreferrer">
    {props.children}
  </a>
);

export default function GuidePreview() {
  const [mdx, setMdx] = useState<string | null>(null);
  const [Content, setContent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    // Listen for the MDX string sent from the opener
    function handleMessage(event: MessageEvent) {
      if (typeof event.data === "string") {
        setMdx(event.data);
      }
    }
    window.addEventListener("message", handleMessage, { once: true });

    // Optionally, request the MDX from the opener
    if (window.opener) {
      window.opener.postMessage("request-mdx", "*");
    }

    return () => window.removeEventListener("message", handleMessage);
  }, []);

  useEffect(() => {
    if (mdx) {
      (async () => {
        const { default: Comp } = await evaluate(mdx, {
          ...runtime,
          useMDXComponents: () => ({ a: Link }),
        });
        setContent(() => Comp);
      })();
    }
  }, [mdx]);

  // Warn on tab close
  useEffect(() => {
    const handler = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "Your changes will be lost";
      return "Your changes will be lost";
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, []);

  if (!mdx || !Content) {
    return (
      <div
        style={{ textAlign: "center", marginTop: "4rem", fontSize: "1.5rem" }}
      >
        Loading guide...
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: 800,
        margin: "2rem auto",
        background: "#fff",
        padding: 32,
        borderRadius: 8,
      }}
    >
      <Content />
    </div>
  );
}
