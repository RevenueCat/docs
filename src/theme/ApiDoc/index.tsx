import React from "react";
import ApiDoc from "@theme-original/ApiDoc";
import Head from "@docusaurus/Head";

interface ApiDocProps {
  specProps: {
    spec: {
      "x-revenuecat-hidden"?: boolean;
    };
  };
}

export default function ApiDocWrapper(props: ApiDocProps): React.ReactElement {
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
