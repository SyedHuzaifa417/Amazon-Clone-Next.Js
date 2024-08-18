import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      httpOptions: {
        timeout: 10000,   //this increases the timeout to 10 hence we avoid error{try signin with different account} due to timeout
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
  // callbacks: {
  //   async signIn({ user, account, profile, email, credentials }) {
  //     console.log("Sign in callback", { user, account, profile, email });
  //     return true;
  //   },
  //   async redirect({ url, baseUrl }) {
  //     console.log("Redirect callback", { url, baseUrl });
  //     return url.startsWith(baseUrl) ? url : baseUrl;
  //   },
  // },
});