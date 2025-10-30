import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        'page-light': '#fef3c7',  // Amber 50
        'page-dark': '#451a03',   // Amber 950
        'brand-light': '#fffbeb', // Amber 100
        'brand-dark': '#78350f',  // Amber 900
      }
    },
  },
  plugins: [],
};

export default config;