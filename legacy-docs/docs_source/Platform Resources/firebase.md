---
title: Firebase Apps
slug: firebase
excerpt: Integrate your Firebase app with RevenueCat
hidden: true
---
# What is RevenueCat?

RevenueCat is a scalable backend for in-app subscriptions and purchases. With RevenueCat, you can build and manage your mobile app business without having to set up or maintain any purchase infrastructure. Here you can read more about [how RevenueCat fits into your app](https://www.revenuecat.com/blog/where-does-revenuecat-fit-in-your-app).
[block:callout]
{
  "type": "warning",
  "body": "We recommend checking out our official [Firebase integration](doc:firebase-integration) for a more seamless integration between RevenueCat and Firebase.",
  "title": "Deprecated"
}
[/block]
Firebase is a popular backend-as-a-service by Google for building mobile apps.

# Keeping User IDs In Sync

Firebase has a well documented authentication mechanism that works with Email/Password, Github, Google Sign-In, anonymous authentication and more. 

It's simple to keep your user IDs from Firebase in sync with the RevenueCat backend by listening to authentication state change notifications posted by Firebase.

Below are practical examples of setting this up in your application:

## iOS
[block:file]
[
  {
    "language": "swift",
    "name": "",
    "file": "code_blocks/📙 Platform Resources/firebase_1.swift"
  }
]
[/block]
## Android
[block:file]
[
  {
    "language": "kotlin",
    "name": "",
    "file": "code_blocks/📙 Platform Resources/firebase_2.kt"
  }
]
[/block]

[block:callout]
{
  "type": "info",
  "body": "Always test authentication in your own app and make sure everything is working as expected. Since every app is different, the above helpers can get you started but may need to be modified to work with the authentication flow specific to your app."
}
[/block]
# Handling Events With Cloud Functions

Firebase Cloud Functions are a great way to run server-side code without having to manage your own server. This makes them excellent for things like catching webhooks.

Below is an example that uses a combination of HTTP triggers and Pub/Sub triggers to handle webhook events from RevenueCat.

The URL of the `incomingWebhook` function should be pasted into the RevenueCat dashboard along with a secret auth key that the function will use to verify it is actually RevenueCat that's sending the event.

## Setup
![](https://files.readme.io/376d572-Screen_Shot_2021-12-02_at_10.53.29_AM.png "Screen Shot 2021-12-02 at 10.53.29 AM.png")
## Function Code
[block:file]
[
  {
    "language": "javascript",
    "name": "index.js",
    "file": "code_blocks/📙 Platform Resources/firebase_3.js"
  }
]
[/block]

[block:callout]
{
  "type": "info",
  "title": "Write idempotent functions",
  "body": "Firebase PubSub functions should be idempotent, that is, they should produce the same result even if they are called multiple times. See Firebase guides for more information"
}
[/block]