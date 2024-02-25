import type { NextAuthConfig } from "next-auth";

import Credentials from "next-auth/providers/credentials";
import UserModel from "./models/Users.models";
import bcrypt from "bcryptjs";
import dbConnect from "./db/dbConnect";
// import { adapter, getUser } from "./auth";
export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        console.log(credentials, "creds");
        const { email, password } = credentials;
        if (!email || !password) {
          return null;
        }
        await dbConnect();

        // const db = await connectToDatabase();
        // const collection = db.collection("users");
        // const adapter = await MongoDBAdapter(clientPromise);

        const checkUser = await UserModel.findOne({ email });
        console.log("🚀 ~ POST ~ checkUser:", checkUser, password);

        if (checkUser) {
          const result = await bcrypt.compare(password, checkUser.password);
          console.log("🚀 ~ authorize ~ result:", result);
          if (result) {
            return checkUser;
          }
        } else {
          return null;
        }
      },
    }),
  ],
  //   callbacks: {
  //     async signIn({ user, account }) {
  //       console.log(user, account, "latest123");
  //     },
  //   },
} satisfies NextAuthConfig;
