import dbConnect from "@/db/dbConnect"; // Adjust this path to where your dbConnect function is located
import SiteModel from "@/models/Sites.models"; // Adjust this path to where your Site model is located
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
// async function handler(req, res) {
async function handler(req: Request, context: any) {
  console.log("🚀 ~ handler ~ req:", context);
  const {
    params: { siteId },
  } = context;
  console.log("🚀 ~ handler ~ siteId:", siteId);
  await dbConnect();

  try {
    const sites = await SiteModel.find({ _id: siteId });

    return NextResponse.json(sites);
  } catch (error) {
    return NextResponse.error();

    // res.status(400).json({ error: error.message });
    console.log(error);
  }
}
async function DELETE(req: Request, context: any) {
  console.log("🚀 ~ handler ~ req: dele", context);
  const {
    params: { siteId },
  } = context;
  console.log("🚀 ~ handler ~ siteId:", siteId);
  await dbConnect();

  try {
    const sites = await SiteModel.findByIdAndDelete({ _id: siteId });

    return NextResponse.json(sites);
  } catch (error) {
    return NextResponse.error();

    // res.status(400).json({ error: error.message });
    console.log(error);
  }
}
export { handler as GET, DELETE };
