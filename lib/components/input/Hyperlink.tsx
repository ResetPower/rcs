import { ReactNode } from "react";
import { Fn } from "../../utils";

export function Hyperlink(props: {
  className?: string;
  onClick?: Fn;
  children?: ReactNode;
  paddingX?: boolean;
}): JSX.Element {
  return (
    <span
      className={`rcs-lnk ${props.paddingX && "px-2"} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </span>
  );
}
