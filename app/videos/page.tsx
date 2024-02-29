import React from "react";

const ComingSoonPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="text-center p-4">
        <h1 className="text-5xl font-bold mb-2">Coming Soon</h1>
        <p className="text-lg mb-4">Stay tuned for something amazing!</p>
        {/* Placeholder for a video or a video background */}
        <div className="relative overflow-hidden rounded-lg max-w-xs mx-auto">
          {/* Assuming you're going to replace this iframe with your actual video content */}
          <iframe
            className="w-full h-56 md:h-96"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID" // Replace YOUR_VIDEO_ID with your video's ID
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        {/* Optional: A call-to-action button or sign-up form */}
        <div className="mt-8">
          <a
            href="/signup"
            className="inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100"
          >
            Notify Me!
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
