import clsx from "clsx";
import styles from "./styles.module.css";

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
        "button py-2 px-6 rounded-full w-fit min-w-40 text-center hover:no-underline font-semibold font-head",
        variant === "primary"
          ? styles["button-primary"]
          : styles["button-secondary"],
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
