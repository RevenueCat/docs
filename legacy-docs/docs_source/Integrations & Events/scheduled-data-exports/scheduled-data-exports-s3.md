---
title: Amazon S3
slug: scheduled-data-exports-s3
excerpt: Setting up S3 access keys for data transfer
hidden: false
---
To start receiving these deliveries, you'll need the following details:

1. Access key ID
2. Secret access key
3. S3 bucket name

Once you have this information, you can add it to the S3 integration settings for your project in RevenueCat.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/c509b62-app.revenuecat.com_projects_85ff18c7_integrations_intercom_8.png",
        null,
        null
      ],
      "caption": "S3 delivery configuration in RevenueCat dashboard"
    }
  ]
}
[/block]

> 📘 Allow 24 hours for initial delivery
> 
> Once you've configured the S3 integration in RevenueCat, allow up to 24 hours before the first file is delivered.

## Receive new and updated transactions only

When configuring the deliveries, you have the option to receive a full export daily or only new and updated transactions from the last export. The first delivery will _always_ be a full export even if this option is selected.

# Creating Amazon S3 Credentials

The below steps outline how to create an Access Key in your AWS console that RevenueCat will need to complete data deliveries.

## 1. Create Access Policy

You should only give RevenueCat access to the minimum resources necessary. To do this, create a new policy that only allows access to the S3 bucket where you want your deliveries to go.

Navigate to the IAM Policy dashboard in your AWS console and click **‘Create policy’**: <https://console.aws.amazon.com/iam/home#/policies>

![](https://files.readme.io/e098c42-e14f603-Screen_Shot_2019-07-10_at_7.08.18_AM.png "e14f603-Screen_Shot_2019-07-10_at_7.08.18_AM.png")



In the policy editor, switch to the JSON view and paste in the following code. Be sure to replace `revenuecat-deliveries` with the name of your bucket.

[block:file]
[
  {
    "language": "json",
    "name": "Access Policy",
    "file": "code_blocks/🔌 Integrations & Events/scheduled-data-exports/scheduled-data-exports-s3_1.json"
  }
]
[/block]



This policy will allow RevenueCat to list the contents of your bucket, as well as read, write, delete files to it. When you've pasted in the code, click **Review policy\***.

![](https://files.readme.io/c0e73e9-e107a25-Screen_Shot_2019-07-17_at_2.19.37_PM.png "e107a25-Screen_Shot_2019-07-17_at_2.19.37_PM.png")



Finally, give the policy a name and description.

## 2. Create IAM User

You'll next need to create an individual user that only has access to the policy you just created in Step 1. 

Navigate to the IAM User dashboard in your AWS console and click **Add user**: <https://console.aws.amazon.com/iam/home#/users>

![](https://files.readme.io/5cb11f9-f88e5d7-Screen_Shot_2019-07-10_at_6.52.59_AM.png "f88e5d7-Screen_Shot_2019-07-10_at_6.52.59_AM.png")



Enter a **User name** and choose **Programmatic access**.

![](https://files.readme.io/267658d-4dca1f9-Screen_Shot_2019-07-10_at_6.53.47_AM.png "4dca1f9-Screen_Shot_2019-07-10_at_6.53.47_AM.png")



Choose the option to **Add user to a group**, and click **Create group**.

![](https://files.readme.io/a6f1984-b0cbff9-Screen_Shot_2019-07-10_at_6.54.48_AM.png "b0cbff9-Screen_Shot_2019-07-10_at_6.54.48_AM.png")



**Select the Policy name you created from Step 1**, then click **Create group**.

![](https://files.readme.io/128afb2-b6f169d-Screen_Shot_2019-07-10_at_7.06.58_AM.png "b6f169d-Screen_Shot_2019-07-10_at_7.06.58_AM.png")



Once the group is created, select it and click **Next**, optionally add any tags to the group.

![](https://files.readme.io/fdd4b15-da89475-Screen_Shot_2019-07-10_at_7.10.38_AM.png "da89475-Screen_Shot_2019-07-10_at_7.10.38_AM.png")



Review and click **Create user**.

![](https://files.readme.io/123edce-9a74401-Screen_Shot_2019-07-10_at_7.11.15_AM.png "9a74401-Screen_Shot_2019-07-10_at_7.11.15_AM.png")



Finally, you can download the secure access credentials or copy them from the dashboard.

![](https://files.readme.io/c861408-a46bfd2-Screen_Shot_2019-07-10_at_7.11.48_AM.png "a46bfd2-Screen_Shot_2019-07-10_at_7.11.48_AM.png")