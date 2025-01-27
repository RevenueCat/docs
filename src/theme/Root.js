import React, { useEffect } from "react";

/**
 * Hide navigation elements when embedded in the RevenueCat app in an iframe.
 *
 * The initial URL must include an `?embed=true` query parameter. This is set to
 * sessionStorage so that any navigations within the embedded window keep the
 * embed context.
 *
 * Session storage is not shared across tabs, so this will not affect anything
 * else.
 */
const useEmbedMode = () => {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const searchParams = new URLSearchParams(window.location.search);

    if (searchParams.get("embed") === "true") {
      sessionStorage.setItem("embed", "true");
    }

    if (sessionStorage.getItem("embed") === "true") {
      // see src/css/custom.css
      document.body.setAttribute("data-embed", "true");
    }
  }, []);
};

export default function Root({ children }) {
  useEmbedMode();

  return children;
}
