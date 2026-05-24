import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.tenantId = user.tenantId; // Sem o "as any" agora
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.tenantId =
          typeof token.tenantId === "string" ? token.tenantId : "";
        session.user.role =
          typeof token.role === "string" ? token.role : "EMPLOYEE";
      }
      return session;
    },
  },
  providers: [],
});
