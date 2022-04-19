import React from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import sceneConfig from "@/config/scene-config";

type Props = {
  children?: React.ReactNode;
};

export default function Camera({ children }: Props) {
  return (
    <>
      <PerspectiveCamera makeDefault position={sceneConfig.camera.position}>
        <group
          position={sceneConfig.camera.position.clone().multiplyScalar(-1)}
        >
          {children}
        </group>
      </PerspectiveCamera>
      <OrbitControls makeDefault />
    </>
  );
}
