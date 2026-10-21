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
        // Website Builds (/websites): its own palette, matching the brochure.
        wb: {
          ink: "#14171F",
          body: "#2B303B",
          muted: "#4A5160",
          line: "#D9DEE8",
          paper: "#FBFBFD",
          tint: "#EEF2FF",
          blue: { DEFAULT: "#2346D6", strong: "#1A33A0" },
        },
      },
      fontFamily: {
        wb: ["var(--font-bricolage)", "system-ui", "sans-serif"],
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
