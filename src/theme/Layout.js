import React, { useEffect } from "react";
import { useLocation } from "@docusaurus/router";

const GTM_ID = "GTM-NJWQK6DX";

const Layout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "gtm-route-change",
        pagePath: location.pathname + location.search,
        pageTitle: document.title,
      });
    }
  }, [location]);

  return <>{children}</>;
};

export default Layout;
