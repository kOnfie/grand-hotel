/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter_400Regular"],
        "inter-medium": ["Inter_500Medium"],
        "inter-semibold": ["Inter_600SemiBold"],

        jakarta: ["PlusJakartaSans_400Regular"],
        "jakarta-medium": ["PlusJakartaSans_500Medium"],
        "jakarta-semibold": ["PlusJakartaSans_600SemiBold"],
        "jakarta-bold": ["PlusJakartaSans_700Bold"],

        jost: ["Jost_400Regular"],
        "jost-medium": ["Jost_500Medium"],
        "jost-semibold": ["Jost_600SemiBold"],
        "jost-bold": ["Jost_700Bold"],
      },
      colors: {
        grey: {
          100: "#F6F6F6",
        },
        primary: {
          300: "#99CDF7",
          400: "#69B1F1",
          500: "#4593EC",
          600: "#3076E0",
          700: "#2761CE",
          800: "#2853AF",
        },

        secondary: {
          50: "#EBF2FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B81F6",
        },

        greyscale: {
          0: "#FFFFFF",
          25: "#F6F8FA",
          50: "#ECEFF3",
          100: "#DFE1E6",
          200: "#C1C7CF",
          300: "#A4ABB8",
          400: "#808897",
          500: "#666D80",
          600: "#353849",
          700: "#272835",
          800: "#1A1B25",
          900: "#141414",
        },

        sky: {
          0: "#EFFBFF",
          25: "#D1F0F9",
          50: "#7EDCF1",
          100: "#33CFFF",
          200: "#106A97",
          300: "#0C4D6E",
        },

        success: {
          0: "#EFFEFA",
          25: "#DDF2E6",
          50: "#9DE0D3",
          100: "#40C4AA",
          200: "#287F6E",
          300: "#174E43",
        },

        warning: {
          0: "#FFF6E0",
          25: "#F9ECCB",
          50: "#FBD982",
          100: "#FFBD4C",
          200: "#956321",
          300: "#5B3D1E",
        },

        error: {
          0: "#FEEFF2",
          25: "#FADAE1",
          50: "#E8D2B6",
          100: "#DF1C41",
          200: "#95122B",
          300: "#710E21",
        },

        overlay: "rgba(23, 23, 37, 0.24)",
      },
    },
  },
  plugins: [],
};
