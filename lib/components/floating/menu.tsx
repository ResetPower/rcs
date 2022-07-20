import { ReactNode } from "react";
import { AccessibleNode, FloatingView } from ".";
import { call, Fn } from "../../utils";
import { ListItem } from "../list";

export interface MenuItem {
  text: string;
  icon?: ReactNode;
  className?: string;
  action?: Fn;
}

export function Menu(props: {
  children: AccessibleNode;
  items: MenuItem[];
  padding?: number;
}): JSX.Element {
  return (
    <FloatingView
      padding={props.padding}
      className="py-2"
      opener={props.children}
    >
      {(_, setOpen) =>
        props.items.map((value, index) => (
          <ListItem
            className={value.className}
            key={index}
            onClick={() => {
              call(value.action);
              setOpen(false);
            }}
            dependent
          >
            {value.icon} <p className="flex-grow">{value.text}</p>
          </ListItem>
        ))
      }
    </FloatingView>
  );
}
