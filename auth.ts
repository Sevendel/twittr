import NextAuth from "next-auth";
import Twitter from "next-auth/providers/twitter";
import Facebook from "next-auth/providers/facebook";

export const {
  handlers,
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    Twitter({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
    }),
    Facebook({
    }),
  ],
});
