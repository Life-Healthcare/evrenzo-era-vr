import React from "react";
import { Text } from "@react-three/drei";
import Camera from "@/components/camera/camera";
import Button from "@/components/button/button";
import sceneConfig from "@/config/scene-config";

export default function Home() {
  return (
    <React.Suspense fallback={<Text>Loading...</Text>}>
      <Camera />
      <group position={sceneConfig.camera.position.clone().multiplyScalar(-1)}>
        <mesh>
          <boxBufferGeometry />
          <meshBasicMaterial color="crimson" />
        </mesh>
        <Button>
          <Text>Tap</Text>
        </Button>
      </group>
    </React.Suspense>
  );
}
