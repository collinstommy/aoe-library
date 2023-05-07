import { drizzle } from 'drizzle-orm/planetscale-serverless';

import { connect } from '@planetscale/database';
import { likes } from './schema';
import { PLANETSCALE_HOST, PLANETSCALE_USERNAME, PLANETSCALE_PASSWORD } from '$env/static/private';

const HERA_ITEM = '00261472-d3ce-4f38-b706-bfc920803cb7';
const VIPER_ITEM = '77cd004e-1a0e-4c09-aef2-0edf381ab338';
const USER_ID = 'user_2OWy31VTFkEkN6MV1qY1u1WNjwa';

const connection = connect({
	host: PLANETSCALE_HOST,
	username: PLANETSCALE_USERNAME,
	password: PLANETSCALE_PASSWORD
});

export const db = drizzle(connection);

await Promise.all([
	db.insert(likes).values({
		userId: USER_ID,
		itemId: HERA_ITEM
	}),
	db.insert(likes).values({
		userId: USER_ID,
		itemId: VIPER_ITEM
	})
]);
