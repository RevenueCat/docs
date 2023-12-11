class SidebarCategory {
  constructor(label, path, items) {
    this.type = "category";
    this.label = label;
    this.path = path;
    this.items = items;

    for (var item of items) {
      if (item instanceof SidebarPage) {
        item.id = this.path + "/" + item.id;
      } else if (item instanceof SidebarCategory) {
        item.path = this.path + "/" + item.path;
      } else if (typeof item === "string") {
        item = this.path + "/" + item;
      }
    }
  }

  stripped() {
    // removes the `path` object property
    return {
      type: this.type,
      label: this.label,
      items: this.items.map((item) => {
        if (item instanceof SidebarPage) {
          return item.id;
        } else if (item instanceof SidebarCategory) {
          return item.stripped();
        } else if (typeof item === "string") {
          return item;
        }
      }),
    };
  }
}

class SidebarPage {
  constructor(label, path) {
    this.type = "doc";
    this.label = label;
    this.id = path;
  }
}

module.exports = {
  SidebarCategory,
  SidebarPage,
};
