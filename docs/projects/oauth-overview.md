---
title: OAuth 2.0 Authorization
sidebar_label: OAuth Overview
slug: oauth-overview
excerpt: Secure, token-based access to RevenueCat's API using OAuth 2.0
---

RevenueCat's OAuth 2.0 authorization server enables secure, token-based access to our API on behalf of developers. This allows third-party applications and tools to access RevenueCat data with explicit developer consent.

## Why Use OAuth?

OAuth tokens provide several advantages over traditional API keys:

- **Developer-level access** across all projects a user has access to
- **Granular permission scopes** to limit access to only what's needed
- **Enhanced security** with automatic token expiration
- **Third-party integration support** for building ecosystem tools
- **User consent** - developers explicitly authorize what data can be accessed

## Supported Flow

RevenueCat currently supports the **Authorization Code flow** with PKCE (Proof Key for Code Exchange) enforcement for public clients. This flow is secure for both server-side applications and native/mobile apps.

## Getting Started

To use OAuth with RevenueCat:

1. **Register your OAuth client** with our support team
2. **Implement the authorization flow** in your application
3. **Use access tokens** to make API requests on behalf of users

## Next Steps

- [Set up OAuth integration](/projects/oauth-setup) - Complete implementation guide
- [View available scopes](/projects/oauth-setup#available-scopes) - See what permissions you can request
- [Learn about token management](/projects/oauth-setup#token-management) - Handle access and refresh tokens
