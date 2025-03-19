import React, { useRef, useState } from "react";
import "../App.css";

const DyslexiaCamera = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const processedCanvasRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  // Start Camera
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  // Capture Image and Apply Dyslexia Effect
  const captureImage = () => {
    if (!videoRef.current || !canvasRef.current || !processedCanvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size to video size
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;

    // Draw video frame onto the canvas
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    // Convert to image and save
    const imageDataURL = canvas.toDataURL("image/png");
    setCapturedImage(imageDataURL);

    // Process image with a Dyslexia-like effect
    applyDyslexiaEffect(canvas);
  };

  // Function to apply a Dyslexia effect to the image
  const applyDyslexiaEffect = (canvas) => {
    const ctx = canvas.getContext("2d");
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;

    // Simulate a Dyslexia-like effect by distorting pixels (color inversion + slight blur)
    for (let i = 0; i < pixels.length; i += 4) {
      // Swap red and blue (color confusion effect)
      let temp = pixels[i];
      pixels[i] = pixels[i + 2];
      pixels[i + 2] = temp;

      // Add slight random noise to simulate visual distortion
      pixels[i] = pixels[i] + Math.random() * 10 - 5; // Red channel
      pixels[i + 1] = pixels[i + 1] + Math.random() * 10 - 5; // Green channel
      pixels[i + 2] = pixels[i + 2] + Math.random() * 10 - 5; // Blue channel
    }

    // Apply modified pixel data
    ctx.putImageData(imageData, 0, 0);

    // Convert processed canvas to an image URL
    const processedImageDataURL = canvas.toDataURL("image/png");
    setCapturedImage(processedImageDataURL);
  };

  return (
    <div className="dyslexia-camera">
      <h2>Real-Time Dyslexia Simulation</h2>

      {/* Video Stream */}
      <div className="camera-container">
        <video ref={videoRef} autoPlay playsInline></video>
      </div>

      {/* Buttons */}
      <div className="button-container">
        <button onClick={startCamera}>Start Camera</button>
        <button onClick={captureImage}>Capture & Apply Dyslexia Effect</button>
      </div>

      {/* Hidden Canvases */}
      <canvas ref={canvasRef} style={{ display: "none" }} />
      <canvas ref={processedCanvasRef} style={{ display: "none" }} />

      {/* Display Captured Image */}
      {capturedImage && (
        <div className="captured-image-section">
          <h3>Processed Dyslexia Image:</h3>
          <img src={capturedImage} alt="Dyslexia Simulation" />
        </div>
      )}
    </div>
  );
};

export default DyslexiaCamera;
