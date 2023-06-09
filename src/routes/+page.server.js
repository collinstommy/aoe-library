import { addLike, removeLike } from '$lib/server/services/likes';

/** @type {import('./$types').Actions} */
export const actions = {
	updateLike: async ({ request, locals }) => {
		const data = await request.formData();

		const liked = data.get('liked');
		const itemId = data.get('itemId');

		try {
			if (liked === 'on' && itemId) {
				await removeLike(locals.session.userId, itemId);
			} else if (itemId) {
				await addLike(locals.session.userId, itemId);
			}
			return { success: true };
		} catch (error) {
			console.log(error);
			return { success: false };
		}
	}
};
