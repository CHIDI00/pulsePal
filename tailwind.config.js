/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",
        secondary: "#FBBF24",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  safelist: [
    {
      pattern: /text-(red|green|blue)-(500|600|700)/,
    },
  ],
  plugins: [
    import("@tailwindcss/forms"),
    import("@tailwindcss/typography"),
    import("@tailwindcss/aspect-ratio"),
    import("@tailwindcss/line-clamp"),
  ],
};
