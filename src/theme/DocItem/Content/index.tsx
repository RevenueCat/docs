import React from 'react';
import Content from '@theme-original/DocItem/Content';
import type ContentType from '@theme/DocItem/Content';
import type { WrapperProps } from '@docusaurus/types';
import CopyForLLMButton from '@site/src/components/CopyForLLMButton';

type Props = WrapperProps<typeof ContentType>;

export default function ContentWrapper(props: Props): JSX.Element {
  return (
    <div style={{ position: 'relative' }}>
      <div className="theme-doc-markdown" style={{ marginTop: '2rem' }}>
        <CopyForLLMButton />
      </div>
      <Content {...props} />
    </div>
  );
}