import { Page } from '@sveltejs/kit';

export function getFlags(page: Page<Record<string, string>, string>) {
	return { signIn: !!page.url.searchParams.get('signIn') };
}
