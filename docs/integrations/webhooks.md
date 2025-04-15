---
title: Webhooks
slug: webhooks
sidebar_label: Overview
excerpt: Enhanced server-to-server notifications from webhooks
hidden: false
---

:::success Pro Integration
Webhooks are available on our Pro plan. If you're on a legacy plan without access to webhooks, consider migrating to the new [Pro plan](https://www.revenuecat.com/pricing/) to unlock this feature.
:::

RevenueCat webhooks let you receive real-time updates whenever key events occur in your app — such as purchases, renewals, cancellations, or billing issues. This enables you to keep your backend in sync with the subscription lifecycle and automate customer-related actions.

### With webhooks, you can:

- Keep your internal subscription data updated across systems
- Automate actions like sending reminder emails, logging analytics events, or adjusting user permissions
- Handle billing issues proactively, such as alerting customers when a payment fails
- Monitor the health and performance of your subscription infrastructure

---

## Registering Your Webhook URL

To start receiving webhook events, you need to register your server endpoint in the RevenueCat dashboard:

1. Go to your project in the [RevenueCat dashboard](https://app.revenuecat.com/).
2. Click on the _Integrations_ card in the left menu, then select **+ New**.
3. Choose **Webhooks** from the list of integrations.
4. Provide a name for the webhook integration. If you set up multiple URLs (e.g. for dev and prod), naming helps you keep them organized.
5. Enter the HTTPS endpoint URL where you'd like to receive the POST requests.
6. (Optional) Set an authorization header that RevenueCat will include with each request. Use this to validate incoming calls.
7. Choose whether to receive events for:
   - Production purchases
   - Sandbox purchases
   - Or both
8. Select the apps you want to receive events for: a specific app or all apps in the project.
9. (Optional) Filter which event types you'd like to receive. This helps limit unnecessary traffic to your backend.

![](/images/6b982d2-app.revenuecat.com_projects_85ff18c7_collaborators_1_cc8d6f58c19d73f2024156cbed4bbf95.png)
![](/images/6a07a8cf-webhook-integration-7d9cd735e95d.png)

:::info Best Practices: Webhook Authorization
Always set an authorization header via the dashboard. RevenueCat will include this header with each request. Your server should validate this to ensure the webhook is coming from RevenueCat.
:::

---

## How Webhooks Work

RevenueCat sends `POST` requests to your registered endpoint. The body of the request is a JSON payload containing the event data.

**Example:**

```json
{
  "event": {
    "id": "evt_1234567890",
    "type": "INITIAL_PURCHASE",
    "environment": "PRODUCTION",
    "app_user_id": "user_abc123",
    "product_id": "premium_monthly",
    "purchased_at": "2025-04-16T12:34:56Z"
  }
}
```

Your server should:

- Return an HTTP `200` response if processing is successful.
- Any non-200 response is considered a failure and will trigger a retry.

### Retry Behavior

If your server fails to respond or returns a non-200 status code, RevenueCat will retry the webhook up to **5 times** with exponential backoff:

| Attempt | Delay |
|--------:|-------|
| 1st     | 5 minutes |
| 2nd     | 10 minutes |
| 3rd     | 20 minutes |
| 4th     | 40 minutes |
| 5th     | 80 minutes |

**Note:** Processing should be fast. To avoid timeout errors, respond quickly and handle any long-running work asynchronously.

---

## Testing Webhooks

### Manual Testing Tools

To test your endpoint before going live, use tools like:

- [**Beeceptor**](https://beeceptor.com): Quickly create a custom endpoint to inspect and debug incoming webhook requests. You can view headers, body, and simulate error responses.
- [**Typed Webhook**](https://typedwebhook.tools/): Validates your endpoint schema and lets you view formatted event data.

These tools are great when you're prototyping your webhook handlers or debugging specific events.

### Simulated Events via RevenueCat

You can also simulate real webhook events:

1. Make a [sandbox purchase](/test-and-launch/sandbox) in your app.
2. Or trigger test events from the **RevenueCat Dashboard**.

![](/images/ad2c8e64-webhook-testing-c841349f3b7e.png)

> In sandbox mode, the `environment` field in the webhook payload will be `SANDBOX`. You can differentiate environments using this flag in your code.

---

## Webhook Events

RevenueCat supports a variety of event types that reflect changes in the user's subscription lifecycle.

➡️ For the full list of supported webhook events and their payload structure, check the [Event Types and Fields](/integrations/webhooks/event-types-and-fields) documentation.

---

## Syncing Subscription Status

It’s common to use webhooks to keep your customer data consistent across systems. But instead of parsing every individual event in detail, we recommend the following pattern:

1. Receive the webhook
2. Use the event data to identify the affected user
3. Call the `GET /subscribers` endpoint in the [RevenueCat REST API](https://www.revenuecat.com/docs/api-v1#tag/customers)
4. Sync the returned subscriber object with your database

This approach gives you a consistent, up-to-date view of the customer’s full subscription status, reducing the chance of partial or outdated data.

---

## Best Practices

### ✅ Authorization

Always verify the webhook’s authorization header. This ensures the request is coming from RevenueCat and not a malicious actor.

### ⚡ Respond Quickly

RevenueCat times out webhook requests after **60 seconds**. Respond immediately, then handle any intensive tasks asynchronously.

### ⏳ Delivery Times

- Most webhooks are delivered within 5 to 60 seconds of the triggering event.
- Cancellation-related events may take up to 2 hours to be delivered.

Design your user experience and backend systems with these delivery windows in mind.

### 🔄 Idempotency

Webhooks are designed for **at least once** delivery. In rare cases, your system may receive the same event more than once.

To avoid duplicated processing:

- Use the unique `event.id` sent with every webhook
- Maintain a log or cache of processed events
- Skip any duplicate events

### 🧱 Forward Compatibility

Your webhook handlers should gracefully handle unexpected fields or new event types. RevenueCat may add fields to existing events without a version bump. Never hard-code exact field structures.

---

## Sample Webhook Payloads

Need to see real examples?

Check out the [Sample Events](/integrations/webhooks/sample-events) page for example payloads from different event types.

---

