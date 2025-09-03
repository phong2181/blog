/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  screens: {
    ipad: { min: "750px", max: "834px" }, // iPad mini & Air
  },
  plugins: [],
};
