/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "phone-sm": "280px",
        "phone-md": "320px",
        "phone-lg": "360px",
        "phone-xl": "420px",
        "phone-2xl": "460px",
        "width-all": "470px",
      },
    },
  },
  plugins: [],
}

