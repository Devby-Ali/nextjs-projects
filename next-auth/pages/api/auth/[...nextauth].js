import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Next-Credentials",
      async authorize(credentials, req) {
        console.log("Credentials ->", credentials);

        return { email: "amin@gmail.com" }; // Jwt Payload
      },
    }),
  ],
});
