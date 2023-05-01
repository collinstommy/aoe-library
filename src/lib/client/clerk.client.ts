import Clerk from '@clerk/clerk-js';
import type { ActiveSessionResource } from '@clerk/types';
import { writable, type Writable } from 'svelte/store';
import { browser } from '$app/environment';
import { PUBLIC_CLERK_PUBLISHABLE_KEY } from '$env/static/public';

let clerk: Writable<Clerk>;

function getClerkInstance() {
	if (browser && !clerk) {
		const _clerk = new Clerk(PUBLIC_CLERK_PUBLISHABLE_KEY);
		_clerk.load();
		clerk = writable<Clerk>(_clerk);
	}
	return clerk;
}

type UseAuthProps =
	| {
			status: 'loading';
			session: null;
	  }
	| {
			status: 'authenticated';
			session: ActiveSessionResource;
	  }
	| {
			status: 'unauthenticated';
			session: null;
	  };

export const useAuth: Writable<UseAuthProps> = writable<UseAuthProps>(
	{ status: 'loading', session: null },
	(set) => {
		getClerkInstance().subscribe((clerk) => {
			if (browser && clerk) {
				const unsubscribe = clerk.addListener(({ user, session }) => {
					if (user && session && user === session.user) {
						set({ status: 'authenticated', session });
					} else if (!user && !session) {
						set({ status: 'unauthenticated', session: null });
					} else if (user === undefined && session === undefined) {
						set({ status: 'loading', session: null });
					}
				});

				return () => {
					console.log('unsubscribing from clerk');
					unsubscribe();
				};
			}
		});
	}
);

export default getClerkInstance();
