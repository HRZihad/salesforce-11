/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        screens: {
          'sm': '500px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1200px',
          'xxl': '1440px',
        },
      },
    },
    plugins: [
      
    ],
    corePlugins: {
      preflight: false
    }
  };
  