import React, { useEffect, useRef, useState } from "react";

const BackgroundNoise = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // Set volume to 50%
      audioRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
      setIsPlaying(true);
    }
  }, []);

  const toggleNoise = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <audio ref={audioRef} loop>
        <source src="src/assets/adhd_noise.mp3" type="audio/mpeg" />
      </audio>
      <button onClick={toggleNoise}>
        {isPlaying ? "🔇 Mute Background Noise" : "🔊 Play Background Noise"}
      </button>
    </div>
  );
};

export default BackgroundNoise;
