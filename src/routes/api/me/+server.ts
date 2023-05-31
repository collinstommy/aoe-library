import { error, json } from '@sveltejs/kit';
import { getUserLikes } from '$lib/server/services/likes';

export async function GET({ locals }) {
	if (!locals.session) {
		return json({});
	}
	let myLikes: {
		itemId: string | null;
	}[];

	try {
		myLikes = await getUserLikes(locals.session.userId);
	} catch (e: any) {
		console.log('Error getting likes', e);
		throw error(500, 'Not found - unexpected error');
	}
	const itemIdList = myLikes.map(({ itemId }) => itemId);

	return json({
		likes: itemIdList || []
	});
}
