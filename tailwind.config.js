/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Soft dark theme colors
        soft: {
          black: '#121212',      // Main background
          darker: '#181818',     // Card background
          dark: '#1E1E1E',      // Secondary background
          gray: {
            400: '#A3A3A3',     // Secondary text
            300: '#D4D4D4',     // Primary text
            600: '#666666',     // Borders
            700: '#404040',     // Card borders
            800: '#262626',     // Hover states
          }
        }
      }
    },
  },
  plugins: [],
};
