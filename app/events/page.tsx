import dbConnect from "@/db/dbConnect";
import Event from "@/models/Events.models";
import Link from "next/link";
import React from "react";
// import { eventsData } from "./eventsData"; // Assume this is your data source

const EventsPage = async () => {
  await dbConnect();
  const eventsData = await Event.find({});

  return (
    <div className="bg-gray-900 min-h-screen text-white p-5">
      <h1 className="text-3xl font-bold text-center mb-10">
        Events where Sai Solution got involvements
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {eventsData?.map((event) => (
          <div
            key={event._id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
          >
            <img
              src={event.images[0] || "/default-event-image.jpg"} // Fallback image if none provided
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
              <p className="text-gray-400">{`${new Date(
                event.date
              ).getDate()}/${new Date(event.date).getMonth() + 1}/${new Date(
                event.date
              ).getFullYear()}`}</p>
              <div className="mt-3 overflow-hidden max-h-20 text-ellipsis">
                {event.description}
              </div>
              <Link href={`/events/${event._id}`} passHref>
                <button className="mt-4 bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-500">
                  View More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
