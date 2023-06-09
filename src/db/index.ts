import { drizzle } from 'drizzle-orm/planetscale-serverless';

import { connect } from '@planetscale/database';

import { PLANETSCALE_HOST, PLANETSCALE_USERNAME, PLANETSCALE_PASSWORD } from '$env/static/private';

const connection = connect({
	host: PLANETSCALE_HOST,
	username: PLANETSCALE_USERNAME,
	password: PLANETSCALE_PASSWORD
});

export const db = drizzle(connection);
