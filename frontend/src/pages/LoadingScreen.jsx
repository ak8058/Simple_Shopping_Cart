import React from "react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      {/* Spinner */}
      <div className="w-16 h-16 border-4 border-indigo-600 border-dashed rounded-full animate-spin mb-4"></div>
      {/* Text */}
      <p className="text-xl font-semibold text-gray-700">Loading...</p>
    </div>
  );
};

export default LoadingScreen;
