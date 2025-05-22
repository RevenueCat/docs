import React, { useEffect, useState } from "react";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import { TroubleshootingWizard } from "../TroubleshootingWizard";
import FeatureItem from "../FeatureItem/FeatureItem";
import YouTubeEmbed from "../YouTubeEmbed";
import Button from "../Button/Button";
import ContentCardItem from "../ContentCardItem/ContentCardItem";
import ExternalButton from "../ExternalButton";
import RCCodeBlock from "../RCCodeBlock";
import rehypeSlug from "rehype-slug";

// Custom link component to open all links in a new tab
const Link = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (props.href && props.href.startsWith("#")) {
      e.preventDefault();
      const id = props.href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.location.hash = props.href;
      }
    }
    // Otherwise, let the default behavior happen (for external links)
  };
  return (
    <a
      {...props}
      target={props.href && props.href.startsWith("#") ? undefined : "_blank"}
      rel="noopener noreferrer"
      onClick={handleClick}
    >
      {props.children}
    </a>
  );
};

// Demo section always shown at the top of the guide
const DemoSection = () => (
  <div
    className="theme-admonition theme-admonition-info alert alert--info"
    style={{ maxWidth: 800, margin: "0 0 2rem 0" }}
  >
    <div className="heading" style={{ textAlign: "left", fontWeight: 700 }}>
      SEE HOW REVENUECAT WORKS IN PRACTICE
    </div>
    <div style={{ textAlign: "left" }}>
      <p style={{ marginBottom: 8 }}>
        <a
          href="https://demo.revenuecat.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          demo.revenuecat.com
        </a>{" "}
        is a public-facing sandbox project provided by RevenueCat.
      </p>
      <p style={{ marginBottom: 0 }}>
        If you want to explore the dashboard on your own, check out our
        dashboard sandbox. It's a great way to see what a real-life app setup
        could look like, including features like purchasing, subscriptions,
        entitlements, and offering configuration, all without requiring you to
        build a full app from scratch.
      </p>
    </div>
  </div>
);
export default function GuidePreview() {
  const [mdx, setMdx] = useState<string | null>(null);
  const [Content, setContent] = useState<React.ComponentType | null>(null);

  // Timed loading messages
  const loadingMessages = [
    "Starting to generate your custom guide. Here's what we're doing:",
    "1. we grab the initial input and polish it up",
    "2. we use some internal context to find the most relevant documentation",
    "3. we chunk the documentation into smaller parts for easier reading",
    "4. we do some extra RevenueCat magic",
    "5. we bring it all together!",
    "(your guide will be ready in a few seconds)",
  ];
  const [messageIndex, setMessageIndex] = useState(0);
  const [revealed, setRevealed] = useState([loadingMessages[0]]);

  useEffect(() => {
    // Check for testing mode via ?test=1
    const urlParams = new URLSearchParams(window.location.search);
    const isTest = urlParams.get("test") === "1";
    if (isTest) {
      fetch("/output.json")
        .then((res) => res.json())
        .then((data) => {
          if (data && data.guide) {
            setMdx(data.guide);
            console.log(
              "[GuidePreview] Loaded MDX from output.json:",
              data.guide,
            );
          } else {
            setMdx("# No guide found in output.json");
          }
        })
        .catch((err) => {
          setMdx(`# Error loading output.json: ${err}`);
        });
      return;
    }

    // Listen for the MDX string sent from the opener
    function handleMessage(event: MessageEvent) {
      if (typeof event.data === "string") {
        console.log("[GuidePreview] Raw MDX response received:", event.data);
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
          rehypePlugins: [rehypeSlug],
          useMDXComponents: () => ({
            a: Link,
            TroubleshootingWizard,
            FeatureItem,
            YouTubeEmbed,
            Button,
            ContentCardItem,
            ExternalButton,
            RCCodeBlock,
          }),
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

  useEffect(() => {
    if (messageIndex < loadingMessages.length - 1) {
      const next = setTimeout(() => {
        setMessageIndex((i) => {
          const nextIndex = i + 1;
          setRevealed((prev) => [...prev, loadingMessages[nextIndex]]);
          return nextIndex;
        });
      }, 8000);
      return () => clearTimeout(next);
    }
  }, [messageIndex]);

  // Loading UI while waiting for MDX and Content
  if (!mdx || !Content) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          paddingTop: "10vh",
        }}
      >
        <div
          style={{
            maxWidth: 800,
            margin: "2rem auto 0 auto",
            background: "#fff",
            padding: 32,
            borderRadius: 8,
          }}
        >
          <DemoSection />
        </div>
        <style>
          {`
            .spinner {
              border: 4px solid #eee;
              border-top: 4px solid var(--ifm-color-primary);
              border-radius: 50%;
              width: 40px;
              height: 40px;
              animation: spin 1s linear infinite;
              margin: 0 auto 1rem;
            }
            @keyframes spin {
              0% { transform: rotate(0deg);}
              100% { transform: rotate(360deg);}
            }
            .glow-message {
              display: inline-block;
              min-height: 40px;
              font-family: var(--ifm-font-family-base);
              font-size: 0.95rem;
              font-weight: 500;
              background: linear-gradient(90deg, var(--ifm-color-primary-light) 0%, var(--ifm-color-primary-lighter, #e0e7ff) 40%, rgba(255,255,255,0.5) 50%, var(--ifm-color-primary-lighter, #e0e7ff) 60%, var(--ifm-color-primary-light) 100%);
              background-size: 200% 100%;
              background-position: 0% 0%;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              animation: glow-move 2s linear infinite;
            }
            @keyframes glow-move {
              0% { background-position: 100% 0%; }
              100% { background-position: 0% 0%; }
            }
            .loading-message {
              display: block;
              min-height: 40px;
              font-family: var(--ifm-font-family-base);
              font-size: 0.95rem;
              font-weight: 500;
              color: var(--ifm-font-base-color, #222);
              margin: 0.2em 0;
            }
          `}
        </style>
        <div className="spinner" />
        <div
          style={{
            marginTop: 8,
            width: 520,
            maxWidth: "90vw",
            background: "#fff",
            border: "1px solid var(--ifm-color-emphasis-200, #e5e7eb)",
            borderRadius: 12,
            boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
            padding: "32px 28px",
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            minHeight: 60,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {revealed.map((msg, i) =>
            i === revealed.length - 1 ? (
              <div key={i} className="glow-message">
                {msg}
              </div>
            ) : (
              <div key={i} className="loading-message">
                {msg}
              </div>
            ),
          )}
        </div>
      </div>
    );
  }

  // Render the loaded guide
  return (
    <>
      {/* Top-right warning box */}
      <div
        style={{
          position: "fixed",
          top: 24,
          right: 24,
          zIndex: 1000,
          background: "#fff",
          border: "1.5px solid var(--ifm-color-primary)",
          borderRadius: 12,
          boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
          padding: "20px 28px 20px 24px",
          minWidth: 280,
          maxWidth: 340,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 12,
        }}
        className="guide-warning-box"
      >
        <div
          style={{
            fontWeight: 600,
            fontSize: "1.08rem",
            marginBottom: 4,
            color: "var(--ifm-color-primary)",
          }}
        >
          Don't lose your guide!
        </div>
        <div style={{ fontSize: "0.98rem", color: "#333", marginBottom: 10 }}>
          If you leave or refresh this page, your personalized guide will
          disappear.
          <br />
          <b>Download it to keep a copy.</b>
        </div>
        <button
          style={{
            background: "var(--ifm-color-primary)",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "10px 18px",
            fontWeight: 500,
            fontSize: "1rem",
            cursor: "pointer",
            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
            marginTop: 2,
          }}
          onClick={() => window.print()}
        >
          Download as PDF
        </button>
      </div>
      {/* Print-specific CSS to hide the warning box when printing */}
      <style>{`
        @media print {
          .guide-warning-box {
            display: none !important;
          }
        }
      `}</style>
      <div
        style={{
          maxWidth: 800,
          margin: "1rem auto",
          background: "#fff",
          padding: 32,
          borderRadius: 8,
        }}
      >
        <DemoSection />
        <Content />
      </div>
    </>
  );
}
