/**
 * CloudFront Function: Content Negotiation (Viewer Request)
 *
 * Rewrites requests to serve Markdown versions based on:
 * 1. Accept header (text/markdown, text/plain)
 * 2. User-Agent detection for LLM crawlers/agents
 *
 * Attach to: viewer-request event
 */

function handler(event) {
  var request = event.request;
  var uri = request.uri;
  var headers = request.headers;

  // Only process doc requests (not API, images, etc.)
  if (!uri.startsWith("/docs/")) {
    return request;
  }

  // Skip if already requesting markdown
  if (uri.endsWith(".md")) {
    return request;
  }

  // Check Accept header for markdown/plain text preference
  var acceptHeader = headers.accept ? headers.accept.value : "";
  var acceptHeaderLower = acceptHeader.toLowerCase();
  var wantsMarkdown =
    acceptHeaderLower.includes("text/markdown") ||
    acceptHeaderLower.includes("text/plain");

  // Check User-Agent for known LLM crawlers/agents
  var userAgent = headers["user-agent"] ? headers["user-agent"].value : "";
  var isLLMAgent = detectLLMAgent(userAgent);

  // Serve markdown if explicitly requested or LLM agent detected
  if (wantsMarkdown || isLLMAgent) {
    // Rewrite: /docs/path → /docs/path.md
    // Rewrite: /docs/path/ → /docs/path/index.md
    if (uri.endsWith("/")) {
      request.uri = uri + "index.md";
    } else if (uri.endsWith(".html")) {
      // /docs/path.html → /docs/path.md
      request.uri = uri.replace(/\.html$/, ".md");
    } else {
      // Check if URI has a file extension
      // Look for dot after last slash to avoid false positives like /docs/v1.0/guide
      var lastSlash = uri.lastIndexOf("/");
      var lastDot = uri.lastIndexOf(".");
      var hasExtension = lastDot !== -1 && lastDot > lastSlash;

      if (!hasExtension) {
        // /docs/path → /docs/path.md
        request.uri = uri + ".md";
      }
    }
  }

  return request;
}

/**
 * Detects known LLM agents and crawlers by User-Agent string
 *
 * Known agents include:
 * - Anthropic Claude (ClaudeBot)
 * - OpenAI GPT (GPTBot, ChatGPT-User)
 * - Google AI (Google-Extended, Gemini)
 * - Perplexity (PerplexityBot)
 * - Common AI crawlers
 */
function detectLLMAgent(userAgent) {
  if (!userAgent) {
    return false;
  }

  var ua = userAgent.toLowerCase();

  // Known LLM crawler/agent patterns
  var patterns = [
    "claudebot", // Anthropic Claude
    "claude-web", // Claude web browsing
    "chatgpt-user", // OpenAI ChatGPT
    "gptbot", // OpenAI GPT
    "openai", // OpenAI generic
    "google-extended", // Google AI training
    "gemini", // Google Gemini
    "bard", // Google Bard (legacy)
    "perplexitybot", // Perplexity AI
    "perplexity", // Perplexity generic
    "anthropic", // Anthropic generic
    "cohere-ai", // Cohere
    "ai2bot", // Allen Institute
    "meta-externalagent", // Meta AI
    "omgilibot", // Omgili
    "diffbot", // Diffbot
    "youbot", // You.com
    "applebot-extended", // Apple AI
  ];

  for (var i = 0; i < patterns.length; i++) {
    if (ua.indexOf(patterns[i]) !== -1) {
      return true;
    }
  }

  return false;
}
