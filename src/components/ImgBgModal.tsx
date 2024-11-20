import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC } from "react";

const ImgBgModal: FC = () => {
  return (
    <Canvas
      gl={{ antialias: true }}
      style={{
        width: "100%",
        height: "600px",
      }}
    >
      <ambientLight isLight={true} intensity={1} />
      <directionalLight position={[10, 10, 10]} intensity={3} />
      <OrbitControls enableZoom={false} />
      <Sphere args={[1, 100, 200]} scale={2.5}>
        <MeshDistortMaterial
          color="#321449"
          attach="material"
          distort={0.5}
          speed={2}
        />
      </Sphere>
    </Canvas>
  );
};
export default ImgBgModal;
