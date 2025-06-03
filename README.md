# RevenueCat Documentation

This documentation website is built using [Docusaurus](https://docusaurus.io/).

## 🚀 Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/RevenueCat/docusaurus.git
   cd docusaurus
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

3. **Start development server**
   ```bash
   yarn start
   ```
   This opens `http://localhost:3000` and auto-reloads when you make changes.

## 📝 Contributing

**If you aren't comfortable using GitHub to make changes, please contact [RevenueCat Support](https://app.revenuecat.com/settings/support) or open an Issue with your requested change [here](https://github.com/RevenueCat/docusaurus/issues/new).**

### Making Changes

1. **Create a new branch** for your changes
2. **Edit documentation** in the `/docs` folder using Markdown (`.md`) or MDX (`.mdx`)
3. **Test locally** using `yarn start`
4. **Open a Pull Request** - this automatically deploys to the dev environment
5. **Review and merge** - changes are automatically deployed to production

### File Structure

```
docusaurus/
├── docs/                    # Documentation content (.md/.mdx files)
├── src/
│   ├── components/          # React components
│   ├── css/                # Global styles
│   ├── sidebars/           # Sidebar configuration utilities
│   └── theme/              # Theme customizations
├── static/
│   ├── icons/              # SVG icons for sidebar categories
│   ├── img/                # Images and assets
│   └── fonts/              # Custom fonts
├── sidebars.ts             # Sidebar navigation structure
└── docusaurus.config.js    # Site configuration
```

# 📘 Content Guidelines

## Writing Documentation

### Markdown Files

- Use `.md` for simple documentation without React components
- Use `.mdx` for pages that need custom components or code snippets
- Store files in appropriate subdirectories within `/docs`
- Use descriptive filenames that match the content

### Style Guidelines

- **Headers**: Use clear, descriptive headings with proper hierarchy (beginning with H2 → H3, etc.)
- **Code**: Use proper syntax highlighting with language tags
- **Images**: Optimize images and use descriptive alt text
- **Links**: Use relative links for internal pages, absolute for external

### Content Organization

- **Logical Flow**: Organize content from basic to advanced concepts
- **Cross-References**: Link to related sections and external resources
- **Examples**: Include practical examples and use cases
- **Screenshots**: Keep images up-to-date and annotated when helpful

## Adding Rich Content

### Code Snippets

For tabbed code blocks, use the global `RCCodeBlock` component in `.mdx` files:

```jsx
import content from "!!raw-loader!@site/code_blocks/welcome/getting_started.swift";

<RCCodeBlock
  tabs={[
    {
      type: RCCodeBlock.languages.swift,
      content: content,
      title: "iOS Implementation", // optional
    },
    {
      type: RCCodeBlock.languages.kotlin,
      content: kotlinContent,
      title: "Android Implementation", // optional
    },
  ]}
/>;
```

**Supported Languages**: Check `RCCodeBlock.languages` for available syntax highlighting.

### YouTube Embeds

Add video content using the global `YouTubeEmbed` component:

```jsx
<YouTubeEmbed videoId="dQw4w9WgXcQ" title="Getting Started with RevenueCat" />
```

### Images and Media

- Store images in `/static/img/` directory
- Use WebP format when possible for better performance
- Include descriptive alt text for accessibility
- Consider dark mode compatibility

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

The final path is constructed as: `itemsPathPrefix + slug`

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

## Prerequisites

- **Node.js**: Version 18+ recommended
- **Yarn**: Package manager (or npm)

## Installation

```bash
# Install dependencies
yarn install

# Optional: Install typos checker for spell checking
brew install typos-cli
```

The typos checker helps catch spelling errors and can be integrated with:

- Pre-commit hooks (automatic when `typos-cli` is installed)
- [VS Code extension](https://marketplace.visualstudio.com/items?itemName=tekumara.typos-vscode)
- GitHub Actions (runs on PRs)

## Development Commands

```bash
# Start development server (with hot reload)
yarn start

# Build for production
yarn build

# Serve production build locally
yarn serve
```

## Local Development

```bash
yarn start
```

This command:

- Starts a local development server on `http://localhost:3000`
- Opens your browser automatically
- Enables hot reloading for most changes
- Shows build errors and warnings in the console

### Development Tips

- **Fast Refresh**: Most changes reflect immediately without full page reload
- **Search**: Local search is available and indexes content automatically
- **Dark Mode**: Test both light and dark themes
- **Mobile**: Test responsive design on different screen sizes

## Building and Deployment

### Production Build

```bash
yarn build
```

This generates static content in the `build` directory that can be served by any static hosting service.

### Preview Production Build

```bash
yarn build && yarn serve
```

This serves the production build locally on `http://localhost:3000` to test before deployment.

### Deployment Environments

- **Development**: Automatic deployment on PR creation
- **Production**: Automatic deployment on merge to main branch
- **Manual**: Can be deployed to any static hosting service

## 🔧 Troubleshooting

### Common Issues

**Build Failures**

- Check for invalid Markdown syntax in `/docs` files
- Ensure all imported components are properly installed
- Verify all links and images exist

**Missing Content**

- Check `sidebars.ts` configuration
- Verify file paths match the sidebar structure
- Ensure files have proper frontmatter

**Styling Issues**

- Check CSS custom properties in `src/css/custom.css`
- Verify Tailwind classes are properly configured
- Test in both light and dark modes

**Performance Issues**

- Optimize images (use WebP format when possible)
- Minimize large code blocks
- Check for memory leaks in custom components

### Getting Help

1. **Check the console** for build errors and warnings
2. **Review the Docusaurus docs** at [docusaurus.io](https://docusaurus.io/)
3. **Search existing issues** in the repository
4. **Open a new issue** with detailed information about the problem

## 🎨 Customization

### Theming

- **Colors**: Modify CSS variables in `src/css/custom.css`
- **Fonts**: Add custom fonts to `/static/fonts/` and update CSS
- **Components**: Override theme components in `src/theme/`

### Configuration

- **Site settings**: Edit `docusaurus.config.js`
- **Navigation**: Update `sidebars.ts`
- **Plugins**: Add/configure plugins in the config file

## 📊 Performance and SEO

### Optimization Features

- **Static Generation**: Pre-rendered HTML for fast loading
- **Code Splitting**: Automatic bundle optimization
- **Image Optimization**: Built-in image processing
- **Search**: Client-side search with Algolia integration
- **PWA Ready**: Can be configured as a Progressive Web App

### SEO Features

- **Meta Tags**: Automatic generation from frontmatter
- **Sitemap**: Generated automatically
- **Structured Data**: Schema.org markup included
- **Social Cards**: Open Graph and Twitter card support

## 🤝 Contributing Guidelines

### Before You Start

1. **Check existing issues** to avoid duplicate work
2. **Discuss major changes** in an issue before implementation
3. **Follow the style guide** for consistency

### Pull Request Process

1. **Create a descriptive PR title** and description
2. **Link related issues** using keywords (fixes #123)
3. **Test thoroughly** on the dev deployment
4. **Request review** from appropriate team members

### Code Quality

- **Consistent formatting**: Use Prettier and ESLint configs
- **Accessible content**: Follow WCAG guidelines
- **Performance**: Consider impact on build times and bundle size
- **Documentation**: Update README for any new features or changes

---

## 🔗 Links

- **Live Documentation**: [docs.revenuecat.com](https://docs.revenuecat.com)
- **RevenueCat Dashboard**: [app.revenuecat.com](https://app.revenuecat.com)
- **Support**: [RevenueCat Support](https://app.revenuecat.com/settings/support)
- **Community**: [RevenueCat Community](https://community.revenuecat.com)
