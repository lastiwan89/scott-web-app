import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // colors
    colors: {
      yellow: {
        light: "#fff4df",
        dark: "#fcb72b",
      },
      grey: {
        bg: "#979797",
        snow: "#f2f5f9",
        light: "#e5ecf4",
        dimmed: "#939caa",
        dark: "#495567",
        darker: "#333A44",
      },
    },
    // typography
    fontFamily: {
      sans: ["var(--font-sans)"],
      mono: ["var(--font-mono)"],
    },
    fontSize: {
      56: ["56px", { lineHeight: "56px", letterSpacing: "-2.5px" }],
      48: ["48px", { lineHeight: "48px", letterSpacing: "-2.14px" }],
      40: ["40px", { lineHeight: "40px", letterSpacing: "-1.785px" }],
      32: ["32px", { lineHeight: "32px", letterSpacing: "-1.42px" }],
      24: ["24px", { lineHeight: "28px", letterSpacing: "-1.07px" }],
      20: ["20px", { lineHeight: "24px", letterSpacing: "-0.892px" }],
      18: ["18px", { lineHeight: "24px", letterSpacing: "-0.8px" }],
      15: ["15px", { lineHeight: "25px" }],
    },
    extend: {
      backgroundImage: {},
    },
  },
  plugins: [],
};
export default config;
