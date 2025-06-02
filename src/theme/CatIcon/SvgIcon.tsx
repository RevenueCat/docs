import { FC } from "react";

export interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
}

// Define a simple SvgIcon component
export const SvgIcon: FC<SvgIconProps> = ({
  children,
  ...props
}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}>
      {children}
    </svg>
  );
};
