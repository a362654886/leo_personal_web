/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,jsx}",
    "./components/**/*.{ts,tsx,jsx}",
    "./app/**/*.{ts,tsx,jsx}",
    "./src/**/*.{ts,tsx,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background-img": "url('/img/bg.jpeg')",
        "css-image": "url('/img/css.png')",
      },
      animation: {
        animate: "animate 2s infinite ease alternate",
      },
      keyframes: {
        animate: {
          to: {
            transform: "translateY(50px)",
          },
        },
      },
    },
  },
};
