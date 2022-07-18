import { ReactNode } from "react";

export function Booth(props: {
  className?: string;
  flex?: boolean;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className={`p-7 m-7 border border-divider rounded-md space-y-3`}>
      <p className="font-medium">{props.title}</p>
      <div className={`${props.flex && "flex"} ${props.className}`}>
        {props.children}
      </div>
    </div>
  );
}
