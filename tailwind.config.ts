import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "490px",
      sm: "640px",
      md: "768px",
      smd: "840px",
      xmd: "890px",
      lg: "1024px",
      xlg: "1170px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        main: "#db4444",
        default:'rgb(255, 255, 255);',
        primary:'rgb(245, 245, 245);'
      },
      boxShadow:{
        boxContact:'0px 1px 13px 0px rgba(0, 0, 0, 0.05);'
      },
      dropShadow: {
        custom: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      width: {
        '525': '525px',
      },
      margin: {
        '-75': '-75px',
      },
      content: {
        'custom-link': "/",
      },
    },
  },
  plugins: [],
};
export default config;
