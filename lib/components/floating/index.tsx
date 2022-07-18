import { ReactNode, useCallback, useEffect, useRef, useState } from "react";

export function FloatingView(props: {
  opener: ReactNode | ((open: boolean) => ReactNode);
  children: ReactNode;
  className?: string;
}): JSX.Element {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLElement>();

  const onDocumentClick = useCallback((event: MouseEvent) => {
    if (!ref.current?.contains(event.target as Node)) {
      setShow(false);
    }
  }, []);

  useEffect(() => {
    if (show) {
      document.addEventListener("click", onDocumentClick, false);
      return () =>
        document.removeEventListener("click", onDocumentClick, false);
    }
  }, [show]);

  return (
    <div className="relative">
      <div
        className="inline-block"
        ref={(node) => (ref.current = node ?? undefined)}
        onClick={() => setShow(!show)}
      >
        {props.opener instanceof Function ? props.opener(show) : props.opener}
      </div>
      {show && (
        <div
          className={`bg-card absolute py-2 rounded-md shadow-md z-20 ${props.className}`}
        >
          {props.children}
        </div>
      )}
    </div>
  );
}

export * from "./menu";
export * from "./select";
