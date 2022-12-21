import prisma from "../src/lib/server/prisma";


async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Tom Collins",
      email: "tomascollins@gmail.com",
    },
  });

  const createLike = (itemId) => prisma.like.create({
    data: {
      itemId: itemId,
      userId: user.id,
    },
  })

  const likes = [
    createLike()
  ]

  await Promise.all(likesCreation);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
