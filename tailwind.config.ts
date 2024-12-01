import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xs": "300px",
      xs: "400px",
      sm: "575px",
      md: "812px",
      bgtab: "950px",
      lg: "1080px",
      xl: "1440px",
      mxl: "1200px",
      "2xl": "1600px",
      "3xl": "2000px"
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
