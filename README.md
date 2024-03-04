# RevenueCat Documentation

This documentation website is built using [Docusaurus](https://docusaurus.io/).

**If you aren't comfortable using GitHub to make changes, please contact [RevenueCat Support](https://app.revenuecat.com/settings/support) or open an Issue with your requested change [here](https://github.com/RevenueCat/docusaurus/issues/new).**

# 📘 Instructions

Edit raw `.md` and `.mdx` that are stored in `/docs`. Docs that don't require code snippets or other custom components (`/src/components`) can use standard Markdown (`.md`).

After making changes, open a pull request (PR). Opening a PR will automatically build and deploy the documentation to the `dev` environment.

After the changes have been reviewed, and all conversations resolved, the PR can be merged. After merge, it's automatically deployed to production.

# 🧱 How it works

## Pages

Pages are organized into categories within `/docs`. Add a page to one of these subfolders to make it available to use in a sidebar.

If a page uses invalid markdown, or unsupported syntax (readme-flavored, etc.) the project will fail to build. **Only add files that are valid markdown to the `docs` folder.** If docusaurus fails to build, it's likely an invalid markdown file was added to this folder.

### Adding code snippets

There's a custom tabbed code block component called `RCCodeBlock`, imported globally to all `.mdx` files, that renders code snippets. Use `raw-loader` to pass the content to the component.

**Pages must be `.mdx`.**

Pass a set of values for each tab, reading each code file using `raw-loader` relative to the `@site` root path:

```jsx
import content from "!!raw-loader!@site/code_blocks/welcome/getting_started.swift";

<RCCodeBlock tabs={[
    {
        type: RCCodeBlock.languages.swift,
        content: content,
        title: "Getting Started" //optional
    }
]}/>
```

Supported languages in `RCCodeBlock.languages`.

### Adding YouTube embeds

The `YouTubeEmbed` component is imported globally to `.mdx` files.

```jsx
<YouTubeEmbed videoId=<videoId> title=<title> />
```

## Sidebars

Each grouping of docs is called a 'sidebar' and is defined in `sidebars.js`. A sidebar is a combination of categories and pages in a tree structure, and requires each category and page to be defined manually.

```js
new Category(
  "😺 Welcome to RevenueCat", // category title
  "welcome", // category path, e.g. docs/{path}/
  false, // should the category be collapsed by default? (defaults to true)
  [ // array of pages within the category
    new Page("overview"), // page file name, e.g. docs/{path}/{file}
    new Page("building-new"),
    new Page("existing-apps"),
    new Category( // sub-category
      "Setting up RevenueCat", // category title
      "projects", // category path, e.g. docs/{path}/{subcategory}/
      true, // collapsed by default?
      [
        new Page("collaborators"), // docs/{path}/{subcategory}/{file}
        new Page("security"),
        new Page("account-management"),
      ],
      new Page("projects")
    ),
    new Page("authentication"),
  ]
);
```

The default sidebar is rendered at the bottom of `sidebars.js`.

# 🛠️ Development

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

