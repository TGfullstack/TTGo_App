const { heroui } = require('@heroui/react');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    //* make sure it's pointing at the ROOT node_module
    '../client/node_modules/@hero',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // colors: {
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",
      // },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
};
