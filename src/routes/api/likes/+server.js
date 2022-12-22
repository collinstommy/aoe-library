import prisma from '../../../lib/server/prisma';
import { json } from '@sveltejs/kit';


export async function GET() {
  const likes = await prisma.like.findMany()
  const byItem = likes.reduce((map, { itemId }) => {
    if (map.has(itemId)) {
      const existing = map.get(itemId)
      map.set(itemId, existing + 1)
    } else {
      map.set(itemId, 1)
    }
    return map;
  }, new Map())
  return json(Array.from(byItem))
}
