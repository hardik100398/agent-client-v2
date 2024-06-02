/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        100: "#E0E0E0",
        200: "#B0B0B0",
        300: "#808080",
      },
      secondary: {
        100: "#A0A0A0",
        200: "#707070",
        300: "#404040",
      },
      surface: {
        100: "#F0F0f0",
        200: "#D0D0D0",
        300: "#A0a0a0",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
