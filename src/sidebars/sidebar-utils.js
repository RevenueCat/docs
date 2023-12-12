class SidebarCategory {
  constructor(label, path, collapsed = true, items, defaultPage = null) {
    this.type = "category";
    this.label = label;
    this.path = path;
    this.items = items;
    this.collapsed = collapsed;
    this.link = defaultPage || null;
  }

  render(pathPrefix = "") {
    // removes the `path` object property
    return {
      type: this.type,
      label: this.label,
      link: this.link,
      items: this.items.map((item) => {
        if (item instanceof SidebarPage) {
          return (
            (pathPrefix ? pathPrefix + "/" : "") + this.path + "/" + item.id
          );
        } else if (item instanceof SidebarCategory) {
          let renderedCategory = item;
          if (renderedCategory.link) {
            // labels aren't allowed for top-level category pages (uses category name instead)
            delete renderedCategory.link.label;
            // prepend the path to the link
            renderedCategory.link.id =
              this.path + "/" + renderedCategory.link.id;
          }
          return renderedCategory.render(this.path);
        } else if (typeof item === "string") {
          return item;
        }
      }),
    };
  }
}

class SidebarPage {
  constructor(label, file) {
    this.type = "doc";
    this.label = label;
    this.id = file;
  }
}

module.exports = {
  SidebarCategory,
  SidebarPage,
};
