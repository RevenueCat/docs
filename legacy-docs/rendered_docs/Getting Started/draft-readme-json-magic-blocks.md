---
title: "[Draft] Readme json magic-blocks"
slug: draft-readme-json-magic-blocks
hidden: true
categorySlug: documentation
order: 25
---
Plain text
[block:api-header]
{
  "title": "Header title"
}
[/block]

```c 
/* C code */
```
```javascript 
// Javascript code
```

[block:callout]
{
  "type": "danger",
  "title": "Error callout title",
  "body": "Error callout message."
}
[/block]

[block:parameters]
{
  "data": {
    "h-0": "Table Title A",
    "h-1": "Table Title B",
    "h-2": "Table Title C",
    "0-0": "Table Item A",
    "0-1": "Table Item B",
    "0-2": "Table Item C"
  },
  "cols": 3,
  "rows": 1
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a14e1f1-image2.png",
        "image2.png",
        512,
        512,
        "#000000"
      ],
      "caption": "RC logo caption."
    }
  ]
}
[/block]

[block:html]
{
  "html": "<div>\n  <p>This is a paragraph written in html.</p>\n</div>\n\n<style></style>"
}
[/block]
**Bold text**
*Italic text*

1. This
2. Is
3. Ordered
4. List 

- This
- Is
- Unordered
- List