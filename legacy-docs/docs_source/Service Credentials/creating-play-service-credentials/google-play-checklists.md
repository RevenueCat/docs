---
title: Google Play Checklists
slug: google-play-checklists
excerpt: Check your configuration setup step by step.
hidden: false
---
The processes for setting up Google Play service credentials and real-time developer notifications to communicate with RevenueCat on your behalf can be complex, and span across multiple consoles and dashboards. Use this handy checklist to go through and make sure you hit each step in your configuration.

Note that while our [credentials guide](doc:creating-play-service-credentials) and our [developer notifications guide](doc:google-server-notifications) will move back and forth between the Google Play Console, the Google Cloud Console, and the RevenueCat dashboard, we've combined the steps into categories for ease of use.

***

# Google Play Service Credentials Checklist

## In Google Cloud:

[block:html]
{
  "html": "<input type=\"checkbox\" id=\"gc1\" style=\"margin-bottom: .5em\">\n<label for=\"gc1\">I have created, either during this process or previously, a Google Cloud project dedicated to this app</label><br>\n<input type=\"checkbox\" id=\"gc2\" style=\"margin-bottom: .5em\">\n<label for=\"gc2\">I have created a service account under the above Cloud project </label><br>\n<input type=\"checkbox\" id=\"gc3\" style=\"margin-bottom: .5em\">\n<label for=\"gc3\">I have given the service account the roles of <b>Pub/Sub Admin</b> and <b>Monitoring Viewer</b></label><br>\n<input type=\"checkbox\" id=\"gc4\" style=\"margin-bottom: .5em\">\n<label for=\"gc4\">I have created and downloaded a JSON public key under the service account I created</label><br>"
}
[/block]

## In Google Play:

[block:html]
{
  "html": "<input type=\"checkbox\" id=\"gp1\" style=\"margin-bottom: .5em\">\n<label for=\"gp1\">  I have linked the previously created Google Cloud project to my app under API Access </label><br>\n<input type=\"checkbox\" id=\"gp2\" style=\"margin-bottom: .5em\">\n<label for=\"gp2\">  I clicked <b>'Manage Play Console Permissions'</b> under the service account and added these permissions:</label><br>\n   <input type=\"checkbox\" id=\"gp2.1\" style=\"margin-left: 2em; margin-bottom: .5em\">\n<label for=\"gp2.1\">View app information and download bulk reports (read-only)</label><br>\n<input type=\"checkbox\" id=\"gp2.2\" style=\"margin-left: 2em; margin-bottom: .5em\">\n<label for=\"gp2.2\">View financial data, orders, and cancellation survey response</label><br>\n<input type=\"checkbox\" id=\"gp2.3\" style=\"margin-left: 2em; margin-bottom: .5em\">\n<label for=\"gp2.3\"> Manage orders and subscriptions</label><br>\n<input type=\"checkbox\" id=\"gp3\" style=\"margin-bottom: .5em\">\n<label for=\"gp3\">  I invited the user and the service account is showing as active in <b>'Users and Permissions'</b></label><br>\n<input type=\"checkbox\" id=\"gp3\" style=\"margin-bottom: .5em\">\n<label for=\"gp3\"> After confirming permissions, I selected <b>'Apply'</b>, then <b>'Save Changes'</b></label><br>\n"
}
[/block]

## In RevenueCat:

[block:html]
{
  "html": "<input type=\"checkbox\" id=\"rc1\" style=\"margin-bottom: .5em\">\n<label for=\"rc1\"> I added the previously downloaded JSON key file to the RevenueCat dashboard and clicked <b>'Save Changes'</b></label><br>\n<input type=\"checkbox\" id=\"rc2\" style=\"margin-bottom: .5em\">\n  <label for=\"rc2\"> I've waited at least 36 hours</label><br>"
}
[/block]

***

# Google Real-Time Developer Notifications Checklist

[block:html]
{
  "html": "<input type=\"checkbox\" id=\"gdn\" style=\"margin-bottom: .5em\">\n  <label for=\"gdn\"> I have waited to ensure that my service credentials are set up correctly and working as expected</label><br>"
}
[/block]

## In Google Cloud:

[block:html]
{
  "html": "<input type=\"checkbox\" id=\"dgc1\" style=\"margin-bottom: .5em\">\n  <label for=\"dgc1\"> I have enabled the Pub/Sub API for the same project I created service credentials with</label><br>"
}
[/block]

## In RevenueCat:

[block:html]
{
  "html": "<input type=\"checkbox\" id=\"drc1\" style=\"margin-bottom: .5em\">\n<label for=\"drc1\"> I have chosen either an existing Pub/Sub Topic ID or created a new one</label><br>\n<input type=\"checkbox\" id=\"drc2\" style=\"margin-bottom: .5em\">\n    <label for=\"drc2\">  I have clicked <b>'Connect to Google'</b></label><br>\n<input type=\"checkbox\" id=\"drc3\" style=\"margin-bottom: .5em\">\n<label for=\"drc3\">  I have copied the topic ID that generated after connecting</label><br>"
}
[/block]

## In Google Play:

[block:html]
{
  "html": "<input type=\"checkbox\" id=\"dgp1\" style=\"margin-bottom: .5em\">\n<label for=\"dgp1\"> Under <b>'Monetize'</b>, in <b>'Monetization Setup'</b>, I pasted the topic ID</label><br>\n<input type=\"checkbox\" id=\"dgp2\" style=\"margin-bottom: .5em\">\n<label for=\"dgp2\"> I have saved changes and did not see any errors</label><br>\n<input type=\"checkbox\" id=\"dgp3\" style=\"margin-bottom: .5em\">\n<label for=\"dgp3\"> I clicked <b>'Send Test Notification'</b> and confirmed it was received in the RevenueCat dashboard</label><br>"
}
[/block]