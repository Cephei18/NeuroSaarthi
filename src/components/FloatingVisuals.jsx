import React, { useEffect, useState } from "react";
import "../App.css"; // Styles

const FloatingVisuals = ({ isVisualEnabled }) => {
  const [visuals, setVisuals] = useState([]);

  useEffect(() => {
    if (isVisualEnabled) {
      const interval = setInterval(() => {
        setVisuals((prev) => [
          ...prev,
          {
            id: Math.random(),
            left: Math.random() * 100 + "vw",
            top: Math.random() * 100 + "vh",
            size: Math.random() * 50 + 20 + "px",
            color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
              Math.random() * 255
            }, 0.8)`,
          },
        ]);
      }, 500);

      return () => clearInterval(interval);
    } else {
      setVisuals([]);
    }
  }, [isVisualEnabled]);

  return (
    <div className="floating-visuals">
      {visuals.map((v) => (
        <div
          key={v.id}
          className="visual"
          style={{
            left: v.left,
            top: v.top,
            width: v.size,
            height: v.size,
            backgroundColor: v.color,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingVisuals;
