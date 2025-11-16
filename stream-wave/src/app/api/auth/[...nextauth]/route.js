import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const authOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        // TODO: Add your login logic
        if (credentials.email === "test@test.com" && credentials.password === "123456") {
          return { id: "1", name: "Test User", email: "test@test.com" }
        }
        return null
      }
    }),
  ],

  session: { strategy: "jwt" },
  pages: { signIn: "/login" },

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user
      return token
    },
    async session({ session, token }) {
      session.user = token.user
      return session
    },
  },
}

// ✔ OFFICIAL NEW EXPORT FORMAT FOR APP ROUTER
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
