import { Vector3 } from "@react-three/fiber";
import { Decal, Float, OrbitControls, useTexture } from "@react-three/drei";
import { FC } from "react";
import { Texture } from "three";

interface BallModalProps {
  position: Vector3;
  url: string;
}

const BallModal: FC<BallModalProps> = (props) => {
  const decal = useTexture(`/texture/${props.url}`);

  return (
    <Float
      speed={1.75}
      rotationIntensity={1}
      floatIntensity={2}
      position={props.position}
    >
      <ambientLight isLight={true} intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <OrbitControls enableZoom={false} />
      <mesh castShadow receiveShadow scale={2}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8ed"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal as Texture}
        />
      </mesh>
    </Float>
  );
};
export default BallModal;

{
  /*onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
  scale={active ? 1 : 2}*/
}
