const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    flowbite.content()
  ],
  theme: {
    extend: {
      fontFamily:{
        Fraunces: "'Fraunces', serif",
        Robot: "'Roboto Condensed', sans-serif"
      }
    },
  },
  plugins: [
    flowbite.plugin(),
    require('daisyui'),
  ],
}

