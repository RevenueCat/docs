---
title: Google Play Store [old]
slug: old-play-service-credentials
excerpt: Step-by-step guide for creating your Play service credentials
hidden: true
categorySlug: service-credentials
order: 3
---
In order for RevenueCat's servers to communicate with Google on your behalf, you need to provide a set of service credentials. The process for configuring these credentials is a bit complex, but the added level of control improves security by providing RevenueCat with only the access we need. 
[block:callout]
{
  "type": "info",
  "title": "Credentials can take up to 36 hours after being created to be valid",
  "body": "It can take up to 36 hours for your Play Service Credentials to work properly with the Google Play Developer API. You may see \"Invalid Play Store credentials\" errors (503 or 521) and be unable to make purchases with RevenueCat until this happens.\n\nThere is a [workaround](https://stackoverflow.com/questions/43536904/google-play-developer-api-the-current-user-has-insufficient-permissions-to-pe/60691844#60691844) to get this validated sooner. In Google Play Console, open your app's dashboard and visit the 'Monetize' section. Go to Products -> Subscriptions/in-app products, and change the description of any product and save the changes. This should work to enable the new service credentials right away (or very shortly) and you can revert the changes to that product. It's not guaranteed to work, but has worked for others in the past to get things working right away. Otherwise, it usually starts working within 24 hours but possibly up to 36.​​"
}
[/block]
# Setup
## 1. Link to a Google Cloud Project

Your Google Play Developer account needs to be linked to a Google Cloud Project. 

### 1a. Open the **Setup** dropdown in the sidebar menu and select **[API access](https://play.google.com/console/api-access)**
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/458a576-Screenshot_2023-02-03_at_11.20.06.png",
        "Screenshot 2023-02-03 at 11.20.06.png",
        560,
        650,
        "#000000"
      ],
      "caption": "",
      "sizing": "80",
      "border": true
    }
  ]
}
[/block]
### 1b. Select **Link** to connect your Google Play account to a Google Cloud Project
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/217ee25-Screenshot_2023-02-03_at_11.22.15.png",
        "Screenshot 2023-02-03 at 11.22.15.png",
        1075,
        338,
        "#000000"
      ],
      "sizing": "80",
      "border": true
    }
  ]
}
[/block]
### 1c. Agree to the terms and conditions
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b62b53c-2020-10-09_18.34.57_play.google.com_41d59660ebd9.png",
        "2020-10-09 18.34.57 play.google.com 41d59660ebd9.png",
        691,
        324,
        "#cbccd0"
      ],
      "border": true,
      "sizing": "80"
    }
  ]
}
[/block]
## 2. Create a Service Account

Next we need to create a service account. This is done from the Google Play Console.

### 2a. Select **Create new service account**

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/311f543-Screenshot_2023-02-03_at_11.28.35.png",
        "Screenshot 2023-02-03 at 11.28.35.png",
        787,
        181,
        "#000000"
      ],
      "sizing": "80",
      "border": true
    }
  ]
}
[/block]
### 2b. Follow the link to the Google Cloud Console
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f156ce9-Screenshot_2023-02-03_at_11.31.04.png",
        "Screenshot 2023-02-03 at 11.31.04.png",
        644,
        299,
        "#000000"
      ],
      "sizing": "80",
      "border": true
    }
  ]
}
[/block]
### 2c. Create the service account key credentials
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/daaff27-Screenshot_2023-02-03_at_11.32.19.png",
        "Screenshot 2023-02-03 at 11.32.19.png",
        657,
        380,
        "#000000"
      ],
      "sizing": "80",
      "border": true
    }
  ]
}
[/block]
### 2d. Name the service account and add a Pub/Sub Admin Role

These are the credentials that RevenueCat will need to communicate with Google. After filling in the details, select **Create and Continue**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/92ba8c5-Screenshot_2023-02-03_at_11.38.29.png",
        "Screenshot 2023-02-03 at 11.38.29.png",
        573,
        658,
        "#000000"
      ],
      "sizing": "80",
      "border": true
    }
  ]
}
[/block]
Add two **Roles**:
* Pub/Sub Admin (to enable [Platform Server Notifications](doc:server-notifications))
* Monitoring Viewer (to allow monitoring of the notification queue)

You can skip the optional third step, **Grant users access to this service account**, by selecting **Done**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f106abc-Screenshot_2023-02-03_at_11.38.59.png",
        "Screenshot 2023-02-03 at 11.38.59.png",
        1010,
        516,
        "#000000"
      ],
      "sizing": "80",
      "border": true
    }
  ]
}
[/block]
### 2e. Create and download the public key

