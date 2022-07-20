import { ReactNode, useState } from "react";

export function Tooltip(props: {
  children: ReactNode;
  text: string;
}): JSX.Element {
  const [show, setShow] = useState(false);

  return (
    <>
      <div
        className="inline-block relative"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {props.children}
      </div>
      {show && (
        <div className="bg-card absolute text-xs shadow-md text-contrast rounded-md px-2 py-1">
          {props.text}
        </div>
      )}
    </>
  );
}
