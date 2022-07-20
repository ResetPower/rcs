import { ReactNode } from "react";
import { Fn } from "../../utils";

export function Button(props: {
  children: ReactNode;
  active?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?: Fn;
  variant?: "contained" | "text" | "pill" | "outlined";
}) {
  return (
    <button
      disabled={props.disabled ?? false}
      className={`rcs-btn ${
        props.variant === "contained"
          ? "rcs-btn-contained"
          : props.variant === "pill"
          ? "rcs-btn-contained rounded-full"
          : `rcs-btn-text dark:rcs-btn-text rcs-hover ${
              props.variant === "outlined" && "border border-divider shadow-sm"
            }`
      } ${props.active && "rcs-hover-active"} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export function IconButton(props: {
  children: ReactNode;
  className?: string;
  onClick?: Fn;
  active?: boolean;
}): JSX.Element {
  return (
    <div
      className={`rcs-icon-btn rcs-hover ${
        props.active && "rcs-hover-active"
      } ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
}
