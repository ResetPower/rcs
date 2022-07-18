import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { FloatingView } from ".";
import { Button } from "../input";
import { ListItem } from "../list";

export interface SelectOption<V> {
  value: V;
  text: string;
  className?: string;
}

export function Select<V>(props: {
  value: V;
  onChange: (value: V) => unknown;
  options: SelectOption<V>[];
  className?: string;
  label?: string;
  disabled?: boolean;
}): JSX.Element {
  return (
    <FloatingView
      opener={
        <Button variant="outlined">
          {props.options.find((opt) => opt.value === props.value)?.text ??
            "Not Selected"}
          <MdKeyboardArrowDown size="1.5em" />
        </Button>
      }
    >
      {props.options.map((value, index) => (
        <ListItem
          className={value.className}
          active={value.value === props.value}
          onClick={() => props.onChange(value.value)}
          key={index}
          dependent
        >
          {value.text}
        </ListItem>
      ))}
    </FloatingView>
  );
}
