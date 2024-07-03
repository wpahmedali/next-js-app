/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',

  ],
  theme: {
    screens: {
      xxs: '320px',

      xs: '375px',

      sm: '414px',

      md: '768px',

      lg: '1024px',

      xl: '1280px',

      'xxxs': '319px',

      '2xl': '1536px',

      '3xl': '1920px',
    },
    extend: {
      colors: {
        primary: '#fccf3a',
        primaryDark: '#000000',
        light: '#fff',
      },
    },
  },
  plugins: [
    [require("tw-elements/dist/plugin.cjs")],
   
  ],
};
