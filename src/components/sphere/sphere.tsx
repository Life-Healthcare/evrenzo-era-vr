import React from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import canvasConfig from "@/config/canvas-config";

type Props = {
  src: string;
  children?: React.ReactNode;
};

export default function Sphere({ src, children }: Props) {
  const texture = useTexture(src);

  const { camera } = useThree();

  const radius = React.useMemo(() => {
    const cam = camera as THREE.PerspectiveCamera;
    const fovInRadians = (cam.fov * Math.PI) / 180;
    const height = Math.abs(
      canvasConfig.camera.position.z * Math.tan(fovInRadians / 2) * 2
    );
    const width = height * cam.aspect;
    return Math.max(width, height) * 2;
  }, [camera]);

  return (
    <group>
      <mesh scale={[-1, 1, 1]} position={canvasConfig.camera.position.clone()}>
        <sphereBufferGeometry args={[radius, 64, 64]} />
        <meshBasicMaterial map={texture} side={THREE.BackSide} />
      </mesh>
      <group>{children}</group>
    </group>
  );
}
