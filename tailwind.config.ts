import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')

export default {
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
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        blue: colors.blue,  
        pink: colors.pink,
        purple: colors.purple,
        red: colors.red,
        green: colors.green,
        'pink-logo': '#e32261'
      },
    },
  },
  plugins: [],
} satisfies Config;
