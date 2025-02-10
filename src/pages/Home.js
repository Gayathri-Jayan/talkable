import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">Sign Language Translator</h1>
      <p className="text-lg text-gray-600 mb-6">
        Upload an image or use your camera to translate sign language.
      </p>
      <button
        onClick={() => navigate("/camera")}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg"
      >
        Start Capturing
      </button>
    </div>
  );
};

export default Home;
