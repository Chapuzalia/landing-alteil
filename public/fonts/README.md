# Custom fonts

Put `.ttf` files here when you want to self-host a font.

Recommended setup:

1. Copy your files into this folder, for example:
   - `Satoshi-Medium.ttf`
   - `Satoshi-Semibold.ttf`
   - `Inter-Regular.ttf`
   - `Inter-Medium.ttf`

2. Open `lib/fonts.ts` and replace `fontVariablesFallback` with `next/font/local` exports.

3. In `app/layout.tsx`, import `fontVariables` instead of `fontVariablesFallback` and keep it on the `<html>` className.

CSS utilities are already available:

- `font-custom-heading`
- `font-custom-body`

The global Tailwind tokens also use the custom variables when they exist:

- `font-heading` -> `--font-custom-heading`
- `font-sans` -> `--font-custom-body`
