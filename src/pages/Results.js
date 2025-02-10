import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const Results = () => {
  const navigate = useNavigate(); // ✅ Define navigate

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h2 className="text-3xl font-bold mb-4">Translation Result</h2>
      <p className="text-lg text-gray-700">The detected text will appear here.</p>
      <button
        onClick={() => navigate("/")} // ✅ Use navigate correctly
        className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg"
      >
        Back to Home
      </button>
    </div>
  );
};

export default Results;

