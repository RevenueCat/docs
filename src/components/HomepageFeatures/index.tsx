import React from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

// SVG import type for TypeScript
type SvgComponent = React.ComponentType<
  React.SVGProps<SVGSVGElement> & {
    title?: string;
  }
>;

interface FeatureItem {
  title: string;
  Svg: SvgComponent;
  description: React.ReactNode;
}

const FeatureList: FeatureItem[] = [
  {
    title: "Subscriptions made easy",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        The world's best subscription apps use RevenueCat to power in-app
        purchases, manage customer data, and grow revenue on iOS, Android, and
        the web.
      </>
    ),
  },
];

interface FeatureProps {
  Svg: SvgComponent;
  title: string;
  description: React.ReactNode;
}

function Feature({
  Svg,
  title,
  description,
}: FeatureProps): React.ReactElement {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): React.ReactElement {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
