/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'slow-drift': 'drift 20s ease-in-out infinite',
        'tilt': 'tilt 10s infinite linear',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'scale(1.1) translate(0, 0)' },
          '25%': { transform: 'scale(1.1) translate(1%, -1%)' },
          '50%': { transform: 'scale(1.1) translate(0, 1%)' },
          '75%': { transform: 'scale(1.1) translate(-1%, 0)' },
        },
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(0.5deg)' },
          '75%': { transform: 'rotate(-0.5deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 1 },
        },
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
        'cyber-grid': 'linear-gradient(transparent 0%, rgba(255,107,43,0.1) 100%)',
      },
    },
  },
  plugins: [],
};