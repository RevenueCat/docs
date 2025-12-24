---
title: Single Sign-On (SSO)
sidebar_label: Single Sign-On (SSO)
excerpt: Log into RevenueCat using Single Sign-On (SSO)
hidden: false
---

# Set up Single Sign-On (SSO) for RevenueCat

This guide walks you through enabling and configuring Single Sign-On (SSO) for your RevenueCat account.

---

:::info SSO is currently available for customers on an **Enterprise plan**.
:::

---

## How SSO works in RevenueCat

- Once SSO is enabled, **users with your organization’s email domain will be required to sign in to RevenueCat through SSO**.
- SSO is enforced at the **account/organization** level for the configured email domain.

---

## What you’ll need before you start

### Roles

- Someone on your team who can **manage your identity provider** (for example, configuring SAML/OIDC and SCIM).

### Identity provider requirements

Your identity provider must support:

- **SAML or OpenID Connect (OIDC)** for authentication, such as Okta, Azure AD, Google Workspace, AWS Cognito, etc.
- **SCIM provisioning** for directory sync

---

## Step-by-step: Enable SSO

### 1) Request your SSO setup link

Contact your **RevenueCat account manager** to request SSO enablement. You’ll receive a secure setup link that allows you to connect SSO and directory sync for your organization to RevenueCat.

---

### 2) Configure SSO and Directory Sync

Using the setup link, configure your identity provider to connect to RevenueCat:

- Set up SSO using **SAML or OIDC**
- Enable **SCIM directory sync**

---

### 3) Create groups in your identity provider

In your identity provider, create (or select) groups that correspond to the RevenueCat roles you want to grant (for example, Admin, Developer, Support, or View Only).

If a user belongs to multiple groups, RevenueCat will grant the **highest** role.

---

### 4) Map SSO groups to RevenueCat roles

In the RevenueCat dashboard:

1. Go to **Project Settings → Collaborators**

![Collaborators](/docs_images/projects/sso-collaborators.png)

2. Add an **SSO Group**
3. Select the **RevenueCat role** that group should receive

![Collaborators](/docs_images/projects/sso-configure.png)

Changes may take a few minutes to sync.

**Role precedence (highest wins):**

1. Admin  
2. Developer  
3. Growth  
4. Support  
5. View Only  

> Mapping SSO groups updates project collaborators and may affect currently signed-in users.

---

### 5) Activate SSO

When configuration is complete, go to [**Account > Security > SSO**](https://app.revenuecat.com/settings/security/sso) and click **Activate SSO**.

![Collaborators](/docs_images/projects/sso-activate.png)

After activation, users with your configured email domain will be required to sign in using SSO.

---

## Validation checklist

After activating SSO, we recommend verifying the following:

- At least one admin can sign in via SSO
- Users receive the correct project access based on group mappings
- Group and role changes sync successfully (allow a few minutes)

---

## FAQ

### What happens if a user is in multiple SSO groups?

The user is granted the **highest** applicable role based on role precedence.

### Do I need to configure SSO group mappings for each project?

Yes. Collaborator access is managed per project, so role mappings must be set up individually for each project.