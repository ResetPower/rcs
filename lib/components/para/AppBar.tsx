import { ReactNode } from "react";

export function AppBar(props: {
  children: ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div className={`rcs-appbar text-white ${props.className}`}>
      {props.children}
    </div>
  );
}

export function AppBarTitle(props: { children: string }): JSX.Element {
  return <div className="rcs-appbar-title">{props.children}</div>;
}
