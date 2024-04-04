const checkItemType = (item) => {
  if ("link" in item) return "subcategory";
  if ("href" in item) return "link";
  return "page";
};

const Category = ({ label, emoji, slug, items }) => ({
  type: "category",
  label,
  collapsible: false,
  customProps: { emoji },
  items: items.map((item) => {
    const itemType = checkItemType(item);

    if (itemType === "subcategory")
      ({
        ...item,
        link: {
          type: "doc",
          id: `${slug}/${item.link.id}`,
        },
        items: item.items.map((subItem) => {
          const subItemType = checkItemType(subItem);

          if (subItemType === "link") return subItem;
          if (subItemType === "page")
            return { ...subItem, id: `${slug}/${subItem.id}` };
        }),
      });

    if (itemType === "link") return item;

    return { ...item, id: `${slug}/${item.id}` };
  }),
});

const SubCategory = ({ label, slug, items }) => ({
  type: "category",
  label,
  link: {
    type: "doc",
    id: slug,
  },
  items: items.map((item) => {
    const itemType = checkItemType(item);

    if (itemType === "link") return item;

    return { ...item, id: `${slug}/${item.id}` };
  }),
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
