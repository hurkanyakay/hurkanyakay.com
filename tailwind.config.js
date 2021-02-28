 module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  target: "relaxed",
  theme: {
    extend: {
      colors: {
        blue: '#a0d8f1',
        orange: '#e07628',
        red: '#bf381a',
        'grey-darker': '#364349',
        'blue-dark': '#2779bd',
        white: '#ffffff',
        'grey-darkest': '#273238',
        green: '#38c172',
        purple: '#9561e2',
        teal: '#4dc0b5',
        pink: '#f66d9b',
        yellow: '#e9af32',
      },
      fontFamily: {
        "serif": [
          '"Cantata One"',
          'Constantia',
          'serif',
        ],
        "sans": [
            'Open Sans',
            'Helvetica Neue',
            'sans-serif',
          ],
       }
    },
  },
  variants: {},
  plugins: [],
}