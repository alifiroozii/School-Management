import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        pinkLight: "#fda4c4",
        pinkDark: "#f34178",
        blueLight: "#c1defc",
        blueDark: "#65acf5",
        PurpleLight: "#cec1f1",
        PurpleDark: "#ad94e5",
        pinkCustom:"#F86C6D"
      },
    },
  },
  plugins: [],
};
export default config;
