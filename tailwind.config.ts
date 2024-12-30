import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // brand: {
        //   "900": "#402800",
        //   "800": "#7F5000",
        //   "700": "#BB7602",
        //   "600": "#DD8D06",
        //   "500": "#F59E0B",
        //   "400": "#F8B23B",
        //   "300": "#FCCE80",
        //   "200": "#FDE9C6",
        //   "100": "#FFF3DE",
        // },
        brand: {
          "900": "#2A1100",
          "800": "#622901",
          "700": "#913F05",
          "600": "#D35B07",
          "500": "#F97316",
          "400": "#FD9247",
          "300": "#FDB07B",
          "200": "#FFCCA9",
          "100": "#FFE8D9",
        },
        darkMode: {
          "900": "#121212",
          "800": "#1A1A1A",
          "700": "#232323",
          "600": "#2D2D2D",
          "500": "#383838",
          "400": "#444444",
          "300": "#555555",
          "200": "#6E6E6E",
          "100": "#808080",
        },
        snow: {
          "500": "#E0E0E0",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        rubik: ["var(--font-rubik)"],
      },
    },
  },
  plugins: [],
};
export default config;
