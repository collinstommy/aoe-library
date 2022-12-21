
import { json, error } from '@sveltejs/kit';
import prisma from '../../../lib/server/prisma';

export async function GET({ url, locals }) {
  const session = await locals.getSession()

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
  })

  return json(user)
}
