import React, { useEffect, useState } from "react";
import { Howl } from "howler";
import backgroundNoise from "../assets/adhd_noise.mp3"; // Add an appropriate sound file in assets

const AutismSounds = ({ isNoiseEnabled }) => {
  const [sound, setSound] = useState(null);

  useEffect(() => {
    const newSound = new Howl({
      src: [backgroundNoise],
      loop: true,
      volume: 0.5,
    });
    setSound(newSound);

    return () => {
      if (sound) sound.stop();
    };
  }, [sound]);

  useEffect(() => {
    if (sound) {
      if (isNoiseEnabled) sound.play();
      else sound.stop();
    }
  }, [isNoiseEnabled, sound]);

  return null; // No UI needed
};

export default AutismSounds;
