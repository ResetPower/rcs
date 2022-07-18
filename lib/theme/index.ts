export interface RCSPalette {
  background: string;
  primary: string;
  secondary: string;
  shallow: string;
  divider: string;
  card: string;
  contrast: string;
  danger: string;
}

export interface RCSTheme {
  name: string;
  type: "light" | "dark";
  palette: RCSPalette;
}

export * from "./tw_colors";
export * from "./manager";
export * from "./themes";
