module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './lib/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'system-ui']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
