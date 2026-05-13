/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				accent: 'rgb(var(--color-accent) / <alpha-value>)',
				background: 'rgb(var(--color-background) / <alpha-value>)'
			}
		}
	},
	plugins: []
};
