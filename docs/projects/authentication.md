---
title: API Keys & Authentication
sidebar_label: API Keys
slug: authentication
excerpt: Manage your API keys to authenticate with RevenueCat
---

RevenueCat authenticates requests from the RevenueCat SDK and the [REST API](/api-v2) using API keys.

There are two types of API keys:

- **Public** API keys (also known as **App specific keys** in the dashboard) are meant to make non-potent changes to subscribers, and must be used to [configure the SDK](/getting-started/configuring-sdk). Each app under a project is automatically provided with a public API key.
- **Secret** API keys, prefixed `sk_`, should be kept confidential and only stored on your own servers. Your secret API keys can perform restricted API requests such as deleting subscribers and granting entitlements. Secret API keys are project-wide and can be created and revoked by project [Admins](/projects/collaborators).

## Finding API Keys

You can find the API keys for your project under the **API Keys** section of your Project Settings in the dashboard.

![API Keys](/images/4bd2a9d-app.revenuecat.com_projects_85ff18c7_api-keys_3d87623aacc4187dc0f71130302c338a.png)

Public app-specific API keys are automatically created when adding an App to your Project and cannot be changed. Secret API keys can be created by selecting the **+ New** button in the top right, and will be listed under the section **Private API keys**.

You can also find the public API key in your app settings by selecting your app from **Project Settings > Apps**.

If you cannot see your API keys anywhere in the dashboard, it may mean you do not have access to them. Contact the project's owner and make sure you are added as an **Admin**.

:::warning Only configure the Purchases SDK with your public API key
Reminder, never embed secret API keys in your app or website.
:::

## Keeping Secret API Keys Safe

Secret API keys can be used to make any API request on behalf of your RevenueCat account, such as granting entitlement access and deleting subscribers for your app. You should only create secret API keys if you need to use them and should ensure they are kept out of any publicly accessible areas such as GitHub, client-side code, and so forth.

### Adding and Revoking Secret API Keys

You can create as many secret API keys as you need, and they can be revoked at any time. When a secret API key is revoked, it's invalidated immediately and can no longer make any requests.
