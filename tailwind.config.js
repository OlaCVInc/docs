const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
import tailwindConfig from '@hempworks/pilgrim/tailwind.config'

const primary = {
	500: '#6366f1',
}

/** @type {import('tailwindcss').Config} */
module.exports = {
	presets: [
		tailwindConfig,
	],
  
	content: [
		...tailwindConfig.content,
		'./.vitepress/theme/**/*.{vue,js,ts,jsx,tsx}',
		'./src/**/*.{md,svg}',
	],

	theme: {
		extend: {
			colors: { primary },
		},
	},
}