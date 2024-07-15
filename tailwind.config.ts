import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          normal: "#F9CE35",
          dark: "#FFA904"
        },
        secondary: "#FEEED1",
        fill: {
          light: "#FFFFFF",
          dark: "#212121"
        },
        special: "#F06629"
      }
    },
  },
  plugins: [require("daisyui")],
};
export default config;
