
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}","./node_modules/flowbite/**/*.js",  
  "./node_modules/flowbite-icons/**/*.js","./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: '#4CAF50',
        secondary:'#fec624',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      keyframes: {
        wave: {
          'from': { backgroundPositionX: '0' },
          'to': { backgroundPositionX: '200%' },
        },
        slideInLeft: {
          'from': { transform: 'translateX(-100%)', opacity: '0' },
          'to': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          'from': {transform: 'translateX(100%)', opacity: '0' },
          'to': {transform: 'translateX(0)', opacity: '1' },
        },
        slideTop: {
          'from': {transform: 'translateY(100%)', opacity: '0' },
          'to': {transform: 'translateY(0)', opacity: '1' },
        },
        slideBottom: {
          'from': {transform: 'translateY(-100%)', opacity: '0' },
          'to': {transform: 'translateY(0)', opacity: '1' },
        },
        zoomIn: {
          'from': {transform: 'scale(0.5)', opacity: '0'},
          'to': {transform: 'scale(1)', opacity: '1'},
        },
        appear: {
          'from': {opacity: '0'},
          'to': {opacity: '1'},
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
        }
    },
      animation: {
        wave: 'wave 2s linear infinite', 
        spin_slow: 'spin 6s linear infinite', 
        slideInLeft: 'slideInLeft 1s ease-out forwards',
        slideInRight: 'slideInRight 1s ease-out forwards',
        slideTop: 'slideTop 1s ease-out forwards',
        slideBottom:'slideBottom 1s ease-out forwards',
        zoomIn: 'zoomIn 1s ease-out forwards',
        appear: 'appear 2s ease-out',
        shake: 'shake 0.5s ease-in-out',

      },

      
      
      
    },
  },
  plugins: [
    
  ],
};

