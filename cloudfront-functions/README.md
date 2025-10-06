# CloudFront Functions for Content Negotiation

Automatically serves Markdown to LLM agents and clients that request it.

## Files

- `content-negotiation-request.js` - Rewrites URLs to `.md` based on Accept header or LLM User-Agent
- `content-negotiation-response.js` - Adds `Link:` headers pointing to markdown alternates

## Deploy

Functions auto-deploy via Azure pipeline on merge to `main`.

Manual association required (one-time):

1. CloudFront Console → Distribution → Behaviors → Edit `/docs/*`
2. Function associations:
   - `viewer-request` → `docs-content-negotiation-request`
   - `viewer-response` → `docs-content-negotiation-response`

## Test

```bash
curl -H "Accept: text/markdown" https://www.revenuecat.com/docs/getting-started/
curl -A "ClaudeBot/1.0" https://www.revenuecat.com/docs/getting-started/
curl -I https://www.revenuecat.com/docs/getting-started/ | grep -i link
```

## Detected LLM Agents

ClaudeBot, GPTBot, ChatGPT-User, Google-Extended, Gemini, PerplexityBot, and others. Add more in the `patterns` array.
