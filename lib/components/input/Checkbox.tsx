import { call } from "../../utils";

export function Checkbox(props: {
  className?: string;
  children: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}): JSX.Element {
  return (
    <div className="flex items-center">
      <div
        className={`rcs-cb ${props.checked && "bg-blue-600"}`}
        onClick={() => call(props.onChange, !props.checked)}
      >
        <svg
          className={`rcs-cb-svg ${!props.checked && "hidden"}`}
          viewBox="0 0 20 20"
        >
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      </div>
      <div className="select-none">{props.children}</div>
    </div>
  );
}
