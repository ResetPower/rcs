import { ReactNode } from "react";
import { Fn } from "../../utils";

export function Hyperlink(props: {
  className?: string;
  onClick?: Fn;
  children?: ReactNode;
  paddingX?: boolean;
  button?: boolean;
}): JSX.Element {
  return (
    <span
      className={`text-blue-500 hover:text-blue-600 cursor-pointer select-none ${
        props.button
          ? "active:text-blue-700 transition-colors"
          : "hover:underline"
      } ${props.paddingX && "px-2"} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </span>
  );
}
