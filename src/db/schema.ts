import { int, mysqlTable, varchar, serial, timestamp } from 'drizzle-orm/mysql-core';

import type { InferModel } from 'drizzle-orm';

export const likes = mysqlTable('vote', {
	id: serial('id').primaryKey(),
	itemId: varchar('item_id', { length: 255 }),
	userId: varchar('user_id', { length: 255 }),
	createdAt: timestamp('created_at')
});

export type NewLike = InferModel<typeof likes, 'insert'>;
export type Like = InferModel<typeof likes>;
