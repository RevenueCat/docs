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

const SubCategory = ({ label, slug, items, index }) => ({
  type: "category",
  label,
  ...(slug && { link: { type: "doc", id: slug } }),
  ...(index && {
    link: {
      type: "generated-index",
      title: index.title,
      slug: index.link + "-index",
      ...(index.description && { description: index.description }),
    },
  }),
  items: items.map((item) => buildItem(item)),
});

const Page = ({ slug }) => ({
  type: "doc",
  id: slug,
});

const Link = ({ label, slug }) => ({
  type: "link",
  label: label + " →",
  href: slug,
});

const GeneratedIndex = ({ title, link, description }) => ({
  title,
  link,
  description,
});

module.exports = {
  Category,
  SubCategory,
  Page,
  Link,
  GeneratedIndex,
};
