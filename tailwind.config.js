/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(213, 96%, 18%)",
        secondary: "hsl(243, 100%, 62%)",
        third: "var(--third-color)",
        light: "hsl(206, 94%, 87%)",
        strawberry: "var(--strawberry-color)",
        coolGray: "var(--cool-gray)",
        lightGray: "var(--light-gray)",
        magnolia: "var(--magnolia)",
        alabaster: "var(--alabaster)",
        white: "var(--white)",
      },
    },
  },
  plugins: [],
};
