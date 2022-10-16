const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',

	theme: {
		extend: {}
	},

	plugins: [require('@tailwindcss/forms')],

	content: ['./src/**/*.{html,js,svelte,ts}']
};

module.exports = config;
