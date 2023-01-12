import { call, Fn } from "../../utils";

export function TextField(props: {
  label?: string;
  placeholder?: string;
  icon?: JSX.Element;
  type?: string;
  helperText?: string;
  error?: boolean;
  trailing?: JSX.Element;
  value?: string;
  className?: string;
  fieldClassName?: string;
  onChange?: (ev: string) => unknown;
  min?: number;
  max?: number;
  maxLength?: number;
  noSpinButton?: boolean;
  required?: boolean;
  disabled?: boolean;
  onEnter?: Fn;
}): JSX.Element {
  return (
    <div className={props.className}>
      {props.label && (
        <label className="rcs-label">
          {props.label}{" "}
          {props.required && <span className="text-danger">*</span>}
        </label>
      )}
      <div className={`flex ${props.fieldClassName ?? ""}`}>
        {props.icon && <div className="rcs-tf-icon">{props.icon}</div>}
        <input
          spellCheck="false"
          maxLength={props.maxLength}
          min={props.min}
          max={props.max}
          type={props.type}
          value={props.value}
          placeholder={props.placeholder}
          disabled={props.disabled}
          onKeyDown={
            props.onEnter
              ? (event) => {
                  if (event.key === "Enter") {
                    call(props.onEnter);
                  }
                }
              : undefined
          }
          onChange={(ev) => call(props.onChange, ev.target.value)}
          className={`${
            props.icon && props.trailing
              ? "rounded-none"
              : props.icon
              ? "rounded-r-md"
              : props.trailing
              ? "rounded-l-md"
              : "rounded-md"
          } rcs-tf z-10 ${
            props.error
              ? "border-red-400 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
              : "focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:border-blue-500"
          } ${props.noSpinButton ? "no-spin-button" : ""}`}
        />
        {props.trailing && (
          <div className="rcs-tf-trailing">{props.trailing}</div>
        )}
      </div>
      {(props.helperText || props.maxLength) && (
        <div className="flex">
          <p
            className={`rcs-helper-text ${
              props.error ? "rcs-helper-text-error" : ""
            } flex-grow`}
          >
            {props.helperText}
          </p>
          {props.maxLength && (
            <p className="text-shallow text-sm">
              {props.value?.length}/{props.maxLength}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export function TinyTextField(props: {
  value?: string;
  onChange?: (ev: string) => unknown;
  placeholder?: string;
  className?: string;
  onEnter?: Fn;
}): JSX.Element {
  return (
    <input
      value={props.value}
      onKeyPress={(ev) => ev.key === "Enter" && call(props.onEnter)}
      onChange={(ev) => call(props.onChange, ev.target.value)}
      placeholder={props.placeholder}
      className={`rcs-tiny-tf ${props.className}`}
    />
  );
}
