import React, { type ReactNode } from "react";
import DocItem from "@theme-original/DocItem";
import type DocItemType from "@theme/DocItem";
import type { WrapperProps } from "@docusaurus/types";
import Head from "@docusaurus/Head";

type Props = WrapperProps<typeof DocItemType>;

export default function DocItemWrapper(props: Props): ReactNode {
  const hidden = (props.content.frontMatter as any).hidden;
  return (
    <>
      {hidden && (
        <Head>
          <meta name="algolia-ignore" content="true" />
        </Head>
      )}
      <DocItem {...props} />
    </>
  );
}
