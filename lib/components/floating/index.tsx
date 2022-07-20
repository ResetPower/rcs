import { Placement, shift, useFloating } from "@floating-ui/react-dom";
import { ReactNode, useCallback, useEffect, useState } from "react";

export type AccessibleNode =
  | ReactNode
  | ((open: boolean, setOpen: (open: boolean) => unknown) => ReactNode);

export function accessNode(
  accessible: AccessibleNode,
  open: boolean,
  setOpen: (open: boolean) => unknown
): ReactNode {
  return accessible instanceof Function
    ? accessible(open, setOpen)
    : accessible;
}

export function FloatingView(props: {
  opener: AccessibleNode;
  children: AccessibleNode;
  openerClassName?: string;
  className?: string;
  placement?: Placement;
  padding?: number;
}): JSX.Element {
  const [show, setShow] = useState(false);
  const { x, y, refs, reference, floating, strategy } =
    useFloating<HTMLElement>({
      placement: props.placement ?? "bottom",
      middleware: [
        shift(props.padding ? { padding: props.padding } : undefined),
      ],
    });

  const onDocumentClick = useCallback(
    (event: Event) => {
      if (
        !refs.reference.current?.contains(event.target as Node) &&
        !refs.floating.current?.contains(event.target as Node)
      ) {
        setShow(false);
      }
    },
    [refs]
  );

  useEffect(
    () =>
      (show ? document.addEventListener : document.removeEventListener)(
        "click",
        onDocumentClick,
        false
      ),
    [show]
  );

  return (
    <>
      <div
        className={`inline-block ${props.openerClassName}`}
        onClick={() => setShow((show) => !show)}
        ref={reference}
      >
        {accessNode(props.opener, show, setShow)}
      </div>
      {show && (
        <div
          className={`bg-card text-contrast rounded-md shadow-md z-20 ${props.className}`}
          ref={floating}
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
          }}
        >
          {accessNode(props.children, show, setShow)}
        </div>
      )}
    </>
  );
}

export * from "./menu";
export * from "./select";
