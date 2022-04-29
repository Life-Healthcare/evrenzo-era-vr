import React from "react";
import { Interactive } from "@react-three/xr";
import { XRInteractionHandler } from "@react-three/xr/dist/Interactions";
import { GroupProps } from "@react-three/fiber";
import useImageTexture from "@/hooks/use-image-texture";

type Props = GroupProps & {
  image?: string;
  height?: number;
  onSelect?: XRInteractionHandler;
};

export default function Button({ image, height, onSelect, ...props }: Props) {
  const texture = useImageTexture(image, height);

  return (
    <Interactive onSelect={onSelect}>
      <group {...props}>
        <mesh frustumCulled={false}>
          <planeBufferGeometry args={texture.args} />
          <meshBasicMaterial transparent map={texture.map} />
        </mesh>
      </group>
    </Interactive>
  );
}
