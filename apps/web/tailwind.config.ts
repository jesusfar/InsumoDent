import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--primary))',
        'primary-dark': 'hsl(var(--primary-dark))',
        'background-dark': 'hsl(var(--background-dark))',
        success: {
          500: '#2E7D32',
        },
      },
      fontFamily: {
        display: ['Figtree', 'sans-serif'],
        sans: ['Figtree', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeInSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
