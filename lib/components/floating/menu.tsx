import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { FloatingView } from ".";
import { Fn } from "../../utils";
import { ListItem } from "../list";

export interface MenuItem {
  text: string;
  icon?: ReactNode;
  className?: string;
  action?: Fn;
}

export function Menu(props: {
  children: ReactNode | ((open: boolean) => ReactNode);
  items: MenuItem[];
  className?: string;
}): JSX.Element {
  return (
    <FloatingView opener={props.children}>
      {props.items.map((value, index) => (
        <ListItem
          className={value.className}
          key={index}
          onClick={value.action}
          dependent
        >
          {value.icon} <p className="flex-grow">{value.text}</p>
        </ListItem>
      ))}
    </FloatingView>
  );
}
