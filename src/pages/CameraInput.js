import React, { useRef, useState } from "react";

const CameraInput = () => {
  const videoRef = useRef(null);
  const [image, setImage] = useState(null);

  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current.srcObject = stream;
  };

  const captureImage = () => {
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(videoRef.current, 0, 0);
    setImage(canvas.toDataURL("image/png"));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl mb-4">Capture Sign Language</h2>
      {image ? (
        <img src={image} alt="Captured" className="w-64 h-64 border rounded" />
      ) : (
        <video ref={videoRef} autoPlay className="w-64 h-64 border rounded" />
      )}
      <div className="mt-4">
        <button onClick={startCamera} className="bg-green-500 text-white px-4 py-2 mr-2 rounded">
          Start Camera
        </button>
        <button onClick={captureImage} className="bg-blue-500 text-white px-4 py-2 rounded">
          Capture Image
        </button>
      </div>
    </div>
  );
};

export default CameraInput;
