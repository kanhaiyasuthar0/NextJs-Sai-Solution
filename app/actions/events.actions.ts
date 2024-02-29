"use server";

import dbConnect from "@/db/dbConnect";
import Event from "@/models/Events.models";
import { uploadImageToCloud } from "@/utils/common";
export default async function eventPost(formData: FormData) {
  console.log("🚀 ~ eventPost ~ formData:", formData.get("images"));
  try {
    // Connect to the database
    await dbConnect();

    // Extract data from formData
    // Assuming formData is a key-value representation of your event data
    // For Node.js environments, you might need to adjust how you extract formData values
    const eventData: any = Object.fromEntries(formData.entries());
    const images = formData.get("images") ? formData.getAll("images") : [];

    const promises = await images.map((image: any) =>
      uploadImageToCloud(image)
    );
    const uploadedImageLinks = await Promise.all(promises);
    eventData["images"] = uploadedImageLinks;
    console.log(eventData, "eventData");
    // Create a new event instance and save it to the database
    const event = new Event(eventData);
    console.log("🚀 ~ eventPost ~ event:", event);
    const savedEvent = await event.save();

    // Return the saved event object
    return savedEvent;
  } catch (error) {
    console.error("Failed to post event:", error);
    throw error; // Rethrow or handle error as appropriate
  }
}
