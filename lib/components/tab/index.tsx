import {
  createContext,
  MutableRefObject,
  ReactNode,
  useContext,
  useState,
} from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

export interface TabContext {
  value: number;
  orientation: "vertical" | "horizontal";
  animate: boolean;
  setValue: (value: number) => void;
}

const TabContext = createContext<TabContext>({
  value: 0,
  orientation: "vertical",
  animate: true,
  setValue: () => {},
});

export function TabController(props: {
  children: ReactNode;
  className?: string;
  animate?: boolean;
  orientation: "vertical" | "horizontal";
  contextRef?: MutableRefObject<TabContext | undefined>;
}): JSX.Element {
  const [value, setValue] = useState(0);
  const context: TabContext = {
    value,
    setValue: (value) => {
      setValue(value);
    },
    animate: props.animate ?? true,
    orientation: props.orientation,
  };
  props.contextRef && (props.contextRef.current = context);

  return (
    <TabContext.Provider value={context}>
      <div
        className={`flex ${
          props.orientation === "vertical" ? "flex-row" : "flex-col"
        } overflow-hidden ${props.className ?? ""}`}
      >
        {props.children}
      </div>
    </TabContext.Provider>
  );
}

export function TabBar(props: {
  children: JSX.Element[];
  className?: string;
}): JSX.Element {
  const { orientation } = useContext(TabContext);

  return (
    <div
      className={`rcs-tab-bar ${
        orientation === "horizontal"
          ? "rcs-tab-bar-horizontal"
          : "rcs-tab-bar-vertical"
      } ${props.className ?? ""}`}
    >
      {props.children}
    </div>
  );
}

export function TabBarItem(props: {
  children: ReactNode;
  value: number;
}): JSX.Element {
  const { value, setValue } = useContext(TabContext);

  return (
    <button
      className={`rcs-tab-bar-item ${
        props.value === value ? "rcs-tab-bar-item-selected" : "text-contrast"
      } whitespace-nowrap`}
      onClick={() => setValue(props.value)}
    >
      {props.children}
    </button>
  );
}

export function TabBody(props: {
  children: JSX.Element[];
  className?: string;
}): JSX.Element {
  const { value, animate, orientation } = useContext(TabContext);

  return (
    <div className={`rcs-tab-body ${props.className ?? ""}`}>
      {animate ? (
        <SwitchTransition>
          <CSSTransition
            key={value}
            timeout={150}
            classNames={`tab-${orientation}`}
          >
            {props.children[value]}
          </CSSTransition>
        </SwitchTransition>
      ) : (
        props.children[value]
      )}
    </div>
  );
}
