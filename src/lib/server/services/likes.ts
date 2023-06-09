import { db } from '../../../db';
import { likes } from '../../../db/schema';
import { sql, eq, and } from 'drizzle-orm';

export async function getAllLikes() {
	return await db
		.select({
			itemId: likes.itemId,
			likes: sql<number>`COUNT(*)`
		})
		.from(likes)
		.groupBy(likes.itemId);
}

export async function getUserLikes(userId: string) {
	return await db
		.select({
			itemId: likes.itemId
		})
		.from(likes)
		.where(eq(likes.userId, userId))
		.groupBy(likes.itemId);
}

export async function addLike(userId: string, itemId: string) {
	return await db.insert(likes).values({
		itemId,
		userId
	});
}

export async function removeLike(userId: string, itemId: string) {
	return await db.delete(likes).where(and(eq(likes.userId, userId), eq(likes.itemId, itemId)));
}
