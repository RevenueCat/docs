const buildItem = (item, pagePrefix) => {
  let prefix = pagePrefix || "";
  if (item.type === "category") {
    let object = {
      ...item,
      items: item.items.map((subItem) =>
        buildItem(subItem, prefix + (subItem.itemsPrefix || "")),
      ),
    };

    if (item.link.id) {
      object.link = {
        type: "doc",
        id: `${prefix}${item.link.id}`,
      };
    }

    return object;
  }

  if (item.type === "doc") {
    return {
      ...item,
      id: `${prefix}${item.id}`,
    };
  }

  return item;
};

const Category = ({ label, emoji, itemsPathPrefix, items }) => {
  return {
    type: "category",
    label,
    collapsible: false,
    customProps: { emoji },
    items: items.map((item) => buildItem(item, itemsPathPrefix)),
  };
};

const SubCategory = ({ label, slug, itemsPathPrefix, items, index }) => ({
  type: "category",
  label,
  ...(slug && { link: { type: "doc", id: slug } }),
  ...(index && {
    link: {
      type: "generated-index",
      title: index.title,
      slug: index.link,
      ...(index.description && { description: index.description }),
    },
  }),
  items: items.map((item) => buildItem(item, itemsPathPrefix)),
});

const Page = ({ slug }) => ({
  type: "doc",
  id: slug,
});

const Link = ({ label, slug }) => ({
  type: "link",
  label: `${label} →`,
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
