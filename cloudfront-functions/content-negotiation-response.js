/**
 * CloudFront Function: Content Negotiation (Viewer Response)
 *
 * Adds Link headers to HTML responses for content discovery:
 * - Points to markdown alternate representation
 * - Enables clients to discover available formats
 *
 * Attach to: viewer-response event
 */

function handler(event) {
  var request = event.request;
  var response = event.response;
  var uri = request.uri;

  // Only process successful doc responses
  if (!uri.startsWith("/docs/")) {
    return response;
  }

  // Only add Link header to HTML responses (200 OK)
  if (response.statusCode !== 200) {
    return response;
  }

  // Skip if this IS a markdown response
  if (uri.endsWith(".md")) {
    return response;
  }

  // Derive markdown URL from current HTML URL
  var markdownUrl = deriveMarkdownUrl(uri);

  // Add Link header pointing to markdown alternate
  if (!response.headers) {
    response.headers = {};
  }

  // RFC 8288 Link header format
  // Example: Link: </docs/path.md>; rel="alternate"; type="text/markdown"
  response.headers["link"] = {
    value: "<" + markdownUrl + '>; rel="alternate"; type="text/markdown"',
  };

  return response;
}

/**
 * Converts HTML URL to corresponding markdown URL
 *
 * Examples:
 *   /docs/getting-started/installation → /docs/getting-started/installation.md
 *   /docs/getting-started/             → /docs/getting-started/index.md
 *   /docs/getting-started.html         → /docs/getting-started.md
 */
function deriveMarkdownUrl(uri) {
  if (uri.endsWith(".html")) {
    // /docs/path.html → /docs/path.md
    return uri.replace(/\.html$/, ".md");
  } else if (uri.endsWith("/")) {
    // /docs/path/ → /docs/path/index.md
    return uri + "index.md";
  } else {
    // /docs/path → /docs/path.md
    return uri + ".md";
  }
}
