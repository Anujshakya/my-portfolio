/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  darkMode: 'class',
  daisyui: {
    themes: ['light', 'dark'],
  },
  safelist: [
    // Light theme gradients
    'from-blue-400/80',
    'to-cyan-400/80',
    'from-emerald-400/80',
    'to-teal-400/80',
    'from-orange-400/80',
    'to-amber-400/80',

    // Dark theme gradients
    'dark:from-purple-600/80',
    'dark:to-indigo-600/80',
    'dark:from-emerald-700/80',
    'dark:to-teal-700/80',
    'dark:from-orange-600/80',
    'dark:to-amber-600/80',
  ],
}
