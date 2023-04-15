import { json } from '@sveltejs/kit';
import prisma from '../../../lib/server/prisma';

export async function GET({ locals }) {
	const session = await locals.getSession();
	if (!session) {
		return;
	}
	console.log({ user });
	const user = await prisma.user.findUnique({
		where: {
			id: session.user.id
		},
		select: {
			likes: {
				select: {
					itemId: true,
					id: true
				}
			}
		}
	});

	return json(user);
}
