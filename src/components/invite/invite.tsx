import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three"; // Import THREE for handling texture properties

function SpinnableCard() {
  const meshRef = useRef(null);
  const [rotation, setRotation] = useState([0, 0, 0]); // Track rotation for X, Y, Z axes
  const [isDragging, setIsDragging] = useState(false);
  const [startMouse, setStartMouse] = useState([0, 0]); // Track initial mouse positions for both axes

  // Load the front and back textures (images)
  const frontTexture = useLoader(TextureLoader, "/front-card.png");
  const backTexture = useLoader(TextureLoader, "/back-card.png");

  // Ensure textures have high quality
  useEffect(() => {
    // Set filtering options for smooth and sharp textures
    frontTexture.minFilter = THREE.LinearFilter; // For smoother scaling down
    frontTexture.magFilter = THREE.LinearFilter; // For smoother scaling up
    frontTexture.generateMipmaps = true; // Use mipmaps for better scaling at various distances

    backTexture.minFilter = THREE.LinearFilter;
    backTexture.magFilter = THREE.LinearFilter;
    backTexture.generateMipmaps = true;
  }, [frontTexture, backTexture]);

  // Handle mouse down to start dragging
  const handlePointerDown = (event: any) => {
    event.stopPropagation(); // Prevents triggering other events
    setIsDragging(true);
    setStartMouse([event.clientX, event.clientY]); // Set initial mouse positions for both X and Y
  };

  // Handle mouse move to update rotation based on horizontal and vertical drag
  const handlePointerMove = (event: any) => {
    if (isDragging) {
      const deltaX = event.clientX - startMouse[0]; // Calculate change in mouse X position
      const deltaY = event.clientY - startMouse[1]; // Calculate change in mouse Y position

      // Update Y-axis rotation for horizontal drag (left/right)
      setRotation((prevRotation) => [
        0, // Apply change in Y for X-axis rotation (vertical drag flips)
        prevRotation[1] + deltaX * 0.01, // Apply change in X for Y-axis rotation (horizontal drag yaw)
        0, // Keep Z-axis rotation unchanged
      ]);

      setStartMouse([event.clientX, event.clientY]); // Update the last mouse position for both axes
    }
  };

  // Handle mouse up to stop dragging
  const handlePointerUp = () => {
    setIsDragging(false); // Stop the dragging action
  };

  // Ensure that textures are loaded properly
  useEffect(() => {
    if (frontTexture && backTexture) {
      console.log("Textures loaded successfully");
    } else {
      console.log("Textures failed to load");
    }
  }, [frontTexture, backTexture]);

  return (
    <Canvas
      gl={{
        pixelRatio: Math.min(window.devicePixelRatio, 2), // Limit max ratio to 2x for smoother rendering
        antialias: true, // Enable anti-aliasing for smoother edges
      }}
      camera={{ position: [0, 0, 10], fov: 75 }} // Camera position to get a good view of the card
    >
      {/* Ensure no lighting affecting the texture */}
      <ambientLight intensity={0} /> {/* No ambient light */}
      <pointLight intensity={0} /> {/* No point light */}
      {/* Spinnable Card Component */}
      <mesh
        ref={meshRef}
        rotation={new THREE.Euler(rotation[0], rotation[1], rotation[2])} // Apply rotation for all axes (X, Y, Z)
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerOut={handlePointerUp} // Stop dragging if pointer leaves the mesh
      >
        {/* Front Plane (Increased size) */}
        <planeGeometry args={[9, 11]} /> {/* Larger card */}
        <meshBasicMaterial
          map={frontTexture}
          toneMapped={false} // Disable any color mapping effects that might affect brightness
        />
        {/* Back Plane (rotated 180 degrees to face the opposite side) */}
        <mesh
          rotation={[0, Math.PI, 0]} // Rotate 180 degrees around the X-axis when flipped
          position={[0, 0, -0.1]} // Slight offset to avoid overlap with front
        >
          <planeGeometry args={[9, 11]} /> {/* Larger back card */}
          <meshBasicMaterial
            map={backTexture}
            toneMapped={false} // Disable any color mapping effects that might affect brightness
          />
        </mesh>
      </mesh>
      {/* Orbit Controls to enable better camera manipulation */}
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}

export default SpinnableCard;
