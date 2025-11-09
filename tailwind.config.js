/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        black: '#000000',
        'depth-1': '#0B0B0C',
        'depth-2': '#111111',
        'ink-primary': '#F5F5F7',
        'ink-secondary': '#B9BBC1',
        'ink-muted': '#8A8E96',
        'accent-blue': '#4D7CFE',
        'accent-magenta': '#D45CFF',
        'accent-lavender': '#A68AFF',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at center, #111111, #000000)',
      },
    },
  },
  plugins: [],
};
