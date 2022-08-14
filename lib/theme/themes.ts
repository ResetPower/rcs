import { RCSTheme } from ".";
import { twColors as colors } from "./tw_colors";

export const rcsLight: RCSTheme = {
  name: "RCS Light",
  type: "light",
  palette: {
    background: colors.white,
    primary: colors.blue["500"],
    secondary: colors.pink["500"],
    shallow: colors.gray["400"],
    divider: colors.gray["200"],
    card: colors.gray["50"],
    contrast: colors.black,
    danger: colors.red["500"],
  },
};

export const rcsDark: RCSTheme = {
  name: "RCS Dark",
  type: "dark",
  palette: {
    background: colors.zinc["800"],
    primary: colors.indigo["600"],
    secondary: colors.pink["400"],
    shallow: colors.slate["400"],
    divider: colors.gray["600"],
    card: colors.zinc["700"],
    contrast: colors.white,
    danger: colors.red["400"],
  },
};
