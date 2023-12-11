---
title: Webhooks
slug: webhooks
excerpt: Enhanced server-to-server notifications from webhooks
hidden: false
categorySlug: integrations
order: 1
---
> 👍 
> 
> Webhooks are available on the all current plans. If you are on one of our legacy plans without access to webhooks, migrate to our new [Pro plan](https://www.revenuecat.com/pricing/) to get access.

RevenueCat can send you notifications any time an event happens in your app. This is useful for subscription and purchase events, which will allow you to monitor state changes for your subscribers and react accordingly. 

With webhooks integrated, you can:

- Maintain an up-to-date record of subscriptions and purchases in your own backend
- Trigger automations and workflows based on the subscription lifecycle 
- Remind subscribers of the benefits of your app when they decide to unsubscribe, or let them know when there are billing issues. 

# Registering Your Webhook URL

1. Navigate to your project in the RevenueCat dashboard and find the _Integrations_ card in the left menu. Select **+ New** 

![](https://files.readme.io/6b982d2-app.revenuecat.com_projects_85ff18c7_collaborators_1.png)

2. Choose 'Webhooks' from the Integrations menu
3. Name the new Webhook integration. You can set up multiple webhook URLs, the name helps differentiate them.
4. Enter the HTTPS URL of the endpoint that you want to receive your webhooks
5. (Optional) Set authorization header that will be sent with each POST request
6. Select whether to send events for production purchases, sandbox purchases, or both
7. Select if the webhook events should be sent only for one app or for all apps of the project
8. (Optional) Filter the kinds of events that should be sent to the webhook URL.

![](https://github.com/RevenueCat/revenuecat-docs/assets/14286938/6a07a8cf-0696-4a2f-8546-7d9cd735e95d)

> 📘 Best Practices: Webhook authorization
> 
> We recommended setting an authorization header value via the RevenueCat dashboard. When set, RevenueCat will send this header in every request. Your server can use this to authenticate the  webhooks from RevenueCat.

RevenueCat will send `POST` requests to your server, in which the body will be a JSON representation of the notification. Your server should return a **200 status code**. Any other status code will be considered a failure by our backend. RevenueCat will retry later (up to 5 times) with an increasing delay (5, 10, 20, 40, and 80 minutes). After 5 retries, we will stop sending notifications.

If you're receiving a webhook it's important to respond quickly so you don't accidentally run over a timeout limit. We recommend that apps defer processing until after the response has been sent.

> 📘 Multiple webhook integrations per project
> 
> You can set up multiple webhook integrations per project – for example, if you use a different backend for production and sandbox/testing, you can set up two webhook integrations, filtered to the respective environment.

# Webhook Events

For webhook event types and fields, see [here](https://www.revenuecat.com/docs/event-types-and-fields).

# Testing

You can test your server side implementation by purchasing [sandbox subscriptions](doc:sandbox) or by issuing test webhook events through [RevenueCat's dashboard](http://app.revenuecat.com).

![](https://github.com/RevenueCat/revenuecat-docs/assets/14286938/ad2c8e64-12ba-4ee1-9bf0-c841349f3b7e)

When testing with sandbox purchases, the `environment` value will be `SANDBOX`. RevenueCat itself does not have sandbox and production environments, so this value is only determined by the type of transaction received from the store. The same customer in RevenueCat can have both sandbox and production transactions associated with their account. 

# Syncing Subscription Status

Webhooks are commonly used to sync a customer's subscription status across multiple systems. Because different webhook events contain unique information, we recommend calling the `GET /subscribers` [REST API](https://docs.revenuecat.com/reference#subscribers) endpoint after receiving any webhook. That way, the customer's information is always in the same format and is easily synced to your database. This approach is simpler than writing custom logic to handle each webhook event, and has the added benefit of making your system more robust and scalable.

# Security and Best Practices

## Authorization

You can configure the authorization header used for webhook requests via the [dashboard](https://app.revenuecat.com/). Your server should verify the validity of the authorization header for every notification.

## Response Duration

If your server doesn't finish the response in 60s, RevenueCat will disconnect. We then retry up to 5 times. We recommend that apps respond quickly and defer processing until after the response has been sent.

## Delivery Delays

Most webhooks are usually delivered within 5 to 60 seconds of the event occurring - cancellation events usually are delivered within 2hrs of the user cancelling their subscription. You should be aware of these delivery times when designing your app.

## Future Proofing

You should be able to handle webhooks that include additional fields to what's shown here, including new event types. We may add new fields or event types in the future without changing the API version. We _won't_ remove fields or events without proper API versioning and deprecation.

## Handle duplicate events

RevenueCat makes our best effort for “at least one delivery” of webhooks. In some _rare_ situations, your application may receive a webhook for the same event more than once, and it is something your webhook processing should be prepared to handle. We recommend you to guard against duplicated events by making your webhook processing idempotent. For example, you can keep track of the event `id` we send with each webhook to ensure you are processing the event only once. 

# Sample Webhook Events

For sample webhook events, see [here](https://www.revenuecat.com/docs/sample-events).
