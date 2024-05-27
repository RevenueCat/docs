import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Button from "../components/Button/Button.tsx";
import heroImage from "@site/static/images/fb71f38d-hero.png";
import heroImageDark from "@site/static/images/ed3a1112-hero-dark.png";
import videoPlaceholder from "@site/static/images/b52b1205-video-placeholder.png";
import videoPlaceholderDark from "@site/static/images/a9eeda94-video-placeholder-dark.png";
import ChartIcon from "@site/static/img/charts.svg";
import CustomerIcon from "@site/static/img/customer.svg";
import ExportsIcon from "@site/static/img/time.svg";
import ExperimentsIcon from "@site/static/img/beaker.svg";
import PaywallsIcon from "@site/static/img/dollar.svg";
import IntegrationsIcon from "@site/static/img/stack.svg";
import TargetingIcon from "@site/static/img/flow-chart.svg";
import BillingIcon from "@site/static/img/card.svg";
import DashboardIcon from "@site/static/img/dashboard.svg";

const Link = ({ href, children, ...rest }) => (
  <a
    href={href}
    {...rest}
    className="font-semibold !text-grayLight dark:!text-grayDark hover:no-underline hover:text-black dark:hover:text-white font-body"
  >
    {children}
  </a>
);

function LandingPage() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <>
      {/* Hero */}
      <section className="py-20 max-w-7xl mx-auto size-full">
        <div className="tw-container w-full flex flex-col gap-16 max-w-none lg:flex-row-reverse lg:justify-between items-center">
          <div>
            <img
              src={heroImage}
              alt="revenuecat welcome"
              className="size-full max-w-[600px] mx-auto dark:hidden"
            />
            <img
              src={heroImageDark}
              alt="revenuecat welcome"
              className="size-full max-w-[600px] mx-auto hidden dark:flex"
            />
          </div>

          <div className="size-full text-center lg:text-left flex flex-col">
            <h1 className="text-3xl lg:text-4xl">RevenueCat Developer Hub</h1>
            <p className="text-lg md:text-xl max-w-[520px] mx-auto lg:mx-0 font-body">
              Everything you need to implement and manage in-app purchases and
              subscriptions.
            </p>
            <div
              className="flex flex-wrap gap-4 lg:gap-6 items-center justify-center lg:justify-start
          mt-8"
            >
              <Button href="/docs/welcome/overview">Get Started</Button>
              <Button
                href="/docs/getting-started/quickstart"
                variant="secondary"
              >
                Install the SDK
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="py-20 max-w-none bg-gray size-full dark:bg-base-900">
        <div className="tw-container max-w-7xl flex flex-col mx-auto gap-y-12 lg:flex-row w-fit lg:w-full md:justify-between gap-x-12">
          {/* Quick Links */}
          <div className="flex flex-col gap-4 w-fit">
            <h2 className="font-normal mb-0 lg:mb-8 text-2xl lg:text-3xl">
              Quick Links
            </h2>
            <Link href="/docs/welcome/building-new">
              Adding subscriptions to your app
            </Link>
            <Link href="/docs/welcome/existing-apps">
              Using RevenueCat in existing apps
            </Link>
            <Link
              href="https://community.revenuecat.com/"
              target="_blank"
              rel="noopenner noreferrer"
            >
              RevenueCat Community
            </Link>
          </div>

          {/* For Developers */}
          <div className="flex flex-col gap-4 w-fit">
            <h2 className="font-normal mb-0 lg:mb-8 text-2xl lg:text-3xl">
              For Developers
            </h2>
            <Link href="/docs/getting-started/quickstart/">SDK Quickstart</Link>
            <Link href="/docs/api-v1">REST API</Link>
            <Link href="/docs/getting-started/installation">
              Installing the SDK
            </Link>
          </div>

          {/* Popular Articles */}
          <div className="flex flex-col gap-4 w-fit">
            <h2 className="font-normal mb-0 lg:mb-8 text-2xl lg:text-3xl">
              Popular Articles
            </h2>
            <Link href="/docs/welcome/projects">Setting up RevenueCat</Link>
            <Link href="/docs/getting-started/entitlements">
              Configuring Products
            </Link>
            <Link href="/docs/getting-started/configuring-sdk">
              Configuring the SDK
            </Link>
          </div>
        </div>

        {/* Video */}
        <hr className="tw-container w-4/5 max-w-7xl my-20 bg-[#DFDFDF]" />
        <div className="tw-container max-w-7xl w-full flex flex-col gap-16 lg:flex-row-reverse lg:justify-between items-center">
          <div>
            <img
              src={videoPlaceholder}
              alt="revenuecat welcome"
              className="size-full mx-auto max-w-[600px] lg:max-w-none dark:hidden"
            />
            <img
              src={videoPlaceholderDark}
              alt="revenuecat welcome"
              className="size-full mx-auto max-w-[600px] lg:max-w-none hidden dark:block"
            />
          </div>

          <div className="size-full text-center lg:text-left flex flex-col">
            <h2 className="text-3xl lg:text-4xl lg:mb-6 max-w-[420px] mx-auto lg:ml-0">
              Enable Subscriptions In Your App Today
            </h2>
            <p className="max-w-[520px] mx-auto lg:mx-0 text-grayLight dark:text-[#e3e3e3] font-body">
              Here, you'll find detailed guides and documentation to help you
              start working with RevenueCat as quickly as possibly, as well as
              support if you get stuck. Let's jump right in!
            </p>
            <div
              className="flex flex-wrap gap-4 lg:gap-6 items-center justify-center lg:justify-start
          mt-8"
            >
              <Button href="/docs/welcome/overview">Get Started</Button>
              <Button
                href="/docs/getting-started/quickstart"
                variant="secondary"
                className="hover:!bg-white"
              >
                Install the SDK
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Feature */}
      <section className="py-20 max-w-7xl mx-auto size-full tw-container">
        <h2 className="text-3xl lg:text-4xl mb-8 w-fit mx-auto lg:ml-0 lg:w-full font-normal">
          Browse By Feature
        </h2>
        <div className="max-w-7xl px-4 flex flex-col mx-auto gap-y-12 lg:flex-row w-fit lg:w-full lg:justify-between gap-x-12">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <Link href="/docs/dashboard-and-metrics/charts">
              <span className="flex items-center gap-3">
                <ChartIcon width="16" />
                Charts
              </span>
            </Link>
            <Link href="/docs/dashboard-and-metrics/customer-lists">
              <span className="flex items-center gap-3">
                <CustomerIcon width="16" />
                Customer Lists
              </span>
            </Link>
            <Link href="/docs/integrations/scheduled-data-exports">
              <span className="flex items-center gap-3">
                <ExportsIcon width="16" />
                Scheduled Data Exports
              </span>
            </Link>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <Link href="/docs/tools/experiments-v1">
              <span className="flex items-center gap-3">
                <ExperimentsIcon width="16" />
                Experiments
              </span>
            </Link>
            <Link href="/docs/tools/paywalls">
              <span className="flex items-center gap-3">
                <PaywallsIcon width="16" />
                Paywalls
              </span>
            </Link>
            <Link href="/docs/integrations/integrations">
              <span className="flex items-center gap-3">
                <IntegrationsIcon width="16" />
                Integrations
              </span>
            </Link>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <Link href="/docs/tools/targeting">
              <span className="flex items-center gap-3">
                <TargetingIcon width="16" />
                Targeting
              </span>
            </Link>
            <Link href="/docs/welcome/projects/account-management">
              <span className="flex items-center gap-3">
                <BillingIcon width="16" />
                RevenueCat Billing
              </span>
            </Link>
            <Link href="/docs/dashboard-and-metrics/overview">
              <span className="flex items-center gap-3">
                <DashboardIcon width="16" />
                Dashboard
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Documentation | RevenueCat`}
      description="Build a customized mobile subscription business with RevenueCat. We do the heavy lifting of normalizing subscribers from any source and maintain a single source of truth for subscription status, so you can get back to building your app."
    >
      <LandingPage />
    </Layout>
  );
}
