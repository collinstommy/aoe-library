import { sql } from 'drizzle-orm';
import { db } from '../../../db';
import { likes } from '../../../db/schema';
import { json } from '@sveltejs/kit';

export async function GET() {
	let allLikes;
	try {
		allLikes = await db
			.select({
				itemId: likes.itemId,
				likes: sql<string>`COUNT(*)`
			})
			.from(likes)
			.groupBy(likes.itemId);
	} catch (error: any) {
		console.log({ e: error.message });
	}

	console.log({ allLikes });

	// const byItem = allLikes.reduce((map, { itemId }) => {
	// 	if (map.has(itemId)) {
	// 		const existing = map.get(itemId);
	// 		map.set(itemId, existing + 1);
	// 	} else {
	// 		map.set(itemId, 1);
	// 	}
	// 	return map;
	// }, new Map());

	return json(Array.from(allLikes));
}
