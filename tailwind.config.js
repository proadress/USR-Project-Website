/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 'media' 或 'class'，根據你的需求選擇
  content: [
    './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
    './components/**/*.{js,jsx,ts,tsx,md,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,jsx,ts,tsx,md,mdx}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
}