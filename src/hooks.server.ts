// import type { Handle } from '@sveltejs/kit';
// // import clerk from '$lib/server/clerk.server';
// import { sequence } from '@sveltejs/kit/hooks';
// // import clerk from '@clerk/clerk-sdk-node';
// import { CLERK_SECRET_KEY } from '$env/static/private';
// import { json } from '@sveltejs/kit';
// import type { RequestHandler, RequestEvent } from '@sveltejs/kit';
// import Clerk from '@clerk/clerk-sdk-node/esm/instance';

// const clerk = new Clerk({ secretKey: CLERK_SECRET_KEY });

// export const verifySession = async (sessionToken?: string) => {
// 	if (sessionToken) {
// 		try {
// 			console.log({ sessionToken });
// 			const claims = await clerk.verifyToken(sessionToken);
// 			return {
// 				userId: claims.sub,
// 				claims
// 			};
// 		} catch (err) {
// 			console.warn('ERROR', err);
// 		}
// 	}
// };

// export const requireSession = (handler: RequestHandler) => async (event: RequestEvent) => {
// 	if (!event.locals.session) {
// 		return json({ ok: false, error: 'Users Session not found' });
// 	}
// 	return handler(event);
// };

// const handleAuth: Handle = async ({ event, resolve }) => {
// 	/**
// 	 * Get session and client_uat cookies from the request
// 	 */
// 	const __session = (await event.cookies.get('__session')) as string;
// 	const __client_uat = (await event.cookies.get('__client_uat')) as string;
// 	const sessionToken = (await event.cookies.get('__session')) as string;

// 	if (sessionToken) {
// 		try {
// 			const session = await verifySession(sessionToken);
// 			if (session) {
// 				event.locals.session = session;
// 			}
// 		} catch (reason) {
// 			console.warn('warning', reason);
// 		}
// 	}
// 	return resolve(event);
// };

// const test: Handle = async ({ event, resolve }) => {
// 	// We should have a session object here
// 	if (!event.locals.session) {
// 		console.log('Unauthenticated request');
// 	} else {
// 		console.log('Authenticated request');
// 	}
// 	return await resolve(event);
// };

// export const handle = sequence(handleAuth, test);
