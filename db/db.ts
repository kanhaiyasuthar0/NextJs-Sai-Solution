import { MongoClient } from "mongodb";
import clientPromise from "./dbClient";

export default async function connectToDatabase() {
  try {
    const client = await clientPromise;
    const db = client.db("test");
    return db;
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw new Error("Database connection error");
  }
}
