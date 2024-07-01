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
        accent: '#f1bc19',
      },
      // backgroundImage: {
      //   'hero': "url('/images/hero.webp')",
      //   'hero2': "url('/images/hero2.webp')",
      // },
    },
  },
  plugins: [],
}
