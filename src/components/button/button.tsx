import React from "react";
import { GroupProps } from "@react-three/fiber";
import useImageTexture from "@/hooks/use-image-texture";
import Interact from "@/components/interact/interact";

type Props = GroupProps & {
  image?: string;
  height?: number;
  onSelect?: () => void;
};

export default function Button({ image, height, onSelect, ...props }: Props) {
  const texture = useImageTexture(image, height);

  return (
    <Interact onSelect={onSelect}>
      <group {...props}>
        <mesh frustumCulled={false}>
          <planeBufferGeometry args={texture.args} />
          <meshBasicMaterial transparent map={texture.map} />
        </mesh>
      </group>
    </Interact>
  );
}
