const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        lg: "1170px",
      },
    },
    fontSize: {
      "h1-bold": [
        "50px",
        {
          lineHeight: "150%",
          fontWeight: "700",
        },
      ],
      "h1-mobile-bold": [
        "32px",
        {
          lineHeight: "150%",
          fontWeight: "700",
        },
      ],
      "h2-bold": [
        "36px",
        {
          lineHeight: "150%",
          fontWeight: "700",
        },
      ],
      "h2-mobile-bold": [
        "24px",
        {
          lineHeight: "150%",
          fontWeight: "700",
        },
      ],
      "h2-semibold": [
        "36px",
        {
          lineHeight: "150%",
          fontWeight: "600",
        },
      ],
      "h3-bold": [
        "24px",
        {
          lineHeight: "150%",
          fontWeight: "700",
        },
      ],
      "h3-mobile-bold": [
        "18px",
        {
          lineHeight: "150%",
          fontWeight: "700",
        },
      ],
      "h3-semibold": [
        "24px",
        {
          lineHeight: "150%",
          fontWeight: "600",
        },
      ],
      "body-bold": [
        "18px",
        {
          lineHeight: "200%",
          fontWeight: "700",
        },
      ],
      "body-semibold": [
        "18px",
        {
          lineHeight: "200%",
          fontWeight: "600",
        },
      ],
      "body-medium": [
        "18px",
        {
          lineHeight: "200%",
          fontWeight: "500",
        },
      ],
      "body-normal": [
        "18px",
        {
          lineHeight: "200%",
          fontWeight: "400",
        },
      ],
      "base-regular": [
        "16px",
        {
          lineHeight: "200%",
          fontWeight: "400",
        },
      ],
      "base-medium": [
        "16px",
        {
          lineHeight: "200%",
          fontWeight: "500",
        },
      ],
      "base-semibold": [
        "16px",
        {
          lineHeight: "200%",
          fontWeight: "600",
        },
      ],
      "small-regular": [
        "14px",
        {
          lineHeight: "200%",
          fontWeight: "400",
        },
      ],
      "small-medium": [
        "14px",
        {
          lineHeight: "200%",
          fontWeight: "500",
        },
      ],
      "small-semibold": [
        "14px",
        {
          lineHeight: "200%",
          fontWeight: "600",
        },
      ],
      "subtle-medium": [
        "12px",
        {
          lineHeight: "16px",
          fontWeight: "500",
        },
      ],
      "subtle-semibold": [
        "12px",
        {
          lineHeight: "16px",
          fontWeight: "600",
        },
      ],
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/hero-pattern.svg')",
        "services-pattern": "url('/assets/services-pattern.svg')",
        "footer-pattern": "url('/assets/footer-pattern.svg')",
      },
      screens: {
        xs: "400px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary: {
          50: "#fbfaeb",
          100: "#f6f2cb",
          200: "#efe399",
          300: "#e6cc5e",
          400: "#dfbb41",
          500: "#cd9f25",
          600: "#b17d1d",
          700: "#8d5b1b",
          800: "#764a1d",
          900: "#653e1e",
          950: "#3a200e",
        },
        secondary: {
          50: "#f2f5fb",
          100: "#e8ecf7",
          200: "#d5dcf0",
          300: "#bbc5e6",
          400: "#9fa8da",
          500: "#868dce",
          600: "#6e6fbd",
          700: "#5d5ca6",
          800: "#4d4e86",
          900: "#43456c",
          950: "#151522",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
