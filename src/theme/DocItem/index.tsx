import React, { type ReactNode } from "react";
import DocItem from "@theme-original/DocItem";
import type DocItemType from "@theme/DocItem";
import type { WrapperProps } from "@docusaurus/types";
import Head from "@docusaurus/Head";

type Props = WrapperProps<typeof DocItemType>;

export default function DocItemWrapper(props: Props): ReactNode {
  const hidden = (props.content.frontMatter as any).hidden;
  const prioritize = (props.content.frontMatter as any).prioritize;

  return (
    <>
      {hidden && (
        <Head>
          <meta name="robots" content="noindex" />
          <meta name="search-hidden" content="true" />
        </Head>
      )}
      {prioritize && (
        <Head>
          <meta name="x-prioritize" content="true" />
        </Head>
      )}
      <DocItem {...props} />
    </>
  );
}
