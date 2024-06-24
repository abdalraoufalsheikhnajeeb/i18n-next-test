/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0b1b36',
        accent: '#3b83ff',
      },
      backgroundImage: {
        'hero': "url('/images/hero.webp')",
        'hero2': "url('/images/hero2.webp')",
      },
    },
  },
  plugins: [],
}
