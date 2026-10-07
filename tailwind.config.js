/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF6F0',
        primary: {
          DEFAULT: '#E68A33', // The orange color
          hover: '#D07B2C',
        },
        card: '#FFFFFF',
        text: {
          main: '#2C2A29',
          muted: '#827F7C',
        },
        success: {
          DEFAULT: '#27AE60',
          bg: '#E8F5E9',
        },
        danger: {
          DEFAULT: '#EB5757',
          bg: '#FDEDED',
        },
        warning: {
          DEFAULT: '#F2C94C',
          bg: '#FFF9E6',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.03)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-simple': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'fade-out-simple': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        }
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'fade-in-simple': 'fade-in-simple 0.8s ease-out forwards',
        'slide-up': 'slide-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
        'slide-down': 'slide-down 0.4s cubic-bezier(0.8, 0, 0.8, 0.2) forwards',
        'fade-out-simple': 'fade-out-simple 0.4s ease-in forwards',
      }
    },
  },
  plugins: [],
}
