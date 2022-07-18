import { ReactNode } from "react";

export function Center(props: {
  children: ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div className={`grid place-items-center h-full ${props.className}`}>
      {props.children}
    </div>
  );
}
