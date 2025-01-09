const SmartLink = ({ children, href, ...restProps }) => {
  const isExternal =
    !href.includes("https://revenuecat.com/docs") &&
    !href.startsWith("/") &&
    !href.startsWith("#");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      {...restProps}
    >
      {children}
    </a>
  );
};

export default SmartLink;
