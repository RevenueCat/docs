const Category = ({ label, slug, items }) => ({
  type: "category",
  label,
  collapsible: false,
  items: items.map((item) => {
    if ("link" in item) {
      return {
        ...item,
        link: {
          type: "doc",
          id: `${slug}/${item.link.id}`,
        },
        items: item.items.map((subItem) => ({
          ...subItem,
          id: `${slug}/${subItem.id}`,
        })),
      };
    } else if ("href" in item) {
      return item;
    }

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
    if ("href" in item) {
      return item;
    }

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
