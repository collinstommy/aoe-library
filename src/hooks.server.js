import SvelteKitAuth from "@auth/sveltekit"
import Discord from '@auth/core/providers/discord';
import { DISCORD_ID, DISCORD_SECRET } from "$env/static/private"
import { PrismaAdapter } from "$lib/server/PrismaAdapter";
import prisma from "$lib/server/prisma";

export const handle = SvelteKitAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "session",
    generateSessionToken: () => {
      return crypto.randomUUID();
    }
  },
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  providers: [
    Discord({ clientId: DISCORD_ID, clientSecret: DISCORD_SECRET }),
  ]
});
