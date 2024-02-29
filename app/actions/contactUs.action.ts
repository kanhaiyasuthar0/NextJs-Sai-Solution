"use server";

import dbConnect from "@/db/dbConnect";
import ContactUs from "@/models/ContactUs.models";

export default async function contactUsPost(formData: FormData) {
  try {
    // Connect to the database
    await dbConnect();

    // Extract data from formData
    // Assuming formData is a key-value representation of your event data
    // For Node.js environments, you might need to adjust how you extract formData values
    const contactUs: any = Object.fromEntries(formData.entries());

    // Create a new event instance and save it to the database
    const contact = new ContactUs(contactUs);
    const savedContact = await contact.save();

    // Return the saved event object
    return savedContact;
  } catch (error) {
    console.error("Failed to post event:", error);
    throw error; // Rethrow or handle error as appropriate
  }
}
