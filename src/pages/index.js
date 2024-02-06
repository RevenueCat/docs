import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  const Svg = require("@site/static/img/logo-rc.svg").default;
  return (
    <header className={clsx("hero hero--secondary", styles.heroBanner)}>
      <div className="container">
        <Svg className={styles.featureSvg} role="img" />

        <Heading as="h1" className="hero__title">
          Developer Hub
        </Heading>
        <p className="hero__subtitle">
          {" "}
          Everything you need to implement and manage in-app purchases and
          subscriptions
        </p>
        <p>
          {" "}
          Welcome to the RevenueCat Developer Hub. You'll find comprehensive
          guides and documentation to help you start working with RevenueCat as
          quickly as possible, as well as support if you get stuck. Let's jump
          right in!
          <br />
          <br />
        </p>

        <div className={styles.bottomContainer}>
          <img src="https://revenuecat.dreamhosters.com/wp-content/uploads/2023/11/Powering-existing-subscriptions-with-RevenueCat.png" alt="RevenueCat supported stores" className={styles.image} />


          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/welcome/overview"
            >
              Get Started
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/getting-started/quickstart"
            >
              Install the SDK
            </Link>
          </div>
        </div>
      </div>
    </header>
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
