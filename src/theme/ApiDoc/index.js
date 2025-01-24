import React from "react";
import ApiDoc from "@theme-original/ApiDoc";
import Head from "@docusaurus/Head";

export default function ApiDocWrapper(props) {
  // Adds meta robots directive to any specs that have the top-level field `x-revenuecat-hidden` set to `true`.
  const hidden = props.specProps.spec["x-revenuecat-hidden"] === true;
  return (
    <>
      {hidden && (
        <Head>
          <meta name="robots" content="noindex, nofollow" />
        </Head>
      )}
      <ApiDoc {...props} />
    </>
  );
}
