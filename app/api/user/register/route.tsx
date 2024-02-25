import dbConnect from "@/db/dbConnect"; // Adjust this path to where your dbConnect function is located
import UserModel from "@/models/Users.models"; // Adjust this path to where your Site model is located
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  // console.log("🚀 ~ POST ~ req:", req);
  await dbConnect();
  try {
    const body = await req.json();
    console.log(body, "b123");
    if (!body?.email) return NextResponse.error("provide a valid email");

    const checkUser = await UserModel.findOne({ email: body.email });
    console.log("🚀 ~ POST ~ checkUser:", checkUser, body);
    if (!checkUser && body.password) {
      console.log("inside");
      const saltRounds = 10;
      const genSalt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(body.password, genSalt);
      body.password = hashedPassword;
      const newUser = await UserModel.insertMany([body]);
      return NextResponse.json(newUser);

      //     bcrypt.genSalt(saltRounds, function (err, salt) {
      //     bcrypt.hash(body.password, salt, async function (err, hashedPassword) {
      //       body.password = hashedPassword;
      //       const newUser = await UserModel.insertMany([body]);
      //       return NextResponse.json(newUser);
      //     });
      //   });
    } else {
      throw new Error(`${body.email} already exist. Please Signin`);
    }
  } catch (error) {
    return NextResponse.error("some");
  }
  // const data = req.body;
  // const id = await createItem(data);
}
