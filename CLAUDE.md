# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Commands

- `yarn install` - Install dependencies
- `yarn start` - Start development server on port 3030 with hot reload
- `yarn build` - Build for production
- `yarn serve` - Serve production build locally
- `yarn clear` - Clear Docusaurus cache

### Code Quality

- `yarn format` - Format code with Prettier
- `lefthook install` - Install pre-commit hooks (runs Prettier and typos checker)

### Additional Tools

- `typos` - Spell checker (install via `brew install typos-cli`)
- Pre-commit hooks automatically run formatting and spell checking

## High-Level Architecture

### Documentation Site Structure

This is a **Docusaurus-based documentation website** for RevenueCat, structured as a multi-platform SDK documentation hub covering iOS, Android, React Native, Flutter, Unity, Web, and more.

### Key Architectural Components

#### 1. Sidebar System (`sidebars.ts` + `src/sidebars/sidebar-utils.ts`)

The heart of navigation uses TypeScript utilities to create structured documentation trees:

- **Category**: Top-level sections with custom icons and colors
- **SubCategory**: Collapsible sections that can have landing pages
- **Page**: Individual documentation files
- **Link**: Cross-references to pages in other categories

Path construction is hierarchical: `Category.itemsPathPrefix` + `SubCategory.itemsPathPrefix` + `Page.slug`

#### 2. Multiple Sidebar Configurations

- `defaultSidebar`: Main implementation reference
- `integrationsSidebar`: Events & integrations
- `dataSidebar`: Charts, metrics, and data exports
- `playbookSidebar`: Strategy guides

#### 3. Code Snippet System

Uses a global `RCCodeBlock` component for multi-language code examples:

- Loads code from `/code_blocks/` directory using `?raw` imports
- Supports tabbed interfaces for different platforms
- **Important**: `.ts`/`.js` files must use `.txt` suffix for raw loading

#### 4. Content Organization

- `/docs/` - Main documentation content (MDX/Markdown)
- `/code_blocks/` - Code examples organized by category
- `/static/` - Images, icons, fonts, and other assets
- `/openapi-spec/` - API specification files for REST API docs

#### 5. Plugin Architecture

Custom Docusaurus plugins for:

- **Tailwind CSS integration** - PostCSS pipeline with custom theme
- **Analytics** - Multiple tracking providers (Segment, HockeyStack, 6sense)
- **Lightbox** - Image zoom functionality
- **Raw file loading** - Webpack 5 asset/source for code blocks

#### 6. Multi-API Documentation

Uses Redocusaurus plugin to generate API docs from OpenAPI specs:

- API v1, v2, v2-beta endpoints
- External purchases API
- Integrated into main navigation

### Development Workflow Patterns

#### Adding New Documentation

1. Create `.md` or `.mdx` files in appropriate `/docs/` subdirectory
2. Add to sidebar configuration in `sidebars.ts`
3. Use `RCCodeBlock` for code examples, storing snippets in `/code_blocks/`

#### Code Block Management

- Store platform-specific examples in `/code_blocks/[category]/`
- Use descriptive filenames with platform suffixes (e.g., `_1.swift`, `_2.kt`)
- Load with `import content from "@site/code_blocks/path/file.ext?raw"`

#### Sidebar Path Logic

When adding pages, understand the path construction:

```
Category({ itemsPathPrefix: "getting-started/" })
  → SubCategory({ itemsPathPrefix: "installation/" })
    → Page({ slug: "ios" })
= `/docs/getting-started/installation/ios`
```

### Key Configuration Files

- `docusaurus.config.js` - Main site configuration with plugin setup
- `sidebars.ts` - Navigation structure definition
- `tailwind.config.js` - Styling configuration
- `lefthook.yml` - Git hooks for code quality
- `redocly.yaml` - API documentation configuration

### Performance Optimizations

- Uses Docusaurus Faster with experimental features enabled
- Rspack bundler for faster builds
- Lightning CSS minification
- SWC for JavaScript processing
- Persistent caching enabled

This architecture prioritizes developer experience with hot reloading, comprehensive code quality tooling, and a flexible content organization system that scales across multiple product SDKs and platforms.
