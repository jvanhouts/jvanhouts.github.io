/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				accent: 'rgb(var(--color-accent) / <alpha-value>)',
				background: 'rgb(var(--color-background) / <alpha-value>)'
			},
			backgroundImage: {
				'lizard-launcher': "url('/src/lib/assets/lizard_launcher.png')",
				'slime-shooter': "url('/src/lib/assets/slime_shooter.png')"
			}
		}
	},
	plugins: []
};