In the Google Cloud Console, select **Actions** > **Manage keys**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/b8b4ce4-Screenshot_2023-02-03_at_11.39.32.png",
        "Screenshot 2023-02-03 at 11.39.32.png",
        1010,
        516,
        "#000000"
      ],
      "border": true,
      "sizing": "80"
    }
  ]
}
[/block]
Select **ADD KEY** > **Create new key**.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9526a2c-Screenshot_2023-02-03_at_11.40.19.png",
        "Screenshot 2023-02-03 at 11.40.19.png",
        1013,
        403,
        "#000000"
      ],
      "border": true,
      "sizing": "80"
    }
  ]
}
[/block]
Make sure **JSON** is selected and select **Create** to create and download the JSON key.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a1219b2-Screenshot_2023-02-03_at_11.40.58.png",
        "Screenshot 2023-02-03 at 11.40.58.png",
        651,
        458,
        "#000000"
      ],
      "border": true,
      "sizing": "80"
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/603dae0-Screenshot_2023-02-03_at_11.41.52.png",
        "Screenshot 2023-02-03 at 11.41.52.png",
        784,
        418,
        "#000000"
      ],
      "caption": "The downloaded JSON key is what you will need to enter in RevenueCat in [step 4](https://docs.revenuecat.com/docs/creating-play-service-credentials#4-enter-the-credentials-json-in-revenuecat).",
      "border": true,
      "sizing": "80"
    }
  ]
}
[/block]
## 3. Grant Financial Access to RevenueCat

### 3a. Back in the Google Play Console, select **Grant Access** (under **Setup** > **API Access**) on the newly created RevenueCat service account

You are all done with the Google Cloud Console. Switch back to the **Google Play Console** and select **Grant access** for the newly created service account. If you do not see the service account you created, try refreshing the page.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f5026d5-Screenshot_2023-02-03_at_11.42.58.png",
        "Screenshot 2023-02-03 at 11.42.58.png",
        1448,
        449,
        "#000000"
      ],
      "caption": "This is in the Google Play Console.",
      "border": true,
      "sizing": "80"
    }
  ]
}
[/block]
### 3b. Grant the following permissions:

- View app information and download bulk reports (read-only)
- View financial data, orders, and cancellation survey responses
- Manage orders and subscriptions
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9edb650-Screenshot_2023-02-03_at_11.43.55.png",
        "Screenshot 2023-02-03 at 11.43.55.png",
        1158,
        705,
        "#000000"
      ],
      "border": true,
      "sizing": "80"
    }
  ]
}
[/block]
### 3c. Select **Invite User** at the bottom of the page and send the invite
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/574ab31-Screenshot_2023-02-03_at_11.44.32.png",
        "Screenshot 2023-02-03 at 11.44.32.png",
        490,
        267,
        "#000000"
      ],
      "border": true,
      "sizing": "80"
    }
  ]
}
[/block]
You will be redirected to **Users and Permissions** where you should see your newly created service account as **Active**.

### 3d. Apply permissions to your apps

In the **Users and Permissions** section, select the service account and add your apps to the account. Select **Apply** on the sheet that appears.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cb02f55-Screenshot_2023-02-03_at_11.45.59.png",
        "Screenshot 2023-02-03 at 11.45.59.png",
        450,
        232,
        "#000000"
      ],
      "border": true,
      "sizing": "80"
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/94ac3a7-Screenshot_2023-02-03_at_11.46.41.png",
        "Screenshot 2023-02-03 at 11.46.41.png",
        850,
        780,
        "#000000"
      ],
      "border": true,
      "sizing": "80"
    }
  ]
}
[/block]

[block:callout]
{
  "type": "danger",
  "title": "Don't forget to Save Changes after applying the permissions!"
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/de4c5ac-Screenshot_2023-02-03_at_11.47.02.png",
        "Screenshot 2023-02-03 at 11.47.02.png",
        851,
        207,
        "#000000"
      ],
      "sizing": "80",
      "border": true
    }
  ]
}
[/block]
## 4. Enter the Credentials JSON in RevenueCat

Copy and paste the credentials JSON that was downloaded in [step 2](https://docs.revenuecat.com/docs/creating-play-service-credentials#2e-create-and-download-the-public-key) into your app settings in the RevenueCat dashboard. You can find your app under **Project Settings > Apps**. Now we'll be ready to handle Google Play purchases!
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/ef375e8-Screen_Shot_2021-12-01_at_7.12.30_PM.png",
        "Screen Shot 2021-12-01 at 7.12.30 PM.png",
        1872,
        696,
        "#fbfbfb"
      ],
      "caption": "This configuration is in the settings of your app.",
      "sizing": "80",
      "border": true
    }
  ]
}
[/block]

[block:callout]
{
  "type": "danger",
  "title": "400 error when connecting to Google",
  "body": "If you're getting a 400 error when connecting to Google for [Platform Server Notifications](doc:google-server-notifications) from the RevenueCat dashboard, ensure you've enabled Pub/Sub for your project in our guide [here](doc:google-server-notifications)."
}
[/block]