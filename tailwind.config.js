/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#F5F3EE', // Paper
        surface: '#E8E4DD', // Off-white
        accent: '#E63B2E', // Signal Red
        content: '#111111' // Black Text
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        drama: ['"DM Serif Display"', 'serif'],
        mono: ['"Space Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
}
