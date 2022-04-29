import React from "react";
import { Text } from "@react-three/drei";
import Sphere from "@/components/sphere/sphere";
import { asset } from "@/utils";
import useAppState from "@/hooks/use-app-state";

export default function Scene() {
  const page = useAppState((state) => state.page);
  const id = React.useMemo(() => {
    return page.params?.id ?? 1;
  }, [page]);

  return (
    <Sphere key={id} src={asset(`/assets/scene/${id}.jpg`)}>
      <mesh>
        <planeBufferGeometry />
        <meshBasicMaterial color="crimson" />
      </mesh>
      <Text position={[0, 0, 0.001]}>{id}</Text>
    </Sphere>
  );
}
