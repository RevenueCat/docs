---
title: Pagination
slug: pagination
hidden: false
categorySlug: developer-api
order: 1
---
Top-level API resources have support for bulk fetches via "list" API methods. For instance, you can list products, list entitlements, and list offerings. These list API methods share a common structure, taking at least these two parameters: `limit` and `starting_after`.

When a response or a field contains multiple entities of the same type, it returns a `list` object of the following structure:

```json JSON
{
  "object": "list",
  "items": [
    {}
  ],
  "next_page": "LIST_BASE_URL?starting_after=LAST_ID",
  "url": "LIST_BASE_URL"
}
```



Where…

- `url` is the full path base URL of the list endpoint (i.e., if you make a request to this endpoint, you will get the first page), e.g. `/v2/projects/{project_id}/products`
- `next_page` is the URL for the next page, if there is one. If there is no next page, the `next_page` field will not be present. Example: `/v2/projects/{project_id}/products?starting_after={last_id}`
- `items` is an array of the entries of the list.

The `starting_after` query parameter of list endpoints accepts the ID of the first list item that will not be part of the list (in other words, the ID of the last item of the previous page).

At the moment we only support forward pagination.

# Parameters

`limit` _optional, default is 20_

A limit on the number of objects to be returned.

`starting_after` _optional_

A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 20 objects, ending with foo, your subsequent call can include `starting_after=foo` in order to fetch the next page of the list.