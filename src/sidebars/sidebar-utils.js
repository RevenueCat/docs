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
          link: item.link.id
            ? {
                type: "doc",
                id: `${slug}/${item.link.id}`,
              }
            : item.link,
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

const SubCategory = ({ label, slug, items, generatedIndex = null }) => ({
  type: "category",
  label,
  link: generatedIndex
    ? generatedIndex
    : {
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

const PageWithCustomLabel = ({ slug, label }) => ({
  type: "doc",
  id: slug,
  label: label,
});

const Link = ({ label, slug }) => ({
  type: "link",
  label,
  href: slug,
});

const GeneratedIndex = ({ title, description, slug }) => ({
  type: "generated-index",
  title,
  description,
  slug: slug + "-index",
});

module.exports = {
  Category,
  SubCategory,
  Page,
  PageWithCustomLabel,
  Link,
  GeneratedIndex,
};
