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
        "white": "#E5E5E5",
        "gray-700": "#212427",
        "gray-100": "#ABABAB",
        "gray-300": "#4D4D4D",
      }
    },
  },
  plugins: [],
};
export default config;
