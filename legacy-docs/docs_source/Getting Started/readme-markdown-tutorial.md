---
title: ReadMe Markdown Tutorial
slug: readme-markdown-tutorial
excerpt: Common markdown elements and their ReadMe interpretations
hidden: true
---
<!--
Hidden Markdown Comment
-->

Below are some examples of markdown elements that are commonly used in the RevenueCat documentation, and how to format them in Github.
If an element (like a list) or formatting style (like **\*\*bold\*\*** text) is not mentioned below, then it is formatted identically in Github and ReadMe.
If you have never used markdown before, read [this guide](https://www.markdownguide.org/basic-syntax/).

The title and subtitle (excerpt) should be set in the [YAML front matter](https://docs.readme.com/main/docs/rdme#markdown-file-setup) of the markdown file.
See [ReadMe's guide](https://docs.readme.com/main/docs/rdme) to formatting these markdown files to understand how to find/set the document category 
(and other ReadMe specific configurations that are required).

# Headers
Headers denote new sections. Only the first (#) and second (##) levels contribute to the Table of Contents on the right-hand side of each doc:

<img src="https://user-images.githubusercontent.com/110489217/217081023-99974c99-292d-4c60-b62b-a839fd4f7d0f.png" width=250>


# Links
Use basic `[text](url)` format to render a [link.](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
When linking to another **ReadMe** page, format like this: `[text](doc:url-slug)`. You can find the url slug at the end of a document's url 
(e.g., `https://docs-origin.revenuecat.com/docs/ios-products` -> `ios-products`).


# HTML
Basic HTML can be used in Markdown. This is especially helpful for images (see below) and adding some basic style to an element:

`<p align="center">Centered text</p>`

<p align="center">Centered text</p>


# Images
### Option 1: HTML (preferred)
Images can easily be added via HTML:

`<img src="https://_____">`

This is preferred because attributes (e.g., width) can be controlled. 

Also, images can easily made clickable:

`<a href="https://revenuecat.com/"><img src="https://_____" alt="revenuecat.com" width=200></a>`

<a href="https://revenuecat.com/"><img src=
"https://user-images.githubusercontent.com/110489217/217077216-2323c0b7-7a08-4e09-9867-8e696582a8ec.png" width=200></a>

### Option 2: Markdown
Typical markdown image formatting `![alt text](url)` can be used, but the image cannot be adjusted.

> 🚧 Important: Formatting image URLs
> 
> Images **must** be linked using Github's drag-and-drop feature to generate a public url:
> 
> <img src="https://user-images.githubusercontent.com/499192/57450172-1a955f80-725e-11e9-9fed-267179bdab15.gif" width=250>
> 
> Using local `![](/path/to/image)` or absolute `![](https://github.com/revenuecat/revenuecat-docs/path/to/image)` paths will not be rendered in ReadMe.


# Font Awesome Icons
[Font Awesome](https://fontawesome.com/search?m=free&o=r) icons are commonly used in the repo, especially when a link will take a user to a different document:

`[Quickstart :fa-arrow-right:](doc:getting-started)`

[Quickstart :fa-arrow-right:](doc:getting-started)


# Callouts
Readme has a number of default "callout" (message) boxes available. Use these to make important information stand out to the reader.
<img src="https://user-images.githubusercontent.com/110489217/217083151-9d374c68-6bb7-4098-90d5-ee205bd2ce0a.png">

Callouts are formatted as quote blocks with a title, a separator line, and an emoji. 
Be sure to use these *exact* emojis 📘, 🚧, ❗️, 👍 to get the blue, yellow, red, and green colors (respectively). 
Any other emoji (or no emoji) will render a gray message box.

```
> 📘 Information Title
> 
> Information message.
```