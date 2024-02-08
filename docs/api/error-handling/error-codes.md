---
title: Error Codes
slug: /api-v2-error-codes
hidden: false
---

| Code | Name                  | Description                                                                                                                                                                                          |
| :--- | :-------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 200  | OK                    | Processed as expected                                                                                                                                                                                |
| 201  | Created               | Entity was created                                                                                                                                                                                   |
| 202  | Accepted              | Request acknowledged, but cannot be processed in real time (for instance, async job)                                                                                                                 |
| 204  | No content            | The request was successful and there was no content that could be returned                                                                                                                           |
| 400  | Bad Request           | Client error                                                                                                                                                                                         |
| 401  | Unauthorized          | Not authenticated                                                                                                                                                                                    |
| 403  | Forbidden             | Authorization failed                                                                                                                                                                                 |
| 404  | Not Found             | No resource was found                                                                                                                                                                                |
| 409  | Conflict              | Uniqueness constraint violation                                                                                                                                                                      |
| 418  | I'm a teapot          | RevenueCat refuses to brew coffee                                                                                                                                                                    |
| 422  | Unprocessable entity  | The request was valid and the syntax correct, but we were unable to process the contained instructions.                                                                                              |
| 423  | Locked                | The request conflicted with another ongoing request                                                                                                                                                  |
| 429  | Too Many Requests     | Being [rate limited](ref:rate-limit)                                                                                                                                                                 |
| 500  | Internal Server Error | The RevenueCat server ran into an unexpected problem – please check the [RevenueCat status page](https://status.revenuecat.com/) for any known outages and/or report the issue to RevenueCat support |
| 502  | Bad Gateway           | Invalid response from an upstream server                                                                                                                                                             |
| 503  | Service Unavailable   | There wasn’t a server to handle the request                                                                                                                                                          |
| 504  | Gateway Timeout       | We could not get the response in time from the upstream server                                                                                                                                       |
