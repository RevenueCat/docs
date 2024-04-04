const checkItemType = (item) => {
  if ("link" in item) return "subcategory";
  if ("href" in item) return "link";
  return "page";
};

const Category = ({ label, emoji, slug, items }) => {
  return {
    type: "category",
    label,
    collapsible: false,
    customProps: { emoji },
    items: items.map((item) => {
      const itemType = checkItemType(item);

      if (itemType === "subcategory") {
        return {
          ...item,
          link: {
            type: "doc",
            id: `${slug}/${item.link.id}`,
          },
          items: item.items.map((subItem) => {
            const subItemType = checkItemType(subItem);

            return subItemType === "page"
              ? { ...subItem, id: `${slug}/${subItem.id}` }
              : subItem;
          }),
        };
      }

      if (itemType === "page") {
        return {
          ...item,
          id: `${slug}/${item.id}`,
        };
      }

      return item;
    }),
  };
};

const SubCategory = ({ label, slug, items }) => ({
  type: "category",
  label,
  link: {
    type: "doc",
    id: slug,
  },
  items: items.map((item) => {
    const itemType = checkItemType(item);
    return itemType === "page" ? { ...item, id: `${slug}/${item.id}` } : item;
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
