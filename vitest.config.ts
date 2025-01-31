import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

export default defineConfig({
	plugins: [svelte()],
	test: {
		globals: true,
		environment: 'jsdom'
	},
	resolve: {
		alias: {
			$lib: path.resolve(__dirname, 'src/lib')
		}
	}
});
