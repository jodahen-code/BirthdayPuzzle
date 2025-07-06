/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // ✅ important for Vue files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
