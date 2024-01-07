import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...fontFamily.sans],
      },
      colors: {
        primary: {
          500: "#5D4AF6",
          900: "#0C0B14",
        },

        secondary: {
          500: "#CB3CAC1A",
        },
        neutral: {
          10: "#FFFFFF",
          25: "#F2F2F2",
          50: "#e8e8e8",
          75: "#d2d2d2",
          100: "#b8b8b8",
          200: "#969696",
          300: "#666666",
          400: "#484848",
          500: "#323232",
          600: "#181818",
          700: "#121212",
          800: "#0e0e0e",
          900: "#070707",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
