import { IconBase, type IconProps } from "./IconBase";

const Menu = (props: IconProps) => {
  return (
    <IconBase {...props}>
      <path d="M4 5h16" />
      <path d="M4 12h16" />
      <path d="M4 19h16" />
    </IconBase>
  );
};

export default Menu;
