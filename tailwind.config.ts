import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      "password_visibility": "url('../assets/image/svg/password-visibility.svg')",
    },
    extend: {
      colors: {
        "gray-100": "#ABABAB",
        "gray-300": "#4D4D4D",
        "gray-500": "#282828",
        "gray-700": "#212427",
        "white": "#E5E5E5",
      }
    },
  },
  plugins: [],
};
export default config;
