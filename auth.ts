/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth from "next-auth";
import Twitter from "next-auth/providers/twitter";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Twitter({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
    }),
  ],
  // callbacks: {
  //   async jwt({ token, account }) {
  //     // If user just logged in, add the access token to the JWT token
  //     if (account) {
  //       token.accessToken = account.access_token; // OAuth 2.0 access token
  //     }
  //     return token;
  //   },
  //   async session({ session, token }) {
  //     // Add the access token to the session so it's available on the client and server
  //     (session as any).accessToken = token.accessToken;
  //     return session;
  //   },
  // },
});
