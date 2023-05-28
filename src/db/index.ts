import { drizzle } from 'drizzle-orm/planetscale-serverless';

import { connect } from '@planetscale/database';

import {
	PLANETSCALE_HOST,
	PLANETSCALE_USERNAME,
	PLANETSCALE_PASSWORD,
	DATABASE_URL
} from '$env/static/private';

import { Client } from '@planetscale/database';

const client = new Client({
	url: DATABASE_URL
});
const connection = client.connection();

// const connection = connect({
// 	host: PLANETSCALE_HOST,
// 	username: PLANETSCALE_USERNAME,
// 	password: PLANETSCALE_PASSWORD
// });

export const db = drizzle(connection);
