import mongoose from "mongoose";

// all the interfaces
import { ConnectionObject, MongoUri } from "@/interfaces/backend/db/db";

const connection: ConnectionObject = {};
async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    return;
  }

  // Check if we have connection to our databse
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      return;
    }
    await mongoose.disconnect();
  }

  const myMongoUri: MongoUri = process.env.MONGODB_URI as MongoUri;
  const db = await mongoose.connect(myMongoUri, {
    // useNewUrlParser: true ,
    // useUnifiedTopology: true,
  });
  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
