import type { Config } from "tailwindcss";

const config: Config = {
  variants: {
    extend: {
      padding: ["hover"],
    },
  },
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
        "first-color": "#FEFEFE",
        "second-color": "#042C54",
        "third-color": "#1F2731",
        "fourth-color": "#1A659B",
        "fifth-color": "#2D9CAA",
      },
      keyframes: {
        showSideBar: {
          from: { opacity: "0", transform: "translatex(80px)" },
          to: { oapcity: "1", transform: "translatex(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
