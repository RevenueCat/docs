class Category {
  constructor(
    label,
    path,
    collapsible = true,
    items,
    defaultPage = null,
    customProps = {}
  ) {
    this.type = "category";
    this.label = label;
    this.path = path;
    this.items = items;
    this.collapsible = collapsible;
    this.link = defaultPage || null;
    this.customProps = customProps;
  }

  render(pathPrefix = "") {
    // removes the `path` object property
    return {
      type: this.type,
      label: this.label,
      link: this.link,
      collapsed: this.collapsible,
      collapsible: this.collapsible,
      customProps: this.customProps,
      items: this.items.map((item) => {
        if (item instanceof Page) {
          return (
            (pathPrefix ? pathPrefix + "/" : "") + this.path + "/" + item.id
          );
        } else if (item instanceof Category) {
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
        } else if (item instanceof Link) {
          return item;
        }
      }),
    };
  }
}

class Page {
  constructor(file) {
    this.type = "doc";
    this.id = file;
  }
}

class Link {
  constructor(label, url) {
    this.type = "link";
    this.label = label;
    this.href = url;
  }
}

module.exports = {
  Category,
  Page,
  Link,
};
