import { ReactNode } from "react";

export function ScrollWrapper(props: {
  children: ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div
      className={`flex flex-col ${props.className}`}
      style={{ height: "calc(100vh)" }}
    >
      {props.children}
    </div>
  );
}

export function ScrollView(props: {
  children: ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div className={`overflow-auto group rcs-scroll ${props.className}`}>
      {props.children}
    </div>
  );
}
