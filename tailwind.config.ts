import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        backgroundColor:"#252B42",
        mainColor:"#23A6F0",
        Card: "#E74040",
        cardLogoFirst: "#FFDCD1",
        cardLogoSecond: "#B9EAA8"
      },
    },
  },
  plugins: [],
};
export default config;
