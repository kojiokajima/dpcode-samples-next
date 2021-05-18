import NextAuth from 'next-auth'
import { session } from 'next-auth/client';
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.Cognito({
      clientId: process.env.COGNITO_CLIENT_ID,
      clientSecret: process.env.COGNITO_CLIENT_SECRET,
      domain: process.env.COGNITO_DOMAIN,
    }),

  ],
  callbacks: {
    async jwt(token, user, account, profile, isNewUser, session) {
      console.log("HI THIS IS NEXT AUTH");
      // Add access_token to the token right after signin
      if (account?.accessToken) {
        token.accessToken = account.accessToken
      }
      return token
    },

    async session(session, token) {
      // console.log("TOKEN IN SESSION: ", token);
      return {
        ...session,
        accessToken: token.accessToken
      }
    },
  },
  session: {
    jwt: true,
  },
  debug: process.env.NODE_ENV === 'development' ? true : false,
})