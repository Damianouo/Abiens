import { cn } from "@/utils";

export interface IconProps {
  className?: string;
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

interface IconBaseProps extends IconProps {
  children: React.ReactNode;
  viewBox?: string;
}

export const IconBase = ({
  className,
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  viewBox = "0 0 24 24",
  children,
}: IconBaseProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("icon", className)}
    >
      {children}
    </svg>
  );
};
