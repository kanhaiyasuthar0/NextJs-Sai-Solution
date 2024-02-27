import dbConnect from "@/db/dbConnect"; // Adjust this path to where your dbConnect function is located
import SiteModel from "@/models/Sites.models"; // Adjust this path to where your Site model is located
// import { validateToken } from "@/utils/verifyToken";
import { JsonWebTokenError } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";
// async function handler(req, res) {
async function getHandler(req: Request) {
  await dbConnect();

  try {
    const sites = await SiteModel.find({});

    return NextResponse.json(sites);
  } catch (error) {
    return NextResponse.error();
  }
}
async function postHandler(req: Request) {
  try {
    const headersList = headers();
    console.log("🚀 ~ postHandler ~ req:", headersList.get("Authorization"));
    let token = cookies().get("token")?.value;
    // console.log("🚀 ~ validateToken ~ token:", token);
    // const decoded = JsonWebTokenError.verify(token, "MYKEY");
    // console.log("🚀 ~ postHandler ~ decoded:", decoded);

    const body = await req.json();
    await dbConnect();
    const newSite = await SiteModel.create(body);
    return NextResponse.json(newSite);
  } catch (error) {
    return NextResponse.error();
  }
}
export { getHandler as GET, postHandler as POST };
