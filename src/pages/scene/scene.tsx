import React from "react";
import { useParams } from "react-router-dom";
import { Text } from "@react-three/drei";
import Sphere from "@/components/sphere/sphere";
import assets from "@/config/assets";

export default function Scene() {
  const params = useParams();
  const id = React.useMemo(() => {
    return parseInt(params.id ?? "1");
  }, [params]);

  return (
    // @ts-ignore
    <Sphere key={id} src={assets.scene[id].sphere}>
      <mesh>
        <planeBufferGeometry />
        <meshBasicMaterial color="crimson" />
      </mesh>
      <Text position={[0, 0, 0.001]}>{id}</Text>
    </Sphere>
  );
}
