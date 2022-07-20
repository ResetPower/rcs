import { MdKeyboardArrowDown } from "react-icons/md";
import { FloatingView } from ".";
import { Button } from "../input";
import { ListItem } from "../list";
import { Label } from "../para";

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
    <div className={props.className}>
      {props.label && <Label>{props.label}</Label>}
      <FloatingView
        className="py-2"
        openerClassName="bg-card rounded-md"
        opener={(open) => (
          <Button active={open} className="m-0" variant="outlined">
            {props.options.find((opt) => opt.value === props.value)?.text ??
              "Not Selected"}
            <MdKeyboardArrowDown size="1.5em" />
          </Button>
        )}
      >
        {(_, setOpen) =>
          props.options.map((value, index) => (
            <ListItem
              className={value.className}
              active={value.value === props.value}
              onClick={() => {
                props.onChange(value.value);
                setOpen(false);
              }}
              key={index}
              dependent
            >
              {value.text}
            </ListItem>
          ))
        }
      </FloatingView>
    </div>
  );
}
