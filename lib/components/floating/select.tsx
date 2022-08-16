import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
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
  fullWidth?: boolean;
  placementTop?: boolean;
}): JSX.Element {
  return (
    <div className={props.className}>
      {props.label && <Label>{props.label}</Label>}
      <FloatingView
        placement={props.placementTop ? "top" : undefined}
        className="py-2"
        openerClassName={`bg-card rounded-md ${props.fullWidth && "w-full"}`}
        opener={(open) => (
          <Button
            active={open}
            className={`m-0 ${props.fullWidth && "w-full"}`}
            variant="outlined"
          >
            <p className="flex-grow text-start">
              {props.options.find((opt) => opt.value === props.value)?.text ??
                "Not Selected"}
            </p>
            <MdKeyboardArrowDown
              className={`${(props.placementTop ? !open : open) && "hidden"}`}
              size="1.5em"
            />
            <MdKeyboardArrowUp
              className={`${(props.placementTop ? open : !open) && "hidden"}`}
              size="1.5em"
            />
          </Button>
        )}
        sameWidth
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
