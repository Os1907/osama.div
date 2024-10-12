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
        main:"#040615",
        main2:"#0b2142"
      },
      animation: {
        opacity: "opacity 5s ease-in-out infinite", 
        flip: "flip 6s infinite steps(2, end)",
        rotate: "rotate 3s linear infinite both",
        border: 'border 6s ease-in-out infinite',
        width: 'width 6s ease-in infinite'
      },
      keyframes: {
        opacity: {
          '0%': {
            opacity: "1",
          },
          '50%': {
            opacity: "0.5"
          },
          '75%': {
            opacity: "0"
          },
          '100%': {
            opacity: "1"
          },
        },
        flip: {
          to: {
            transform: "rotate(360deg)",
          },
        },
        rotate: {
          to: {
            transform: "rotate(90deg)",
          },
        },
        border: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        width:{
          '0%': { width: '0px' },
          '50%': { width: '50px' },
          '75%': { width: '75px' },
          '100%': { width: '128px' },
        }
      },
    },
  },
  plugins: [],
};
export default config;
