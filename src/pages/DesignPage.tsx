import React, { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import axios from "axios";

const Design = () => {
  const [designData, setDesignData] = useState({
    dimensions: { width: 2, height: 2, depth: 2 },
    color: "#FF5733",
  });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold py-6">3D Furniture Design</h1>
      <div className="w-full h-96 bg-gray-200 relative">
        <Canvas>
          {/* Ambient light and OrbitControls are valid */}
          <ambientLight intensity={0.5} />
          <OrbitControls />
          <CustomBox designData={designData} setDesignData={setDesignData} />
        </Canvas>
      </div>
      <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Save Design
      </button>
    </div>
  );
};

export default Design;

const CustomBox = ({ designData, setDesignData }: any) => {
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDesignData({ ...designData, color: event.target.value });
  };

  const handleDimensionChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = event.target;
    setDesignData({
      ...designData,
      dimensions: { ...designData.dimensions, [name]: parseFloat(value) },
    });
  };

  return <div>test</div>;
};
