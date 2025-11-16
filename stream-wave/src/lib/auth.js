import { NextAuth } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import jwt from 'jsonwebtoken'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          scope: 'openid email profile',
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (account && user) {
        // Verify Google token is valid
        try {
          const response = await fetch(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${account.id_token}`)
          const data = await response.json()
          
          if (data.error) {
            throw new Error('Invalid Google token')
          }

          // Create JWT token for our app
          const appToken = jwt.sign(
            { 
              id: user.id, 
              email: user.email, 
              name: user.name,
              picture: user.picture 
            },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
          )
          
          token.appToken = appToken
        } catch (error) {
          console.error('Google token verification failed:', error)
          throw new Error('Authentication failed')
        }
      }
      return token
    },
    async session({ session, token }) {
      session.appToken = token.appToken
      session.user.id = token.sub
      return session
    },
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
}

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions)