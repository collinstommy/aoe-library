import { drizzle } from 'drizzle-orm/planetscale-serverless';
import { connect } from '@planetscale/database';
import { mysqlTable, varchar, serial } from 'drizzle-orm/mysql-core';
import { sql } from 'drizzle-orm';

// create the connection
const connection = connect({
	url: 'mysql://fxf0m7pfbkabbg1d9k0o:pscale_pw_UwHQhzThbGdznwUki6sAuZUP7Zoy0vNaw67xolPijGC@aws.connect.psdb.cloud/aoe-library-dev?ssl={"rejectUnauthorized":true}'
});

const db = drizzle(connection);

const likes = mysqlTable('vote', {
	id: serial('id').primaryKey(),
	itemId: varchar('item_id', { length: 255 }),
	userId: varchar('user_id', { length: 255 })
});

export async function load() {
	const data = await db
		.select({
			itemId: likes.itemId,
			likes: sql`COUNT(*)`
		})
		.from(likes)
		.groupBy(likes.itemId);

	console.log({ data });

	if (data) {
		return { data };
	}
}
