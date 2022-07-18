# RCS

[![NPM](https://nodei.co/npm/@resetpower/rcs.png?mini)](https://npmjs.org/package/@resetpower/rcs)

ResetPower's Component Set

## Quick Start

Requirements: React 18.2.0 & Tailwindcss 3

- Install RCS by input `npm install @resetpower/rcs`
- Add RCS to your tailwind config (usually `tailwind.config.js`):

```diff
const colors = require("@resetpower/rcs/colors");

module.exports = {
  mode: "jit",
  darkMode: "media",
  content: [
    "./index.html",
    "./src/**/*.tsx",
+   "./node_modules/@resetpower/rcs/**/*.js"
  ],
  theme: {
    extend: {
+     colors
    },
  },
  plugins: [],
};
```

- Import RCS's CSS
- Apply a theme in the entrance of your app:

```tsx
import "@resetpower/rcs/styles";
import App from "./App";
import { ThemeManager, rcsLight } from "@resetpower/rcs";
import { render } from "react-dom";

const manager = new ThemeManager(false);
manager.apply(rcsLight);

render(<App />, document.getElementById("root"));
```

- Enjoy!

## Preview

- Clone the repository by `gh repo clone ResetPower/rcs`

- Start preview server by `npm run dev`

## LICENSE

[MIT LICENSE](/LICENSE)
