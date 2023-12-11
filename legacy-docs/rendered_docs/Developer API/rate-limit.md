---
title: Rate Limit
slug: rate-limit
hidden: false
categorySlug: developer-api
order: 4
---
We will return the following headers on all successful requests:

- `RevenueCat-Rate-Limit-Current-Usage`: the number of executed requests for the current rate limiting period, including the current request. The rate limiting period is one minute.
- `RevenueCat-Rate-Limit-Current-Limit`: the limit in requests per minute for this endpoint

If you reach the rate limit, as indicated by a `429` [error code](https://www.revenuecat.com/reference/error-codes), we will also include the following header:

- `Retry-After`: the number of milliseconds to wait until you can retry this request.

Below is an example of the response body that will be sent when the rate limit is reached. The content of the field `backoff_ms` is equal to the `Retry-After` header.

```json Sample error response
{
  "type": "rate_limit_error",
  "message": "Rate limit exceeded",
  "retryable": true,
  "doc_url": "https://errors.rev.cat/rate-limit-error",
  "backoff_ms": 1000
}
```
