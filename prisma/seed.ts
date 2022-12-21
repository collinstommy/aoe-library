import prisma from "../src/lib/server/prisma";


async function main() {
  const user = await prisma.user.create({
    data: {
      name: "tibmagee",
      email: "tomascollins@gmail.com",
      image: "https://cdn.discordapp.com/embed/avatars/3.png",
      accounts: {
        create: {
          type: 'oauth',
          provider: 'discord',
          providerAccountId: '463448500986839061'
        }
      }
    },
  });

  const createLike = (itemId) => prisma.like.create({
    data: {
      itemId: itemId,
      userId: user.id,
    },
  })

  const likesCreation = [
    createLike('00261472-d3ce-4f38-b706-bfc920803cb7'), // hera
    createLike('77cd004e-1a0e-4c09-aef2-0edf381ab338'), // viper
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
