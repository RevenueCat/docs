---
title: Rate Limits
slug: rate-limits
hidden: true
---
# Outline

- Does RevenueCat have rate limits on API endpoints?
  - Yes. RevenueCat limits requests coming per IP address. If you need a higher rate limit, please contact RevenueCat support.
- Can users hit the rate limit from simply using my app?
  - It's very unlikely that the average user will exceed the rate limit for your app since rate limits are per endpoint and IP address.
- How do I find the rate limits of each endpoint?
  - Since rate limits vary by endpoint, check each endpoint's documentation in this guide for rate limit guidance. *TBD*.
- I'm getting *429 Too many requests* on my backend. How should I fix this error?
  - A 429 error means you exceeded the rate limit for this endpoint. You should slow the rate at which you're making requests to RevenueCat and retry this request at a later time. *SAMPLE CODE*
  - To prevent this in the future, you should add a 1 second wait between requests to the same endpoint originating the same server. *SAMPLE CODE*