import { ReactNode, ReactSVGElement } from "react";
import React from "react";

// TypeScript definitions for sidebar items
export interface SidebarItemBase {
  type: string;
}

export interface DocItem extends SidebarItemBase {
  type: "doc";
  id: string;
}

export interface LinkItem extends SidebarItemBase {
  type: "link";
  label: string;
  href: string;
}

export interface CategoryItem extends SidebarItemBase {
  type: "category";
  label: string;
  collapsible: boolean;
  customProps?: {
    iconName?: string;
    iconColor?: string;
  };
  link?: {
    type: string;
    id?: string;
    title?: string;
    slug?: string;
    description?: string;
  };
  items: (DocItem | LinkItem | CategoryItem)[];
}

export interface IndexConfig {
  title: string;
  link: string;
  description?: string;
}

export interface CategoryConfig {
  label: string;
  iconName?: string;
  iconColor?: string;
  itemsPathPrefix?: string;
  items: any[];
}

export interface SubCategoryConfig {
  label: string;
  slug?: string;
  itemsPathPrefix?: string;
  items: any[];
  index?: IndexConfig;
}

export interface PageConfig {
  slug: string;
}

export interface LinkConfig {
  label: string;
  slug: string;
}

const buildItem = (item: any, pagePrefix?: string): any => {
  let prefix = pagePrefix || "";
  if (item.type === "category") {
    let object = {
      ...item,
      items: item.items.map((subItem: any) =>
        buildItem(subItem, prefix + (subItem.itemsPrefix || "")),
      ),
    };

    if (item.link?.id) {
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

export const Category = ({
  label,
  iconName,
  iconColor,
  itemsPathPrefix,
  items,
}: CategoryConfig): CategoryItem => {
  return {
    type: "category",
    label,
    collapsible: false,
    customProps: { iconName, iconColor },
    items: items.map((item) => buildItem(item, itemsPathPrefix)),
  };
};

export const SubCategory = ({
  label,
  slug,
  itemsPathPrefix,
  items,
  index,
}: SubCategoryConfig): CategoryItem => ({
  type: "category",
  label,
  collapsible: true,
  ...(slug && { link: { type: "doc", id: slug } }),
  ...(index && {
    link: {
      type: "generated-index",
      title: index.title,
      slug: index.link + "-index",
      ...(index.description && { description: index.description }),
    },
  }),
  items: items.map((item) => buildItem(item, itemsPathPrefix)),
});

export const Page = ({ slug }: PageConfig): DocItem => ({
  type: "doc",
  id: slug,
});

export const Link = ({ label, slug }: LinkConfig): LinkItem => ({
  type: "link",
  label: `${label} →`,
  href: slug,
});

export const GeneratedIndex = ({
  title,
  link,
  description,
}: IndexConfig): IndexConfig => ({
  title,
  link,
  description,
});
