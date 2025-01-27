import clsx from "clsx";

type ButtonType = {
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
  target?: string;
  children: any;
};

const Button: React.FC<ButtonType> = ({
  href,
  variant = "primary",
  className: additionalClasses,
  target = "_self",
  children,
}) => {
  return (
    <a
      className={clsx(
        "py-2 px-6 rounded-full w-fit min-w-40 text-center hover:no-underline font-semibold font-head",
        variant === "primary"
          ? "bg-primary text-white hover:bg-primaryDark"
          : "bg-transparent text-primary hover:bg-base-100 dark:hover:bg-base-800",
        additionalClasses,
      )}
      href={href}
      target={target}
    >
      {children}
    </a>
  );
};

export default Button;
