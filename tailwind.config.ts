import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1c1b19",
        paper: "#f7f4ef",
        surface: "#ffffff",
        slate: "#605c55",
        rule: "#e4dfd5",
        accent: {
          DEFAULT: "#0f6e56",
          strong: "#0b5642",
          soft: "#e7f1ec",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
