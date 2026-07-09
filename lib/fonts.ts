import localFont from "next/font/local"

export const logoFont = localFont({
  src: "../public/fonts/NeuePower-Ultra.ttf",
  variable: "--font-custom-logo",
  weight: "900",
  display: "swap",
  fallback: ["Satoshi", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
})

export const fontVariables = logoFont.variable
export const fontVariablesFallback = fontVariables
