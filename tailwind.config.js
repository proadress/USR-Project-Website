/** @type {import('tailwindcss').Config} */
export const darkMode = 'class';
export const content = [
  './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
  './components/**/*.{js,jsx,ts,tsx,md,mdx}',

  // Or if using `src` directory:
  './src/**/*.{js,jsx,ts,tsx,md,mdx}'
];
export const theme = {
  extend: {},
  // other theme configurations...
};
export const plugins = [require("daisyui")];