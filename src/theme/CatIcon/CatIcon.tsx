import useBaseUrl from "@docusaurus/useBaseUrl";
import { SvgIcon, SvgIconProps } from "./SvgIcon";
import { IconName } from "./types";
import { FC } from "react";

type CatIconProps = {
  name: IconName;
  size?: number;
  customColor?: string;
  customDetailsColor?: string;
} & SvgIconProps;

export const CatIcon: FC<CatIconProps> = ({
  name,
  customColor,
  customDetailsColor,
  size,
  ...props
}) => {
  // Size provides the highest level of specificity. Use it to override the icon
  // size for the startIcon or endIcon of a button. Otherwise, use fontSize.
  const sizeStyle = size ? { height: size, width: size } : {};

  const iconPath = useBaseUrl(`/icons/${name}.svg`);
  return (
    <SvgIcon style={sizeStyle} {...props}>
      <svg
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <use
          href={`${iconPath}#base`}
          fill={customColor ?? "var(--rc-blue-primary)"}
        />
        <use
          href={`${iconPath}#details`}
          fill={customDetailsColor ?? customColor ?? "var(--rc-blue-primary)"}
        />
      </svg>
    </SvgIcon>
  );
};
