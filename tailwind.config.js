import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
    

      animation: {
        'orbit-normal': 'orbit 10s linear infinite',
        'orbit-reverse': 'orbit 10s linear infinite reverse',
      },
      keyframes: {
        orbit: {
          '0%': { transform: 'translateX(0) rotate(0)' },
          '100%': { transform: 'translateX(-200px) rotate(360deg)' },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
