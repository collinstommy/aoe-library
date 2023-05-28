import { int, mysqlTable, varchar, serial } from 'drizzle-orm/mysql-core';

import type { InferModel } from 'drizzle-orm';

export const likes = mysqlTable('vote', {
	id: serial('id').primaryKey(),
	itemId: varchar('item_id', { length: 255 }),
	userId: varchar('user_id', { length: 255 })
});

export type NewLike = InferModel<typeof likes, 'insert'>;
export type Like = InferModel<typeof likes>;
