# RevenueCat Docs

This documentation website is built using [Docusaurus](https://docusaurus.io/).

# Editing

## Sidebars

Each grouping of docs is called a 'sidebar'. The default sidebar is defined in `sidebars.js` and requires each category and page to be defined manually. For now, we have only one sidebar indicating one grouping of docs.

## Pages

Pages are organized into categories within `docs/categories`. Add a page to one of these subfolders to make it available to use in a sidebar.

If a page uses invalid markdown, or unsupported syntax (readme-flavored, etc.) the project will fail to build. **Only add files that are valid markdown to the `docs` folder.** If docusaurus fails to build, it's likely an invalid markdown file was added to this folder.

# Migrating legacy docs

1. Find a doc in `legacy-docs/docs_source`, copy
2. Find the relevant category in `docs/categories`
3. Add the file to the category folder
4. Add to `sidebars.js` (create the category if it doesn't exist yet)
5. Edit to make sure it is valid markdown
   - If there are code snippets, comment out the block for now
7. Save to automatically restart docusaurus

# Development

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

### Deployment

TODO
