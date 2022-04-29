import React from "react";
import { GroupProps } from "@react-three/fiber";
import useImageTexture from "@/hooks/use-image-texture";

type Props = GroupProps & {
  src?: string;
  height?: number;
};

export default function Image({ src, height, ...props }: Props) {
  const texture = useImageTexture(src, height);

  return (
    <group {...props}>
      <mesh frustumCulled={false}>
        <planeBufferGeometry args={texture.args} />
        <meshBasicMaterial transparent map={texture.map} />
      </mesh>
    </group>
  );
}
