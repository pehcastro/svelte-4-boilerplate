import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Page from './+page.svelte';

describe('+page.svelte', () => {
	it('renders the heading and button', () => {
		const { getByText } = render(Page);

		// Check for the presence of the headings
		expect(getByText('Welcome to the Svelte Boilerplate')).toBeInTheDocument();
		expect(
			getByText(
				'Svelte 4 + SvelteKit + Typescript + ESlint + Vitest (+ @testinglibrary/svelte) + TailwindCSS + ShadCN-svelte + Unplugin Icons'
			)
		).toBeInTheDocument();

		// Check for the presence of the button
		expect(getByText('shadcn-svelte button component')).toBeInTheDocument();
	});
});
