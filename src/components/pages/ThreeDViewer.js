// src/components/ThreeDViewer.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Loader } from '@react-three/drei';

const ThreeDViewer = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Loader />
      {/* Add your 3D model component here */}
    </Canvas>
  );
};

export default ThreeDViewer;
