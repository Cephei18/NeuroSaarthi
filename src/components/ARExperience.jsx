import React, { useEffect } from "react";
import "mind-ar/dist/mindar-image.prod.js";

const ARExperience = () => {
  useEffect(() => {
    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.getElementById("ar-container"),
      imageTargetSrc: "/path-to-your-marker.mind",
    });

    const { renderer, scene, camera } = mindarThree;

    const box = new window.THREE.Mesh(
      new window.THREE.BoxGeometry(1, 1, 1),
      new window.THREE.MeshBasicMaterial({ color: 0xff0000 }) // Red box
    );

    scene.add(box); // ✅ Add the box to the scene

    // Start rendering loop
    const animate = () => {
      requestAnimationFrame(animate);
      box.rotation.x += 0.01; // ✅ Rotate box
      box.rotation.y += 0.01;
      renderer.render(scene, camera); // ✅ Render the scene
    };

    mindarThree.start();
    animate(); // Start animation

    return () => {
      mindarThree.stop();
    };
  }, []);

  return <div id="ar-container" style={{ width: "100vw", height: "100vh" }} />;
};

export default ARExperience;
