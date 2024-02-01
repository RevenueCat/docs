---
title: Invite your team
slug: collaborators
excerpt: Invite others to collaborate on your project
hidden: false
---

Collaborators allow other people to access your RevenueCat Project without having to share any login credentials. You can limit the access of specific collaborators to "Admin", "Read Only", or "Customer Support".

### Invite a Collaborator

To invite a collaborator, send them an invite from the **Collaborators page under project settings**.

All collaborators can view customers and analytics. Only admins are able to make changes to your project's configuration.

![Collaborators](https://files.readme.io/07e6112-app.revenuecat.com_projects_85ff18c7_collaborators.png)

Add the collaborator's email, select their permission level, and send the invite.

![Screenshot](https://files.readme.io/1b67b03-Screenshot_2023-03-27_at_4.26.50_PM.png)

Invited collaborators will receive an email where they can accept your invitation and optionally create a RevenueCat account if needed.

:::info Collaborators are per-Project
If you have multiple projects that you wish to share, you will need to repeat the invite process for each project that you want to collaborate with them on.
:::

#### Permissions

When inviting a collaborators there are three permission levels that grant them different levels of access:

- **Admin** - Can view and edit all project information, including inviting other collaborators. This is usually app owners or engineers that are integrating RevenueCat.
- **Customer Support** - Can see [Customer Timelines](/docs/dashboard-and-metrics/customers-group/basic-information), [grant Promotional Entitlements](/docs/dashboard-and-metrics/customers-group/promotionals), [issue refunds](/docs/dashboard-and-metrics/customers-group/customer-history#section-refunding-subscriptions), and [delete customers](/docs/dashboard-and-metrics/customers-group/manage-users). Cannot see any charts, metrics, aggregate customer lists, or most project settings (other than **Entitlements**, **Offerings**, and **Products**).
- **Read Only** - Can view but not change project settings. Perfect for people that need access to revenue metrics, customer transactions, etc. but don't need access to things like API keys.

:::info Collaborators cannot delete projects or apps within projects, or manage billing
No collaborator, regardless of permission level, is allowed to delete a project or apps within a project, change billing, or connect a Stripe account.
:::
