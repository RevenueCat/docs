import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import Heading from "@theme/Heading";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const Logo = require("@site/static/img/logo-rc.svg").default;
  const CodeIcon = require("@site/static/img/code.svg").default;
  const TruckIcon = require("@site/static/img/truck.svg").default;
  const HandshakeIcon = require("@site/static/img/handshake.svg").default;
  const ChartIcon = require("@site/static/img/chart.svg").default;
  const TooolboxIcon = require("@site/static/img/toolbox.svg").default;
  const CircuitIcon = require("@site/static/img/circuit.svg").default;
  const RCAsset = require("@site/static/img/landing-image.png").default;

  return (
    // Hero
    <section className="">
      <div>
        <Heading as="h1" className="">RevenueCat Developer Hub</Heading>
        <p>Everything you need to implement and manage...</p>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Documentation | RevenueCat`}
      description="Build a customized mobile subscription business with RevenueCat. We do the heavy lifting of normalizing subscribers from any source and maintain a single source of truth for subscription status, so you can get back to building your app."
    >
      <HomepageHeader />
      <main>{/* <HomepageFeatures /> */}</main>
    </Layout>
  );
}
