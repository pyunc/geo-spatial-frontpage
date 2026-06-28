import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#13201b",
        forest: "#1c6a4a",
        mint: "#7be0b8",
        aqua: "#7ccbd3",
        coral: "#e87252",
        cream: "#f7f4ec",
        paper: "#fffdf8",
      },
      boxShadow: {
        soft: "0 18px 70px rgba(17, 31, 26, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
