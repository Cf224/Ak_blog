/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0A3D62', // Deep Teal
        secondary: '#E0A458', // Golden Yellow
        textPrimary: '#F1FAEE', // Soft White
        textSecondary: '#A8DADC', // Light Gray
        dark: '#1B263B', // Dark Teal
      },
    },
  },
  plugins: [],
};