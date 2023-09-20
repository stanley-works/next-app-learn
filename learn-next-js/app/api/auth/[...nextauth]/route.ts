import NextAuth, { NextAuthOptions } from "next-auth"
import { authOptions } from "../AuthOptions";

const AuthProviders = authOptions;

const handler = NextAuth(AuthProviders)

export { handler as GET, handler as POST }