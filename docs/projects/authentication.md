---
title: API Keys & Authentication
sidebar_label: API Keys
slug: authentication
excerpt: Manage your API keys to authenticate with RevenueCat
---

RevenueCat authenticates requests from the RevenueCat SDK and the [REST API](/api-v2) using API keys or OAuth tokens.

## Authentication Methods

### API Keys

There are two types of API keys:

- **Public** API keys (also known as **SDK API keys** in the dashboard) are meant to make non-potent changes to subscribers, and must be used to [configure the SDK](/getting-started/configuring-sdk). Each app under a project is automatically provided with a public API key.
- **Secret** API keys, prefixed `sk_`, should be kept confidential and only stored on your own servers. Your secret API keys can perform restricted API requests such as deleting subscribers and granting entitlements. Secret API keys are project-wide and can be created and revoked by project [Admins](/projects/collaborators).

### OAuth Tokens

For third-party integrations and tools, RevenueCat also supports OAuth 2.0 authentication using access tokens. OAuth tokens provide developer-level access (not tied to a specific project) and enable secure authorization for external applications.

- **Access tokens**, prefixed `atk_`, are obtained through the OAuth 2.0 flow and can be used to authenticate REST API v2 requests
- OAuth tokens have scopes that determine what actions they can perform, and developers must grant explicit consent for each scope
- See our [OAuth documentation](/projects/oauth-overview) for complete setup instructions

:::info OAuth vs API Keys
OAuth tokens are developer-level credentials that can access all projects a developer owns or collaborates with, while API keys are project-specific. Use OAuth for third-party integrations and API keys for direct server-to-server communication.
:::

## REST API v2 Authentication

Both API keys and OAuth tokens can be used to authenticate with the [REST API v2](/api-v2):

### Using API Keys

```text
Authorization: Bearer sk_1234567890abcdef
```

### Using OAuth Tokens

```text
Authorization: Bearer atk_1234567890abcdef
```

Both authentication methods use the same `Bearer` token format in the `Authorization` header, following [RFC 7235](https://datatracker.ietf.org/doc/html/rfc7235) standards.

## Finding API Keys

You can find the API keys for your project under **API keys** in the dashboard.

![API Keys](/docs_images/projects/finding-api-keys.png)

Public platform-specific API keys are automatically created when adding an App to your Project and cannot be changed. Secret API keys can be created by selecting the **+ New secret API key** button and will be listed under the section **Secret API keys**.

You can also find the public API key in your app settings by selecting your app from **Apps & providers**.

If you cannot see your API keys anywhere in the dashboard, it may mean you do not have access to them. Contact the project's owner and make sure you are added as an **Admin**.

:::warning Only configure the Purchases SDK with your public API key
Reminder, never embed secret API keys in your app or website.
:::

## Keeping Secret API Keys Safe

Secret API keys can be used to make any API request on behalf of your RevenueCat account, such as granting entitlement access and deleting subscribers for your app. You should only create secret API keys if you need to use them and should ensure they are kept out of any publicly accessible areas such as GitHub, client-side code, and so forth.

:::warning Only configure the Purchases SDK with your public API key
Consider rotating your secret API keys regularly to ensure they are not compromised. Do the same when there is risk of leak (e.g. departures of employees with access to secret keys).
:::

### Adding and Revoking Secret API Keys

You can create as many secret API keys as you need, and they can be revoked at any time. When a secret API key is revoked, it's invalidated immediately and can no longer make any requests.
