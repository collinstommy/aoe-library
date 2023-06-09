import { json, error } from '@sveltejs/kit';
import { getAllLikes } from '$lib/server/services/likes';

export async function GET() {
	let allLikes: {
		itemId: string | null;
		likes: number;
	}[];

	try {
		allLikes = await getAllLikes();
	} catch (e: any) {
		console.log('Error getting likes', e);
		throw error(500, 'Not found - unexpected error');
	}

	const byId = allLikes.reduce<Record<string, number>>((map, like) => {
		if (like.itemId) {
			return {
				...map,
				[like.itemId]: like.likes
			};
		}
		return map;
	}, {});

	return json(byId || []);
}
