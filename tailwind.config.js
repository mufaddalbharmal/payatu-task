// @type {import('tailwindcss').Config}
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        water:"#EBF5FF",
        darkslategray: "#2e5a75",
        gray: "#f7fcff",
        dimgray: "#787171",
        blackCow:"#4A4A4A",
        peacockBlue:"#017194",
        whiteSmoke:"#F4F4F4",
        darkGray:"#abb1bf",
      },
      boxShadow: {
        'jcbs1': 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
        'jcbs2':'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        'jcbs3':'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;',
        'jcbs4':'rgba(0, 0, 0, 0.24) 0px 3px 8px;'
      },
    },
  },
  plugins: [],
}

