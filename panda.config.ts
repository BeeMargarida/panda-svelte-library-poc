import { defineConfig } from '@pandacss/dev';
import { styledThemePreset } from './src/lib/styles/preset';

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	prefix: 'panda-test',

	presets: [styledThemePreset],

	// Where to look for your css declarations
	include: ['./src/**/*.{js,ts,svelte}'],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {}
	},

	// The output directory for your css system
	outdir: 'styled-system'
});
