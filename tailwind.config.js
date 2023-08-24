/** @type {import('tailwindcss').Config} */
import formsPlugin from '@tailwindcss/forms';
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/assets/Brand.jpg')",
      },
    },
  },
  plugins: [
    // ...
    formsPlugin,
  ],
};
