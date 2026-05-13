/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: 'rgb(from var(--color-primary) r g b / <alpha-value>)',
				'primary-foreground': 'rgb(from var(--color-primary-foreground) r g b / <alpha-value>)',
				accent: 'rgb(from var(--color-accent) r g b / <alpha-value>)',
				background: 'rgb(from var(--color-background) r g b / <alpha-value>)'
			}
		}
	},
	plugins: []
};
