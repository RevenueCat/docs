const checkItemType = (item) => {
  if (item.type == "category") return "category";
  if (item.type == "link") return "link";
  return "page";
};

const buildItem = (item) => {
  const itemType = checkItemType(item);

  if (itemType === "category") {
    return {
      ...item,
      items: item.items.map((subItem) => buildItem(subItem)),
    };
  }

  if (itemType === "page") {
    return {
      ...item,
      id: `${item.id}`,
    };
  }

  return item;
};

const Category = ({ label, emoji, items }) => {
  return {
    type: "category",
    label,
    collapsible: false,
    customProps: { emoji },
    items: items.map((item) => buildItem(item)),
  };
};

const SubCategory = ({ label, slug, items }) => ({
  type: "category",
  label,
  ...(slug && { link: { type: "doc", id: slug } }),
  items: items.map((item) => buildItem(item)),
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
