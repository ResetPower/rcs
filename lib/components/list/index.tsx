import { ReactNode } from "react";
import { Fn } from "../../utils";

export function List(props: {
  children: ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div className={`space-y-1 ${props.className ?? ""}`}>{props.children}</div>
  );
}

export function ListItem(props: {
  children: ReactNode;
  className?: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: Fn;
  dependent?: boolean;
}): JSX.Element {
  return (
    <div
      className={`flex rcs-li rcs-hover ${
        props.active ? "rcs-li-active" : ""
      }  ${props.disabled && "cursor-not-allowed"} ${
        !props.dependent && "rcs-li-independent"
      }  ${props.className ?? ""}`}
      onClick={props.disabled ? undefined : props.onClick}
    >
      {props.children}
    </div>
  );
}

export function ListItemText(props: {
  primary?: string;
  secondary?: string;
  className?: string;
  longSecondary?: boolean;
  expand?: boolean;
}): JSX.Element {
  return (
    <div
      className={`${props.expand ? "flex-grow" : ""} ${props.className ?? ""}`}
    >
      <p>{props.primary ?? ""}</p>
      <p
        className={`text-shallow ${
          props.longSecondary ? "overflow-ellipsis break-all" : ""
        }`}
        title={props.longSecondary ? props.secondary : undefined}
      >
        {props.secondary ?? ""}
      </p>
    </div>
  );
}
