export const authConfig = {
  secret: process.env.NEXTAUTH_SECRET, // Ensure NextAuth has a secret
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl + "/chat"; // Ensure redirect works after sign-in
    },
  },
  session: {
    strategy: "jwt", // Ensures session storage works properly
  },
};
