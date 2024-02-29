import React from "react";

const loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center">
        <div
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="text-lg font-medium mt-4">Loading...</p>
      </div>
    </div>
  );
};

export default loading;
