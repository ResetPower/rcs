import { rcsDark, rcsLight, RCSPalette, RCSTheme } from ".";
import { access, Accessible } from "../utils";

const ss = document.documentElement.style;
const html = document.querySelector("html");
const isDark = window.matchMedia("(prefers-color-scheme: dark)");

export type ThemeChangeListener = (dark: boolean) => unknown;
export type ThemeList = { light: RCSTheme; dark: RCSTheme };
export type ThemeType = "light" | "dark";

export class ThemeManager {
  mode?: ThemeType;
  followOS: Accessible<boolean>;
  onChange?: ThemeChangeListener;
  themeList: ThemeList;
  constructor(
    followOS: Accessible<boolean>,
    onChange?: ThemeChangeListener,
    themeList?: ThemeList
  ) {
    this.followOS = followOS;
    this.onChange = onChange;
    this.themeList = themeList ?? { light: rcsLight, dark: rcsDark };
    if (followOS) {
      this.responseSystemChange();
    }
    // listen to system theme changes
    isDark.addEventListener("change", () => this.responseSystemChange());
  }
  turn(mode: "light" | "dark"): void {
    this.apply(this.themeList[mode]);
  }
  apply(theme: RCSTheme): void {
    if (theme.type === "dark") {
      html && !html.classList.contains("dark") && html.classList.add("dark");
      this.mode = "dark";
    } else {
      html && html.classList.contains("dark") && html.classList.remove("dark");
      this.mode = "light";
    }
    // set values of css variables
    const palette = theme.palette;
    for (const k in palette) {
      ss.setProperty(`--rcs-${k}-color`, palette[k as keyof RCSPalette]);
    }
  }
  responseSystemChange(): void {
    if (access(this.followOS) && this.themeList) {
      const prefersDarkMode = isDark.matches;
      this.apply(prefersDarkMode ? this.themeList.dark : this.themeList.light);
      if (this.onChange) {
        this.onChange(prefersDarkMode);
      }
    }
  }
}
