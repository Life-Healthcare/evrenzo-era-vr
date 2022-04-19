import React from "react";
import { PerspectiveCamera } from "@react-three/drei";
import canvasConfig from "@/config/canvas-config";

type Props = {
  children?: React.ReactNode;
};

export default function Camera({ children }: Props) {
  return (
    <PerspectiveCamera
      makeDefault
      position={canvasConfig.camera.position}
      near={0.0001}
      far={10000}
      frustumCulled={false}
    >
      <group position={canvasConfig.camera.position.clone().multiplyScalar(-1)}>
        {children}
      </group>
    </PerspectiveCamera>
  );
}
