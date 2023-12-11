---
title: Setting up RevenueCat
slug: projects
excerpt: Create a free account, add a Project, and invite your team
hidden: false
---
# Register for a free account

RevenueCat accounts are free to set up, all you need is an email address.

[block:html]
{
  "html": "<a class=\"cta\" href=\"https://app.revenuecat.com/signup\" target=\"_blank\">Create an Account →</a>\n<hr class=\"landing-divider-small\"/>"
}
[/block]



> 📘 
> 
> RevenueCat cannot transfer individual Projects between RevenueCat accounts at this time. If you anticipate needing to transfer ownership of a Project in the future, make a separate RevenueCat account to own that Project.

# Configure a new Project

A Project is a set of Apps, and Apps are paired with a single platform. For example, a typical Project might contain one iOS App and one Google Play Store App. All Apps within one Project share the same basic setup, including subscription status, integrations, and webhooks. 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/215395e-Screenshot_2023-04-07_at_2.30.53_PM.png",
        null,
        "Projects"
      ],
      "align": "center",
      "caption": "A project can include any number of iOS, Android, and web apps."
    }
  ]
}
[/block]

# Creating a Project

To create a Project, click the '+ Create new project' button in the Projects dropdown panel at the top of the RevenueCat dashboard:

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e8b40b7-Screenshot_2023-03-27_at_9.36.54_AM.png",
        "Screenshot 2023-03-27 at 9.36.54 AM.png",
        302
      ],
      "align": "center",
      "sizing": "30% ",
      "border": true
    }
  ]
}
[/block]



You can customize your project by setting a name as well as your global [restore behavior](doc:restoring-purchases) for the apps in your Project.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/0556eed-app.revenuecat.com_projects_85ff18c7_api-keys_4.png",
        "app.revenuecat.com_projects_85ff18c7_api-keys (4).png",
        936
      ],
      "align": "center",
      "sizing": "80",
      "border": true
    }
  ]
}
[/block]



# Adding an App to a Project

Once you create a project you'll be prompted to add an App. Select the platform you wish to add and follow the configuration steps for that platform.

> 📘 Projects can include many Apps on the same platform
> 
> It's okay to add many Apps on the same platform under one Project. For example if you have a suite of productivity apps on iOS that share a common subscription you can add them under the same Project in RevenueCat. However, if you have multiple iOS apps that all function independently and don't plan to have a shared subscription you should add them each under different Projects.

## Shared App User ID Namespace

Apps within the same Project share the same App User ID namespace, meaning all the apps can "share" purchases and subscription status. In other words, the subscription status is tied to the same App User ID regardless of which app it's set in.