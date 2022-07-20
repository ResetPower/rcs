import { ReactNode } from "react";
import { Fn } from "../../utils";

export function Badge(props: {
  children: ReactNode;
  variant?:
    | "default"
    | "dark"
    | "red"
    | "green"
    | "yellow"
    | "indigo"
    | "purple"
    | "pink";
  className?: string;
  larger?: boolean;
  icon?: boolean;
  onClick?: Fn;
}) {
  const colorMap = {
    default: "bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800",
    dark: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
    red: "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900",
    green: "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900",
    yellow:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900",
    indigo:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900",
    purple:
      "bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900",
    pink: "bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900",
  };

  return (
    <div
      className={`select-none font-medium ${
        props.icon ? "rounded-full p-2" : "rounded mr-2 px-2.5 py-0.5"
      } ${props.larger ? "text-sm" : "text-xs"} ${
        colorMap[props.variant ?? "default"]
      } ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
}

export function BadgeButton(props: {
  children: ReactNode;
  className?: string;
  larger?: boolean;
  icon?: boolean;
  onClick?: Fn;
}) {
  return (
    <Badge
      className={`cursor-pointer flex items-center hover:bg-blue-200 dark:hover:bg-blue-300 active:bg-blue-300 dark:active:bg-blue-400 transition-colors ${props.className}`}
      variant="default"
      larger={props.larger}
      icon={props.icon}
      onClick={props.onClick}
    >
      {props.children}
    </Badge>
  );
}
