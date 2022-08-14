import { Placement, shift, useFloating } from "@floating-ui/react-dom";
import { ReactNode } from "react";

export function Tooltip(props: {
  children: ReactNode;
  text: string;
  placement?: Placement;
  className?: string;
}): JSX.Element {
  const { x, y, reference, floating, strategy } = useFloating<HTMLElement>({
    placement: props.placement ?? "bottom",
    middleware: [shift()],
  });

  return (
    <>
      <div className="group inline-block" ref={reference}>
        {props.children}
        <div
          className={`bg-card text-contrast rounded p-1 shadow-md z-20 invisible group-hover:visible select-none ${props.className}`}
          ref={floating}
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
          }}
        >
          {props.text}
        </div>
      </div>
    </>
  );
}
