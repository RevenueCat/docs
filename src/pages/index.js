import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

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
    <section className={clsx("hero hero--secondary", styles.heroSection)}>
      <div className={clsx("container", styles.container)}>

        <div className={styles.containerLeft}>
          <Logo className={styles.logo} role="img" />

          <p className={styles.smallTitle}>
            Developer Hub
          </p>
          <Heading as="h1" className={styles.title}>
            {" "}
            Everything you need to manage in-app purchases and
            subscriptions
          </Heading>
          <p className={styles.mainText}>
            {" "}
            Welcome to the RevenueCat Developer Hub. You'll find detailed guides
            and documentation to help you start working with RevenueCat as quickly
            as possible, as well as support if you get stuck. Let's jump right in!
          </p>

          <Link
            className={clsx("button button--primary button--lg", styles.button)}
            to="/welcome/overview/"
          >
            Get Started
          </Link>

          <div className={styles.containerQuickLinks}>
            <p className={styles.quickLinksTitle}>Quick Links</p>
            <div className={styles.quickLinks}>
              <div className={styles.quickLink}>
                <CodeIcon className={styles.quickLinkIcon} role="img" />
                <a href="/docs/getting-started/quickstart" className={styles.quickLinkText}>SDK Quickstart</a>
              </div>
              <div className={styles.quickLink}>
                <TruckIcon className={styles.quickLinkIcon} role="img" />
                <a href="/docs/migrating-to-revenuecat/migrating-existing-subscriptions" className={styles.quickLinkText}>Migrating to RevenueCat</a>
              </div>
              <div className={styles.quickLink}>
                <HandshakeIcon className={styles.quickLinkIcon} role="img" />
                <a href="/docs/revenuecat-support/support-first-steps" className={styles.quickLinkText}>RevenueCat Support</a>
              </div>
              <div className={styles.quickLink}>
                <ChartIcon className={styles.quickLinkIcon} role="img" />
                <a href="/docs/dashboard-and-metrics/overview" className={styles.quickLinkText}>Dashboard & Metrics</a>
              </div>
              <div className={styles.quickLink}>
                <TooolboxIcon className={styles.quickLinkIcon} role="img" />
                <a href="https://www.revenuecat.com/docs/tools/paywalls" className={styles.quickLinkText}>Tools</a>
              </div>
              <div className={styles.quickLink}>
                <CircuitIcon className={styles.quickLinkIcon} role="img" />
                <a href="/docs/integrations/integrations" className={styles.quickLinkText}>Integrations</a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.containerRight}>
          <img src={RCAsset} />
        </div>
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
