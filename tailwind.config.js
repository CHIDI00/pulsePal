/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // green: "#ddf8ef",
        // greendark: "#47d897",
      },
      keyframes: {
        loaderAnim: {
          "20%": {
            backgroundPosition: "0% 0%, 50% 50%, 100% 50%",
          },
          "40%": {
            backgroundPosition: "0% 100%, 50% 0%, 100% 50%",
          },
          "60%": {
            backgroundPosition: "0% 50%, 50% 100%, 100% 0%",
          },
          "80%": {
            backgroundPosition: "0% 50%, 50% 50%, 100% 100%",
          },
        },
      },
      animation: {
        loaderAnim: "loaderAnim 1s infinite linear",
      },
    },
  },
  plugins: [],
};
