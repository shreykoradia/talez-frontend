/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      transitionProperty: {
        transform: "transform",
        opacity: "opacity",
      },
      backgroundImage: {
        "gradient-bg":
          "linear-gradient( 215deg,hsl(60deg 4% 5%) 72%,hsl(335deg 51% 11%) 93%,hsl(333deg 61% 14%) 99%,hsl(332deg 66% 16%) 101%,hsl(331deg 69% 19%) 101%,hsl(331deg 71% 20%) 102%,hsl(330deg 72% 22%) 101%,hsl(330deg 73% 24%) 101%,hsl(330deg 74% 25%) 101%,hsl(330deg 75% 27%) 100%)",
      },
      fontFamily: {
        spaceGroteskLight: "spaceGroteskLight",
        spaceGroteskRegular: "spaceGroteskRegular",
        spaceGroteskMedium: "spaceGroteskMedium",
        spaceGroteskBold: "spaceGroteskBold",
      },

      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        maxXs: { max: "468px" },
        maxSm: { max: "639px" },
        maxMd: { max: "767px" },
        maxXlg: { max: "992px" },
        maxLg: { max: "1023px" },
        maxXl: { max: "1279px" },
        minMaxXxl: { min: "768px", max: "1366px" },
        minMaxMdXl: { min: "1024px", max: "1366px" },
        minMaxXl: { min: "1024px", max: "1100px" },
        minMaxLg: { min: "1024px", max: "1279px" },
        mac13Inch: { min: "1280px", max: "1365px" },
        minMaxMd: { min: "768px", max: "1023px" },
        minMaxSm: { min: "640px", max: "767px" },
      },
      colors: {
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
        divamecha: "#EEEEF0",
        crimsonred: "#DC143C",
        pattensBlue: "#E1F1FF",
        lilyScentGreen: "#e8e8bf",
        cardamom: "#aaaa74",
        maze: "#5a5a35",
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
