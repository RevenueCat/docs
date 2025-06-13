---
title: Account security
slug: security
excerpt: Enabling two-factor authentication for your RevenueCat account
hidden: false
---

It's a dangerous world out there! But you can make things much safer by enabling two-factor authentication in your RevenueCat account settings.

Once you do, you'll need a code generated on your mobile device any time you log in to your RevenueCat account.

### Enabling Two-Factor Authentication

#### 1. Set up

Navigate to your [**Account > Security**](https://app.revenuecat.com/settings/security) settings in the RevenueCat dashboard and click **Set up** under Two-factor Authentication to begin the setup process.

![](/docs_images/account/security.png)

#### 2. Scan barcode

You'll be prompted to re-enter your password. Once re-authenticated, you'll be presented with a QR code that you should scan with an authenticator app such as [Authy](https://authy.com/features/setup/) or [Google Authenticator](https://apps.apple.com/app/id388497605).

#### 3. Enter two-factor code

Enter the two-factor code from the authenticator app then click **Enable**.

![](/docs_images/account/setup-2fa.png)

#### 4. Save recovery codes

Save your recovery codes. You'll only be shown these codes once, and are required if you ever lose access to your authenticator app. Some authenticator apps, like Authy, also provide their own backups in case you lose your phone.

:::info Save recovery codes in a safe place
If you ever lose access to your two-factor code from your authenticator app (e.g. you got a new phone) the recovery codes are required to access RevenueCat.

For security reasons, RevenueCat Support may not be able to restore access to accounts with two-factor authentication enabled if you lose your two-factor authentication credentials or lose access to your account recovery codes.
:::

### Enforcing Two-Factor For Your Project

If you have invited collaborators to your app, you can check see if they've enabled two-factor authentication for their account on the [**Project > Collaborators**](/projects/collaborators) page.

Project Owners and Administrators also have the ability to enforce two-factor authentication for any new collaborators. With this setting enabled, invited collaborators will not be able to join your project until they've set up two-factor authentication for their account.

![](/docs_images/projects/invite-collaborators.png)

:::warning Everyone must already have two-factor before enforcing
Before you can enforce two-factor authentication for your project, all existing collaborators must already have two-factor authentication enabled. You can remove current collaborators and re-invite them if you need to enforce two-factor immediately.
:::

### Disabling Two-Factor Authentication

To disable two-factor authentication vavigate to your [**Account > Security**](https://app.revenuecat.com/settings/security) settings in the RevenueCat dashboard and click **Disable** under Two-factor Authentication.

![](/docs_images/account/disable-2fa.png)

:::warning Leave projects that require two-factor before disabling
If you are a collaborator on a Project that requires two-factor authentication, you must leave that project before disabling.
:::

### Activating Single Sign-On

:::info Enterprise Only
At this time, Single Sign-On is only available for customers on an [Enterprise plan](https://www.revenuecat.com/pricing/)
:::

To enable Single Sign-On for your organization navigate to your [**Account > Security > SSO**](https://app.revenuecat.com/settings/security/sso) and click **Activate SSO**.

![Collaborators](/images/0c8723-revenuecat-sso-activate.png)

:::warning Members of the domain will only be able to use SSO
When the SSO of your organizations is active users with the domain of your organization will be required to sign in using SSO.
:::
