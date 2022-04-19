import React from "react";
import { useParams } from "react-router-dom";
import { Text } from "@react-three/drei";

export default function Scene() {
  const params = useParams();
  const id = React.useMemo(() => {
    return parseInt(params.id ?? "1");
  }, [params]);

  return (
    <group>
      <mesh>
        <planeBufferGeometry />
        <meshBasicMaterial color="crimson" />
      </mesh>
      <Text position={[0, 0, 0.0001]}>{id}</Text>
    </group>
  );
}
