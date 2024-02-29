import dbConnect from "@/db/dbConnect";
import Event from "@/models/Events.models";
import React, { Context } from "react";

const EventDetail = async (context: any) => {
  // const session = await auth();
  // console.log("🚀 ~ SiteDetailPage ~ context:", context.params.siteId);
  const {
    params: { eventId },
  } = context;

  await dbConnect();
  const event = await Event.findOne({ _id: eventId });
  console.log("🚀 ~ EventDetail ~ eventsData:", event);

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Hero Image */}
      <div
        className="bg-cover bg-center h-96"
        style={{
          backgroundImage: `url(${
            event.images[0] || "/default-event-hero.jpg"
          })`,
        }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-5xl font-bold text-center">{event.title}</h1>
        </div>
      </div>

      {/* Event Details */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Event Details</h2>
          <p className="text-gray-400">
            {new Date(event.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2">Location</h3>
          <p className="text-gray-400">{event.location}</p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2">About the Event</h3>
          <p className="text-gray-400 whitespace-pre-line">
            {event.description}
          </p>
        </div>

        {/* Gallery */}
        {event.images.length > 1 && (
          <div>
            <h3 className="text-2xl font-bold mb-2">Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {event.images.slice(1).map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg">
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover transform hover:scale-105 transition duration-300 ease-in-out"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDetail;
