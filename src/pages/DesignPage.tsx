import React, { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Design = () => {
  const [selectedShape, setSelectedShape] = useState<string>("cube");
  const [material, setMaterial] = useState<string>("Wood");
  const [width, setWidth] = useState<number>(2);
  const [height, setHeight] = useState<number>(2);
  const [depth, setDepth] = useState<number>(2);

  const renderShape = () => {
    switch (selectedShape) {
      case "cube":
        return (
          <Cube
            width={width}
            height={height}
            depth={depth}
            material={material}
          />
        );
      case "cylinder":
        return <Cylinder radius={width} height={height} material={material} />;
      case "sphere":
        return <Sphere radius={width} material={material} />;
      default:
        return (
          <Cube
            width={width}
            height={height}
            depth={depth}
            material={material}
          />
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-white shadow-md p-4 space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">Tools</h2>
        <button
          onClick={() => setSelectedShape("cube")}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Add Cube
        </button>
        <button
          onClick={() => setSelectedShape("cylinder")}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Add Cylinder
        </button>
        <button
          onClick={() => setSelectedShape("sphere")}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Add Sphere
        </button>
        <hr className="border-gray-200" />
        <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
          Export to STL
        </button>
      </div>

      <div className="flex-1 relative">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} />
          <OrbitControls />
          {renderShape()}
        </Canvas>
      </div>

      <div className="w-64 bg-white shadow-md p-4 space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">Properties</h2>

        <div className="space-y-2">
          <label className="block text-gray-600 text-sm">Width</label>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
            className="w-full border rounded px-2 py-1 focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter width"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-gray-600 text-sm">Height</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            className="w-full border rounded px-2 py-1 focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter height"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-gray-600 text-sm">Material</label>
          <select
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            className="w-full border rounded px-2 py-1 focus:outline-none focus:ring focus:ring-blue-200"
          >
            <option>Wood</option>
            <option>Metal</option>
            <option>Plastic</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Design;

const Cube: React.FC<{
  width: number;
  height: number;
  depth: number;
  material: string;
}> = ({ width, height, depth, material }) => {
  const cubeRef = useRef<any>();

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={cubeRef} position={[0, 1, 0]}>
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial
        color={
          material === "Wood"
            ? "#8B4513"
            : material === "Metal"
              ? "#C0C0C0"
              : "#808080"
        }
      />
    </mesh>
  );
};

const Cylinder: React.FC<{
  radius: number;
  height: number;
  material: string;
}> = ({ radius, height, material }) => {
  const cylinderRef = useRef<any>();

  useFrame(() => {
    if (cylinderRef.current) {
      cylinderRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={cylinderRef} position={[0, 1, 0]}>
      <cylinderGeometry args={[radius, radius, height, 32]} />
      <meshStandardMaterial
        color={
          material === "Wood"
            ? "#8B4513"
            : material === "Metal"
              ? "#C0C0C0"
              : "#808080"
        }
      />
    </mesh>
  );
};

const Sphere: React.FC<{ radius: number; material: string }> = ({
  radius,
  material,
}) => {
  const sphereRef = useRef<any>();

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={sphereRef} position={[0, 1, 0]}>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial
        color={
          material === "Wood"
            ? "#8B4513"
            : material === "Metal"
              ? "#C0C0C0"
              : "#808080"
        }
      />
    </mesh>
  );
};
