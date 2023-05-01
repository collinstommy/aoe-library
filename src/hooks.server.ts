import type { Handle } from '@sveltejs/kit';
import clerk from '$lib/server/clerk.server';
import { sequence } from '@sveltejs/kit/hooks';

const handleAuth: Handle = async ({ event, resolve }) => {
	/**
	 * Get session and client_uat cookies from the request
	 */
	const __session = (await event.cookies.get('__session')) as string;
	const __client_uat = (await event.cookies.get('__client_uat')) as string;

	/**
	 * Authenticate the request
	 *
	 * @param apiKey - Clerk API KEY ?? not sure what this is
	 * @param publishableKey - Clerk publishable API KEY
	 * @param secretKey - Clerk secret API KEY
	 * @param clientUat - client_uat cookie
	 * @param frontendApi - ?? not sure what this
	 * @param headerToken - __session cookie
	 * @param host - ?? not sure what this
	 */
	const authReq = await clerk.authenticateRequest({
		apiKey: clerk.__unstable_options.apiKey || '',
		publishableKey: clerk.__unstable_options.publishableKey || '',
		secretKey: clerk.__unstable_options.secretKey || '',
		clientUat: __client_uat,
		frontendApi: '',
		headerToken: __session,
		host: ''
	});

	if (authReq.isSignedIn) {
		/**
		 * make _session serializable by removing all functions - there might be a better way to do this,
		 * and make it type-safe
		 *
		 * types are in app.d.ts
		 */
		const { getToken, debug, organization, ...session } = authReq.toAuth();

		event.locals.session = session;
	} else {
		event.locals.session = null;
	}

	return await resolve(event);
};

const test: Handle = async ({ event, resolve }) => {
	// We should have a session object here
	if (!event.locals.session) {
		console.log('Unauthenticated request');
	} else {
		console.log('Authenticated request');
	}
	return await resolve(event);
};

export const handle = sequence(handleAuth, test);
