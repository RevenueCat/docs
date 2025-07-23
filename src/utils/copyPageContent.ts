import { useDoc } from "@docusaurus/plugin-content-docs/client";

export function usePageCopyContent() {
  const doc = useDoc();

  const extractPageContent = (): string => {
    try {
      // Get the main article content
      const articleElement = document.querySelector('article');
      if (!articleElement) {
        return "Content not found";
      }

      // Extract text content while preserving structure
      const content = extractStructuredContent(articleElement);
      
      // Format for LLM consumption
      const pageTitle = doc?.metadata?.title || document.title;
      const pageUrl = window.location.href;
      const frontMatter = doc?.frontMatter ? formatFrontMatter(doc.frontMatter) : '';
      
      return formatForLLM(pageTitle, pageUrl, frontMatter, content);
    } catch (error) {
      console.error('Error extracting page content:', error);
      return "Error extracting page content";
    }
  };

  const copyToClipboard = async (): Promise<boolean> => {
    try {
      const content = extractPageContent();
      await navigator.clipboard.writeText(content);
      return true;
    } catch (error) {
      console.error('Failed to copy content:', error);
      return false;
    }
  };

  return { extractPageContent, copyToClipboard };
}

function extractStructuredContent(element: Element): string {
  let content = '';
  
  // Walk through the DOM and extract content with structure
  const walker = document.createTreeWalker(
    element,
    NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
    {
      acceptNode: (node) => {
        // Skip navigation, TOC, and other non-content elements
        if (node.nodeType === Node.ELEMENT_NODE) {
          const el = node as Element;
          if (el.matches('nav, .table-of-contents, .navbar, .pagination-nav, .theme-doc-toc, .hash-link')) {
            return NodeFilter.FILTER_REJECT;
          }
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );

  let node;
  while ((node = walker.nextNode())) {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent?.trim();
      if (text && text.length > 0) {
        content += text + ' ';
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const el = node as Element;
      
      // Add markdown-style formatting for headings
      if (el.matches('h1')) {
        const headingText = el.textContent?.trim();
        if (headingText) {
          content += `\n# ${headingText}\n\n`;
        }
      } else if (el.matches('h2')) {
        const headingText = el.textContent?.trim();
        if (headingText) {
          content += `\n## ${headingText}\n\n`;
        }
      } else if (el.matches('h3')) {
        const headingText = el.textContent?.trim();
        if (headingText) {
          content += `\n### ${headingText}\n\n`;
        }
      } else if (el.matches('h4')) {
        const headingText = el.textContent?.trim();
        if (headingText) {
          content += `\n#### ${headingText}\n\n`;
        }
      } else if (el.matches('h5')) {
        const headingText = el.textContent?.trim();
        if (headingText) {
          content += `\n##### ${headingText}\n\n`;
        }
      } else if (el.matches('h6')) {
        const headingText = el.textContent?.trim();
        if (headingText) {
          content += `\n###### ${headingText}\n\n`;
        }
      } else if (el.matches('p')) {
        content += '\n\n';
      } else if (el.matches('pre, code[class*="language-"]')) {
        // Extract code blocks
        const codeText = el.textContent?.trim();
        if (codeText) {
          content += `\n\`\`\`\n${codeText}\n\`\`\`\n\n`;
        }
      } else if (el.matches('ul, ol')) {
        content += '\n';
      } else if (el.matches('li')) {
        content += '\n- ';
      }
    }
  }

  return content.replace(/\n\s*\n\s*\n/g, '\n\n').trim();
}

function formatFrontMatter(frontMatter: Record<string, any>): string {
  // Whitelist of attributes to include in the copied content
  const allowedAttributes = [
    'title',
    'description',
    'keywords',
    'tags',
    'author',
    'date',
    'updated',
    'category',
    'platform'
  ];
  
  const filtered = Object.entries(frontMatter)
    .filter(([key]) => allowedAttributes.includes(key))
    .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
    
  if (Object.keys(filtered).length === 0) {
    return '';
  }
  
  return `---\n${Object.entries(filtered)
    .map(([key, value]) => `${key}: ${typeof value === 'string' ? value : JSON.stringify(value)}`)
    .join('\n')}\n---\n\n`;
}

function formatForLLM(title: string, url: string, frontMatter: string, content: string): string {
  return `# ${title}

**Source URL:** ${url}

${frontMatter}${content}`;
}