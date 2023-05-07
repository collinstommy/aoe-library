import { int, mysqlTable, varchar, serial } from 'drizzle-orm/mysql-core';

import { drizzle } from 'drizzle-orm/node-postgres';
import { InferModel, eq, sql } from 'drizzle-orm';

export const likes = mysqlTable('like', {
	id: serial('id').primaryKey(),
	itemId: varchar('item_id', { length: 255 }),
	userId: varchar('user_id', { length: 255 })
});

export type Like = InferModel<typeof likes>;
