
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: '#4CAF50',
        secondary:'#fec624',
      },
      fontFamily: {
       
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

