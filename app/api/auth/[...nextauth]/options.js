import AppleProvider from "next-auth/providers/apple";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import UserModal from "@/server/models/user";
import bcrypt from "bcrypt";
import dbConnect from "@/server/config/dbConnect";

export const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      redirectUri: process.env.GOOGLE_CALLBACK_URL,
      profile(profile) {
        let userRole = "user";
        if (profile?.email === "basheer.softdev@gmail.com") userRole = "admin";

        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          profile: profile.picture,
          role: userRole,
          provider: "google",
        };
      },
    }),

    AppleProvider({
      clientId: process.env.APPLE_CLIENT_ID,
      clientSecret: process.env.APPLE_CLIENT_SECRET,
      redirectUri: process.env.APPLE_CALLBACK_URL,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email:", type: "text" },
        password: { label: "Password:", type: "password" },
      },
      async authorize(credentials) {
        await dbConnect();

        try {
          const user = await UserModal.findOne({
            email: credentials.email,
          }).lean();
          if (!user || !user.password) return null;

          const match = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (!match) return null;

          return {
            _id: user._id,
            email: user.email,
            name: user.fullName,
            profile: user.profile,
            role: user.role,
            provider: "email",
          };
        } catch (err) {
          console.error("Authorization error:", err);
          return null;
        }
      },
    }),
  ],

  pages: {
    signIn: "/auth/signin",
  },

  callbacks: {
    async signIn({ user }) {
      await dbConnect();
      try {
        let existingUser = await UserModal.findOne({ email: user.email });

        if (!existingUser) {
          const newUser = new UserModal({
            fullName: user.name || "",
            email: user.email,
            profile: user.profile || "",
            provider: user.provider || "credentials",
            role: user.role || "user",
            isVerified: true, // Social logins are treated as verified
          });
          await newUser.save();
          user._id = newUser._id;
        } else {
          user._id = existingUser._id;
          user.role = existingUser.role;
        }
      } catch (err) {
        console.error("SignIn DB error:", err);
        return false;
      }
      return true;
    },

    async session({ session, token }) {
      if (session?.user) {
        session.user._id = token._id;
        session.user.role = token.role;
        session.user.provider = token.provider;
        session.user.profile = token.profile;
      }
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token._id = user._id;
        token.role = user.role;
        token.provider = user.provider;
        token.profile = user.profile;
      }
      return token;
    },
  },

  session: {
    maxAge: 60 * 60 * 24, // 1 day
  },
};
