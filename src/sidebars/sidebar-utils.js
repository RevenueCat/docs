const checkItemType = (item) => {
  if (item.type == "category") return "category";
  if (item.type == "link") return "link";
  return "page";
};

const buildItem = (item, slug) => {
  const itemType = checkItemType(item);

  if (itemType === "category") {
    return {
      ...item,
      link: {
        type: "doc",
        id: `${slug}/${item.link.id}`,
      },
      items: item.items.map((subItem) => buildItem(subItem, slug)),
    };
  }

  if (itemType === "page") {
    return {
      ...item,
      id: `${slug}/${item.id}`,
    };
  }

  return item;
};

const Category = ({ label, emoji, slug, items }) => {
  return {
    type: "category",
    label,
    collapsible: false,
    customProps: { emoji },
    items: items.map((item) => buildItem(item, slug)),
  };
};

const SubCategory = ({ label, slug, items }) => ({
  type: "category",
  label,
  link: {
    type: "doc",
    id: slug,
  },
  items: items.map((item) => buildItem(item, slug)),
});

const Page = ({ slug }) => ({
  type: "doc",
  id: slug,
});

const Link = ({ label, slug }) => ({
  type: "link",
  label,
  href: slug,
});

module.exports = {
  Category,
  SubCategory,
  Page,
  Link,
};
