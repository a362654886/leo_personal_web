import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, RenderTexture, Text } from "@react-three/drei";

const EarthCanvas = () => {
  const textRef = useRef();
  const Cube = () => {
    return (
      <mesh>
        <boxGeometry args={[3,3,3]} />
        <meshStandardMaterial>
          <RenderTexture attach="map" anisotropy={16}>
            <color attach="background" args={["orange"]} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} />
            <Text ref={textRef} fontSize={4} color="#555">
              hello
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </mesh>
    );
  };

  return (
    <Canvas camera={{ position: [10, 10, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <Cube />
      <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />
    </Canvas>
  );
};

export default EarthCanvas;
