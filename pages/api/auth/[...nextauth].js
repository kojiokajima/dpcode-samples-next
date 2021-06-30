import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.Cognito({
      clientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_COGNITO_CLIENT_SECRET,
      domain: process.env.NEXT_PUBLIC_COGNITO_DOMAIN,
    }),

  ],
  callbacks: {
    async jwt(token, user, account, profile, isNewUser, session) {
      if (account?.accessToken) {
        token.accessToken = account.accessToken
        token.idToken = account.idToken
      }
      return token
    },

    async session(session, token) {
      return {
        ...session,
        accessToken: token.accessToken,
        idToken: token.idToken,
      }
    },
  },
  // session: {
  //   jwt: true,
  // },
  // debug: process.env.NODE_ENV === 'development' ? true : false,
})