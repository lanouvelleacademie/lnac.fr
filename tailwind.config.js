/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '500px',
      },
      animation: {
        // Fade up and down
        "fade-up": "fade-up 1s",
        "fade-up-delay": "fade-up-delay 1.5s",
        "fade-down": "fade-down 0.5s",
        wiggle: 'wiggle 3s ease-in-out infinite',
      },
      keyframes: {
        // Fade up and down
        "fade-up": {
          "0%": {
            opacity: 0,
            transform: "translateY(20px)",
          },
          "80%": {
            opacity: 0.6,
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
        "fade-up-delay": {
          "0%": {
            opacity: 0,
            transform: "translateY(20px)",
          },
          "20%": {
            opacity: 0,
          },
          "80%": {
            opacity: 1,
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
        "wiggle": {
          '0%, 100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
}