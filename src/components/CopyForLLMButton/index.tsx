import React, { useState } from 'react';
import { usePageCopyContent } from '@site/src/utils/copyPageContent';
import { CatIcon } from '@site/src/theme/CatIcon/CatIcon';
import styles from './styles.module.css';

export default function CopyForLLMButton() {
  const { copyToClipboard } = usePageCopyContent();
  const [copyFeedback, setCopyFeedback] = useState<string>('');

  const handleCopyPage = async () => {
    const success = await copyToClipboard();
    if (success) {
      setCopyFeedback('Copied!');
      setTimeout(() => setCopyFeedback(''), 2000);
    } else {
      setCopyFeedback('Failed to copy');
      setTimeout(() => setCopyFeedback(''), 2000);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonWrapper}>
        <button
          className={styles.copyButton}
          onClick={handleCopyPage}
          aria-label="Copy page content for LLM"
          title="Copy for LLM"
        >
          <CatIcon name="copy" size={16} customColor="white" />
          <span>Copy for LLM</span>
        </button>
        {copyFeedback && (
          <span className={styles.copyFeedback}>
            {copyFeedback}
          </span>
        )}
      </div>
    </div>
  );
}