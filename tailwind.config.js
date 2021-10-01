module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/ui'),
    require('@tailwindcss/forms'),
  ],
  purge: [
    './src/**/*.svelte',
    './src/**/*.js',
    './public/*.html',
  ],
}
