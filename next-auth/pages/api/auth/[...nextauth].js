import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Next-Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Username ...",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password ...",
        },
        email: {
          label: "Email",
          type: "email",
          placeholder: "Email ...",
        },
      },
      async authorize(credentials, req) {
        return { email: "amin@gmail.com" }; // Jwt Payload
      },
    }),
  ],
});
