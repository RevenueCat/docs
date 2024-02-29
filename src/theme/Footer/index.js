import React from "react";
import { useThemeConfig } from "@docusaurus/theme-common";
import Logo from "@site/static/img/white-logo.png";
import GithubIcon from "@site/static/img/github.svg";
import XIcon from "@site/static/img/x.svg";
import YoutubeIcon from "@site/static/img/youtube.svg";

const date = new Date();
const year = date.getFullYear();

const Link = ({ href, children, ...rest }) => (
  <a
    href={href}
    {...rest}
    className="text-base-300 hover:text-white text-sm no-underline"
  >
    {children}
  </a>
);

function Footer() {
  return (
    <footer class="bg-base-900 pt-20 pb-4 px-4 doc-lg:px-16">
      <div className="flex flex-col items-center gap-16 max-w-xl mx-auto doc-lg:flex-row doc-lg:justify-between w-full doc-lg:max-w-7xl">
        <div className="w-fit mx-auto doc-lg:w-full">
          <a
            href="https://www.revenuecat.com/"
            target="_blank"
            rel="noopenner noreferrer"
          >
            <img
              src={Logo}
              alt="revenuecat logo"
              aria-hidden
              width="200"
              className="object-contain"
            />
          </a>
        </div>

        <div className="flex flex-wrap gap-24 doc-lg:flex-nowrap">
          {/* Docs */}
          <div class="flex flex-col gap-2">
            <p class="text-white font-semibold text-lg mb-0">Docs</p>
            <Link href="/docs/welcome/overview">Documentation</Link>
            <Link href="/docs/api-v1">API Reference</Link>
            <Link href="/docs/platform-resources/sdk-reference">
              SDK Reference
            </Link>
            <Link href="/docs/platform-resources/sample-apps">Sample Apps</Link>
          </div>

          {/* Resources */}
          <div class="flex flex-col gap-2">
            <p class="text-white font-semibold text-lg mb-0">Resources</p>
            <Link
              href="https://app.revenuecat.com/"
              target="_blank"
              rel="noopenner noreferrer"
            >
              Dashboard
            </Link>
            <Link
              href="https://www.revenuecat.com/blog/"
              target="_blank"
              rel="noopenner noreferrer"
            >
              Blog
            </Link>
            <Link
              href="https://community.revenuecat.com/"
              target="_blank"
              rel="noopenner noreferrer"
            >
              Community
            </Link>
            <Link
              href="https://subclub.com/"
              target="_blank"
              rel="noopenner noreferrer"
            >
              SubClub
            </Link>
          </div>
        </div>
      </div>

      <div class="flex flex-col-reverse items-center gap-4 mt-12 before:content-[''] before:absolute relative before:left-0 before:right-0 before:mx-auto before:-top-4 before:w-full before:h-px before:bg-base-600 max-w-xl mx-auto doc-lg:flex-row doc-lg:justify-between doc-lg:max-w-7xl">
        <p class="text-base-300 text-xs mb-0">&copy; {year} RevenueCat</p>
        <div className="flex gap-4">
          <a
            href="https://github.com/RevenueCat"
            target="_blank"
            rel="noopenner noreferrer"
            className="text-base-300 hover:text-white"
          >
            <GithubIcon width="28" height="28" />
          </a>
          <a
            href="https://twitter.com/revenuecat"
            target="_blank"
            rel="noopenner noreferrer"
            className="text-base-300 hover:text-white"
          >
            <XIcon width="28" height="28" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCeq8LcFQ3ee_p8b-eYTARsg"
            target="_blank"
            rel="noopenner noreferrer"
            className="text-base-300 hover:text-white"
          >
            <YoutubeIcon width="28" height="28" />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default React.memo(Footer);
