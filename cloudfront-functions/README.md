# CloudFront Function for Content Negotiation

Automatically serves Markdown to LLM agents and clients that request it.

## How it works

`content-negotiation-request.js` - Rewrites URLs to `.md` based on Accept header or LLM User-Agent detection.

## Deploy

Auto-deploys via Azure pipeline on merge to `main`.

Manual association required (one-time):

- CloudFront Console → Distribution → Behaviors → Edit `/docs/*`
- Function association: `viewer-request` → `docs-content-negotiation-request`

## Test

```bash
curl -H "Accept: text/markdown" https://www.revenuecat.com/docs/getting-started/
curl -A "ClaudeBot/1.0" https://www.revenuecat.com/docs/getting-started/
```

## Detected LLM Agents

ClaudeBot, GPTBot, ChatGPT-User, Google-Extended, Gemini, PerplexityBot, and others. Add more in the `patterns` array.
