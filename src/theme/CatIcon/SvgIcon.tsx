import { FC } from "react";

// Define SvgIconProps interface
export interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  sx?: React.CSSProperties | React.CSSProperties[];
  inheritViewBox?: boolean;
}

// Define a simple SvgIcon component
export const SvgIcon: FC<SvgIconProps> = ({
  children,
  sx = {},
  inheritViewBox,
  ...props
}) => {
  const style = Array.isArray(sx) ? Object.assign({}, ...sx) : sx;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={style} {...props}>
      {children}
    </svg>
  );
};
