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

<RCCodeBlock
  tabs={[
    {
      type: RCCodeBlock.languages.swift,
      content: content,
      title: "Getting Started", //optional
    },
  ]}
/>;
```

Supported languages in `RCCodeBlock.languages`.

### Adding YouTube embeds

The `YouTubeEmbed` component is imported globally to `.mdx` files.

```jsx
<YouTubeEmbed videoId=<videoId> title=<title> />
```

## Sidebars

The sidebar system is the heart of the documentation navigation, defined in `sidebars.ts`. The system uses TypeScript utilities from `sidebar-utils.ts` to create a structured tree of categories, subcategories, pages, and links.

[Video Explanation](https://www.loom.com/share/68d0f56195034c8d9badf454beb7d899?sid=b312b6f7-8f9e-43c5-9f98-6db5f7548944)

### Sidebar Structure

There are **four types of sidebar items**:

1. **Category** - Top-level sections with icons and custom styling
2. **SubCategory** - Collapsible sections that can have their own landing pages
3. **Page** - Individual documentation pages
4. **Link** - References to pages in other categories

### Category Configuration

Categories are the main navigation sections and support custom icons and colors:

```js
const exampleCategory = Category({
  iconName: "sparkle", // Icon from /static/icons/ directory
  iconColor: "var(--rc-blue-primary)", // Optional custom color (defaults to blue)
  label: "Example Category",
  itemsPathPrefix: "example/", // Path prefix for all items in this category
  items: [
    // ... category items
  ],
});
```

**Available Icons**: The `iconName` should correspond to SVG files in `/static/icons/`. Common icons include:

- `"sparkle"` - For guides and highlights
- `"hammer"` - For projects and development
- `"mobile"` - For SDK documentation
- `"person"` - For customer-related docs
- `"chart-bar"` - For analytics and metrics
- `"key"` - For account and security

**Icon Colors**: Use CSS variables for consistent theming:

- `"var(--rc-red-primary)"` - Default red theme
- `"var(--rc-blue-primary)"` - Blue accent
- `"var(--rc-green-primary)"` - Success/positive actions
- Custom colors can be defined in `custom.css`

### SubCategory Configuration

SubCategories create collapsible sections within categories:

```js
SubCategory({
  label: "Getting Started",
  slug: "getting-started", // Optional: creates a landing page
  itemsPathPrefix: "getting-started/",
  items: [Page({ slug: "quickstart" }), Page({ slug: "installation" })],
  index: {
    // Optional: generated index page
    title: "Getting Started Guide",
    link: "getting-started-overview",
    description: "Learn the basics of RevenueCat",
  },
});
```

### Page Configuration

Pages represent individual documentation files:

```js
Page({ slug: "installation/ios" });
// References: /docs/installation/ios.md or ios.mdx
```

The final path is constructed as: `pathPrefix + itemsPathPrefix + slug`

### Link Configuration

Links reference pages in other categories:

```js
Link({
  label: "SDK Reference",
  slug: "/platform-resources/sdk-reference",
});
// Creates a link with arrow indicator (→)
```

### Complete Example

```js
const mobileSDKCategory = Category({
  iconName: "mobile",
  label: "RevenueCat SDK",
  itemsPathPrefix: "getting-started/",
  items: [
    Page({ slug: "quickstart" }),
    SubCategory({
      label: "Install the SDK",
      slug: "installation",
      itemsPathPrefix: "installation/",
      items: [
        Page({ slug: "ios" }), // → /docs/getting-started/installation/ios
        Page({ slug: "android" }), // → /docs/getting-started/installation/android
        Page({ slug: "reactnative" }),
      ],
    }),
    Link({
      label: "Identifying Users",
      slug: "/customers/user-ids",
    }),
  ],
});
```

### Multiple Sidebars

The system supports multiple sidebar configurations:

```js
const sidebars = {
  defaultSidebar: [
    welcomeCategory,
    projectsCategory,
    mobileSDKCategory,
    // ... more categories
  ],
  dataSidebar: [metricsCategory, chartsCategory],
  integrationsSidebar: [eventsCategory, webhooksCategory],
};
```

### Path Resolution

Paths are built hierarchically:

- **Base**: `/docs/`
- **Category prefix**: `itemsPathPrefix` from Category
- **SubCategory prefix**: `itemsPathPrefix` from SubCategory
- **Page slug**: `slug` from Page

Example: `Category({ itemsPathPrefix: "sdk/" })` → `SubCategory({ itemsPathPrefix: "ios/" })` → `Page({ slug: "installation" })` = `/docs/sdk/ios/installation`

### Best Practices

1. **Consistent Iconography**: Use appropriate icons that match the content type
2. **Logical Grouping**: Group related content in SubCategories
3. **Clear Labels**: Use descriptive labels that match the content
4. **Path Prefixes**: Use consistent path prefixes to organize file structure
5. **Color Coding**: Use custom colors sparingly for important categories

# 🛠️ Development

### Installation

- Install dependencies

  ```sh
  $ yarn install
  ```

- Optionally install [typos-cli](https://github.com/crate-ci/typos)

  ```sh
  brew install typos-cli
  ```

  See the link for other options.

  This is optional, but will enable running it via the pre-commit hook. You can also use the recommended [vscode extension](https://marketplace.visualstudio.com/items?itemName=tekumara.typos-vscode) or let it run via GitHub Actions when you create a PR.

### Local Development

```sh
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```sh
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.
