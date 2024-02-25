import dbConnect from "@/db/dbConnect"; // Adjust this path to where your dbConnect function is located
import UserModel from "@/models/Users.models"; // Adjust this path to where your Site model is located
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  // console.log("🚀 ~ POST ~ req:", req);
  await dbConnect();
  try {
    const body = await req.json();
    console.log(body, "b123");
    if (!body?.email) return NextResponse.error();

    const checkUser = await UserModel.findOne({ email: body.email });
    console.log("🚀 ~ POST ~ checkUser:", checkUser);
    if (checkUser) {
      const result = await bcrypt.compare(body.password, checkUser.password);
      if (result) {
        const token = jwt.sign(
          {
            data: body.email,
          },
          "MYKEY",
          { expiresIn: 60 * 60 }
        );

        const data = {
          login: true,
          user: body.email,
          token: token,
        };

        return NextResponse.json(data, { status: 200 });
      } else {
        return NextResponse.error();
      }

      bcrypt.compare(
        body.password,
        checkUser.password,
        async function (err, result) {}
      );
    } else {
      return NextResponse.error({ error: "no user found" }, { status: 600 });
    }
  } catch (error) {
    return NextResponse.error({ error: "no user found" }, { status: 600 });
  }
  // const data = req.body;
  // const id = await createItem(data);
}
