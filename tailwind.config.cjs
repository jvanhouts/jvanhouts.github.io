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
				background: 'rgb(from var(--color-background) r g b / <alpha-value>)',
				'card-background': 'rgb(from var(--color-card-background) r g b / <alpha-value>)',
				rosewater: 'rgb(from var(--color-rosewater) r g b / <alpha-value>)',
				mauve: 'rgb(from var(--color-mauve) r g b / <alpha-value>)',
				yellow: 'rgb(from var(--color-yellow) r g b / <alpha-value>)',
				lavender: 'rgb(from var(--color-lavender) r g b / <alpha-value>)',
				teal: 'rgb(from var(--color-teal) r g b / <alpha-value>)',
			}
		}
	},
	plugins: []
};
